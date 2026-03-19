import React, { createContext, useContext, useEffect, useState } from 'react';
import { db } from '../lib/firebase';
import { ref, onValue, set, update, get } from 'firebase/database';

const QuizContext = createContext({});

export function useQuiz() {
  return useContext(QuizContext);
}

export function QuizProvider({ children }) {
  const [room, setRoom] = useState(null);
  const [currentPlayerId, setCurrentPlayerId] = useState(() => localStorage.getItem('currentPlayerId') || null);
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('quiz_user');
    return saved ? JSON.parse(saved) : null;
  });

  // Sync Room State continuously
  useEffect(() => {
    const roomRef = ref(db, 'rooms/main');
    const unsubscribe = onValue(roomRef, (snapshot) => {
      if (snapshot.exists()) {
        setRoom(snapshot.val());
      } else {
        // Init room if empty string/doesn't exist
        const initialRoom = {
          status: 'lobby', // lobby, instructions, playing, feedback, podium
          currentQuestionIndex: 0,
          players: {}
        };
        set(roomRef, initialRoom);
      }
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
  const login = (username, password) => {
    // Simple demo logic: "admin" for admin, anything else for participant
    const role = username.toLowerCase() === 'admin' ? 'admin' : 'participant';
    const userData = { username, role };
    setUser(userData);
    localStorage.setItem('quiz_user', JSON.stringify(userData));
    return role;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('quiz_user');
    localStorage.removeItem('currentPlayerId');
  };

  // Player Controls
  const joinGame = async (nickname) => {
    const playerId = 'player_' + Math.random().toString(36).substr(2, 9);
    localStorage.setItem('currentPlayerId', playerId);
    setCurrentPlayerId(playerId);

    const playerRef = ref(db, `rooms/main/players/${playerId}`);
    await set(playerRef, {
      nickname,
      score: 0,
      streak: 0,
    });
    return playerId;
  };

  const submitAnswer = async (selectedOption, isCorrect, timeRemaining) => {
    if (!currentPlayerId) return;
    
    // Calculate Score (Simple base 1000 + time bonus)
    const pts = isCorrect ? 1000 + (timeRemaining * 10) : 0;

    const playerRef = ref(db, `rooms/main/players/${currentPlayerId}`);
    const snapshot = await get(playerRef);
    if (!snapshot.exists()) return;

    let { score = 0, streak = 0 } = snapshot.val();
    
    if (isCorrect) {
      streak += 1;
      score += pts + (streak * 100); // Streak Bonus
    } else {
      streak = 0;
    }

    await update(playerRef, { score, streak });
    // Save their answer to specific question to avoid double answering
    await set(ref(db, `rooms/main/answers/${room?.currentQuestionIndex}/${currentPlayerId}`), {
      selectedOption,
      isCorrect,
      pts
    });
  };

  const currentPlayer = currentPlayerId && room?.players ? room.players[currentPlayerId] : null;

  return (
    <QuizContext.Provider value={{
      room,
      user,
      currentPlayer,
      currentPlayerId,
      setRoomStatus,
      nextQuestion,
      joinGame,
      submitAnswer,
      login,
      logout
    }}>
      {children}
    </QuizContext.Provider>
  );
}
