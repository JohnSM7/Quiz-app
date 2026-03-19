import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuiz } from '../context/QuizContext';
import { db } from '../lib/firebase';
import { ref, update } from 'firebase/database';

export default function PantallaJuego() {
  const navigate = useNavigate();
  const { room, currentPlayer, currentPlayerId, allQuizzes, submitAnswer } = useQuiz();
  const [timeLeft, setTimeLeft] = useState(15);
  const [answered, setAnswered] = useState(false);
  const [isSolo, setIsSolo] = useState(false);

  const quizId = room?.activeQuizId;
  const currentQuiz = allQuizzes[quizId];
  const currentQuestionIndex = room?.currentQuestionIndex || 0;
  const currentQuestion = currentQuiz?.questions?.[currentQuestionIndex];

  useEffect(() => {
    if (currentPlayerId?.startsWith('solo_')) {
      setIsSolo(true);
    }
  }, [currentPlayerId]);

  const handleNextSolo = useCallback(async () => {
    if (!isSolo) return;
    const nextIdx = currentQuestionIndex + 1;
    if (nextIdx < (currentQuiz?.questions?.length || 0)) {
      const roomRef = ref(db, `rooms/solo_${currentPlayerId}`);
      await update(roomRef, { 
        currentQuestionIndex: nextIdx,
        status: 'playing' 
      });
      setAnswered(false);
      setTimeLeft(currentQuestion?.timeLimit || 15);
    } else {
      navigate('/resumen');
    }
  }, [isSolo, currentQuestionIndex, currentQuiz, currentPlayerId, navigate, currentQuestion]);

  useEffect(() => {
    if (!currentQuestion) return;
    
    setTimeLeft(currentQuestion.timeLimit || 15);
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          if (isSolo && !answered) {
            // Auto-next if time up in solo
            setTimeout(handleNextSolo, 2000);
          }
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [currentQuestionIndex, currentQuestion, isSolo, handleNextSolo, answered]);

  const onAnswer = async (index) => {
    if (answered || timeLeft === 0) return;
    setAnswered(true);
    const isCorrect = index === currentQuestion.correctIndex;
    await submitAnswer(index, isCorrect, timeLeft);

    if (isSolo) {
      // Small delay then next question
      setTimeout(handleNextSolo, 1500);
    }
  };

  if (!currentQuestion) return <div className="text-white p-20 text-center">Cargando pregunta...</div>;

  return (
    <div className="bg-background-dark text-on-surface min-h-screen selection:bg-secondary selection:text-on-secondary">
      <header className="fixed top-0 w-full flex justify-between items-center px-6 py-4 h-20 bg-background-dark/80 backdrop-blur-xl z-50 border-b border-white/5">
        <div className="text-primary font-black italic tracking-tighter text-2xl uppercase">QUIZ ARENA</div>
        <div className="flex items-center gap-6">
          <div className={`flex items-center gap-2 px-4 py-2 rounded-full border ${timeLeft < 5 ? 'bg-error/20 text-error border-error' : 'bg-secondary/20 text-secondary border-secondary'}`}>
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>timer</span>
            <span className="font-headline font-bold text-xl">{timeLeft}s</span>
          </div>
        </div>
      </header>

      <main className="pt-24 pb-32 px-4 md:px-8 max-w-7xl mx-auto flex flex-col items-center">
        <div className="w-full max-w-4xl space-y-6">
          <div className="bg-surface-bright rounded-2xl p-8 relative overflow-hidden border border-white/5">
            <div className="absolute top-0 left-0 w-2 h-full bg-primary shadow-[0_0_15px_rgba(208,149,255,0.5)]"></div>
            <span className="text-primary/60 text-[10px] font-black tracking-widest uppercase mb-2 block">PREGUNTA {currentQuestionIndex + 1}/{currentQuiz?.questions?.length}</span>
            <h1 className="text-2xl md:text-3xl font-black text-white italic uppercase tracking-tight leading-tight">
              {currentQuestion.text}
            </h1>
          </div>

          <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-surface-container border border-white/5 shadow-2xl">
            <img src={currentQuiz?.image} alt="Quiz" className="w-full h-full object-cover brightness-50" />
            <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent"></div>
            
            <div className="absolute bottom-6 left-6 right-6">
              <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-secondary transition-all duration-1000 ease-linear shadow-[0_0_15px_rgba(38,254,220,0.5)]" 
                  style={{ width: `${(timeLeft / (currentQuestion.timeLimit || 15)) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {currentQuestion.options.map((opt, idx) => (
              <button 
                key={idx}
                disabled={answered || timeLeft === 0}
                onClick={() => onAnswer(idx)}
                className={`group relative flex items-center justify-between p-6 rounded-2xl transition-all duration-300 active:scale-95 text-left border ${
                  answered && idx === currentQuestion.correctIndex ? 'bg-success/20 border-success shadow-[0_0_15px_rgba(34,197,94,0.3)]' :
                  answered && idx !== currentQuestion.correctIndex ? 'bg-white/5 border-white/5 opacity-40' :
                  'bg-surface-bright border-white/5 hover:border-primary/40 hover:bg-white/5'
                }`}
              >
                <div className="flex items-center gap-4">
                  <span className={`w-10 h-10 flex items-center justify-center rounded-xl font-headline font-black transition-colors ${
                    answered && idx === currentQuestion.correctIndex ? 'bg-success text-on-success' : 'bg-primary/20 text-primary group-hover:bg-primary group-hover:text-background-dark'
                  }`}>
                    {String.fromCharCode(65 + idx)}
                  </span>
                  <span className="text-white font-bold text-lg uppercase italic tracking-tight">{opt}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </main>

      <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 py-6 bg-background-dark/95 backdrop-blur-xl border-t border-white/5">
        <div className="flex flex-col items-center">
          <span className="text-white/40 text-[9px] font-black uppercase tracking-widest">RACHA</span>
          <div className="flex items-center gap-1 text-primary">
            <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>local_fire_department</span>
            <span className="text-xl font-black font-headline italic">X{currentPlayer?.streak || 0}</span>
          </div>
        </div>

        <div className="bg-secondary/20 border border-secondary/30 px-10 py-3 rounded-full shadow-[0_0_20px_rgba(38,254,220,0.1)]">
          <span className="text-secondary font-black text-2xl font-headline italic tracking-tighter">{currentPlayer?.score || 0} <span className="text-[10px]">PTS</span></span>
        </div>

        <div className="flex flex-col items-center">
          <span className="text-white/40 text-[9px] font-black uppercase tracking-widest">JUGADOR</span>
          <span className="text-white font-black font-headline text-xs uppercase italic tracking-wider">{currentPlayer?.nickname || 'PRO PLAYER'}</span>
        </div>
      </nav>
    </div>
  );
}
