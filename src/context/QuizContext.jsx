import React, { createContext, useContext, useEffect, useState } from 'react';
import { db } from '../lib/firebase';
import { ref, onValue, set, update, get } from 'firebase/database';

const QuizContext = createContext({});

export function useQuiz() {
  return useContext(QuizContext);
}

export function QuizProvider({ children }) {
  const [room, setRoom] = useState(null);
  const [soloRoom, setSoloRoom] = useState(null);
  const [currentPlayerId, setCurrentPlayerId] = useState(() => localStorage.getItem('currentPlayerId') || null);
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('quiz_user');
    return saved ? JSON.parse(saved) : null;
  });
  const [allQuizzes, setAllQuizzes] = useState({});
  const [allUsers, setAllUsers] = useState({});
  const [activeQuizId, setActiveQuizId] = useState(null);

  // Sync Room State continuously
  useEffect(() => {
    const roomRef = ref(db, 'rooms/main');
    const unsubscribe = onValue(roomRef, (snapshot) => {
      if (snapshot.exists()) {
        setRoom(snapshot.val());
      } else {
        const initialRoom = {
          status: 'lobby',
          currentQuestionIndex: 0,
          players: {}
        };
        set(roomRef, initialRoom);
      }
    });
    return () => unsubscribe();
  }, []);

  // Sync Global Quizzes
  useEffect(() => {
    const qRef = ref(db, 'quizzes');
    const unsubscribe = onValue(qRef, (snapshot) => {
      if (snapshot.exists()) setAllQuizzes(snapshot.val());
    });
    return () => unsubscribe();
  }, []);

  // Sync Global Users
  useEffect(() => {
    const uRef = ref(db, 'users');
    const unsubscribe = onValue(uRef, (snapshot) => {
      if (snapshot.exists()) setAllUsers(snapshot.val());
    });
    return () => unsubscribe();
  }, []);

  // Admin Controls
  const setRoomStatus = (status) => {
    update(ref(db, 'rooms/main'), { status });
  };

  const nextQuestion = (index) => {
    update(ref(db, 'rooms/main'), { 
      currentQuestionIndex: index,
      status: 'playing' 
    });
  };

  // Auth Controls
  const login = async (username, password) => {
    const userRef = ref(db, `users/${username.toLowerCase()}`);
    const snapshot = await get(userRef);
    
    if (snapshot.exists()) {
      const userData = snapshot.val();
      if (userData.password === password) {
        setUser(userData);
        localStorage.setItem('quiz_user', JSON.stringify(userData));
        return userData.role;
      } else {
        throw new Error('Contraseña incorrecta');
      }
    } else {
      throw new Error('Usuario no encontrado');
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('quiz_user');
    localStorage.removeItem('currentPlayerId');
  };

  // Player Controls
  const joinGame = async (nickname, quizId) => {
    const playerId = 'player_' + Math.random().toString(36).substr(2, 9);
    localStorage.setItem('currentPlayerId', playerId);
    setCurrentPlayerId(playerId);
    setActiveQuizId(quizId);

    const playerRef = ref(db, `rooms/main/players/${playerId}`);
    await set(playerRef, {
      nickname,
      score: 0,
      streak: 0,
    });
    return playerId;
  };

  const startSoloGame = async (nickname, quizId) => {
    const playerId = 'solo_' + (user?.username?.toLowerCase() || 'invitado');
    localStorage.setItem('currentPlayerId', playerId);
    setCurrentPlayerId(playerId);
    setActiveQuizId(quizId);

    const soloRef = ref(db, `rooms/solo_${playerId}`);
    const initialSolo = {
      status: 'playing',
      currentQuestionIndex: 0,
      activeQuizId: quizId,
      players: {
        [playerId]: { nickname, score: 0, streak: 0 }
      }
    };
    await set(soloRef, initialSolo);
    
    // Subscribe to this solo room
    onValue(soloRef, (snap) => {
      if (snap.exists()) setRoom(snap.val());
    });
  };

  const submitAnswer = async (selectedOption, isCorrect, timeRemaining) => {
    if (!currentPlayerId) return;
    const pts = isCorrect ? 1000 + (timeRemaining * 10) : 0;
    const playerRef = ref(db, `rooms/main/players/${currentPlayerId}`);
    const snapshot = await get(playerRef);
    if (!snapshot.exists()) return;

    let { score = 0, streak = 0 } = snapshot.val();
    if (isCorrect) {
      streak += 1;
      score += pts + (streak * 100);
    } else {
      streak = 0;
    }

    await update(playerRef, { score, streak });
    await set(ref(db, `rooms/main/answers/${room?.currentQuestionIndex}/${currentPlayerId}`), {
      selectedOption,
      isCorrect,
      pts
    });
  };

  const createQuiz = async (quizData) => {
    const quizId = quizData.id || 'q_' + Date.now();
    const newQuiz = { ...quizData, id: quizId };
    await set(ref(db, `quizzes/${quizId}`), newQuiz);
    return quizId;
  };

  const createUser = async (userData) => {
    const username = userData.username.toLowerCase();
    await set(ref(db, `users/${username}`), {
      ...userData,
      role: 'participant',
      stats: { xp: 0, level: 1 },
      assignedQuizzes: []
    });
  };

  const assignQuizToUser = async (username, quizId) => {
    const cleanUsername = username.toLowerCase();
    const userRef = ref(db, `users/${cleanUsername}`);
    const snap = await get(userRef);
    if (snap.exists()) {
      const uData = snap.val();
      const assigned = uData.assignedQuizzes || [];
      if (!assigned.includes(quizId)) {
        await update(userRef, {
          assignedQuizzes: [...assigned, quizId]
        });
      }
    }
  };

  const saveQuizResult = async (quizId, score) => {
    if (!user) return;
    const username = user.username.toLowerCase();
    const resultRef = ref(db, `users/${username}/results/${Date.now()}`);
    await set(resultRef, { quizId, score, date: new Date().toISOString() });
    
    // Update stats
    const statsRef = ref(db, `users/${username}/stats`);
    const snapshot = await get(statsRef);
    const stats = snapshot.val() || { xp: 0, level: 1 };
    const newXp = (stats.xp || 0) + score;
    await update(statsRef, {
      xp: newXp,
      level: Math.floor(newXp / 1000) + 1
    });
    
    // Refresh local user
    const updatedUser = await get(ref(db, `users/${username}`));
    setUser(updatedUser.val());
    localStorage.setItem('quiz_user', JSON.stringify(updatedUser.val()));
  };

  const currentPlayer = currentPlayerId && room?.players ? room.players[currentPlayerId] : null;

  return (
    <QuizContext.Provider value={{
      room,
      user,
      allQuizzes,
      allUsers,
      currentPlayer,
      currentPlayerId,
      setRoomStatus,
      nextQuestion,
      joinGame,
      submitAnswer,
      login,
      logout,
      saveQuizResult,
      createQuiz,
      createUser,
      assignQuizToUser,
      startSoloGame,
      activeQuizId
    }}>
      {children}
    </QuizContext.Provider>
  );
}
