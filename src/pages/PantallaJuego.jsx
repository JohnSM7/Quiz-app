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
  const [selectedIdx, setSelectedIdx] = useState(null);
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
      setSelectedIdx(null);
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
    setSelectedIdx(index);
    const isCorrect = index === currentQuestion.correctIndex;
    await submitAnswer(index, isCorrect, timeLeft);

    if (isSolo) {
      setTimeout(handleNextSolo, 2500); // 2.5s to see the result
    }
  };

  if (!currentQuestion) return (
    <div className="bg-background-dark min-h-screen flex items-center justify-center">
      <div className="text-primary animate-pulse font-headline font-black text-2xl italic">CARGANDO ARENA...</div>
    </div>
  );

  return (
    <div className="bg-background-dark text-on-surface min-h-screen">
      <header className="fixed top-0 w-full flex justify-between items-center px-6 py-4 h-20 bg-background-dark/80 backdrop-blur-xl z-50 border-b border-white/5">
        <div className="text-primary font-black italic tracking-tighter text-2xl uppercase">QUIZ ARENA</div>
        <div className="flex items-center gap-6">
          <div className={`flex items-center gap-2 px-6 py-2 rounded-full border transition-colors ${timeLeft < 5 ? 'bg-error/20 text-error border-error animate-pulse' : 'bg-secondary/20 text-secondary border-secondary'}`}>
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>timer</span>
            <span className="font-headline font-bold text-2xl">{timeLeft}s</span>
          </div>
        </div>
      </header>

      <main className="pt-24 pb-32 px-4 md:px-8 max-w-5xl mx-auto">
        <div className="space-y-6">
          <div className="bg-surface-bright rounded-2xl p-8 relative overflow-hidden border border-white/5 shadow-2xl">
            <div className={`absolute top-0 left-0 w-2 h-full shadow-[0_0_20px_rgba(208,149,255,0.4)] transition-colors ${answered ? (selectedIdx === currentQuestion.correctIndex ? 'bg-success' : 'bg-error') : 'bg-primary'}`}></div>
            <span className="text-white/40 text-[10px] font-black tracking-widest uppercase mb-2 block">PREGUNTA {currentQuestionIndex + 1} DE {currentQuiz?.questions?.length}</span>
            <h1 className="text-2xl md:text-4xl font-black text-white italic uppercase tracking-tight leading-tight">
              {currentQuestion.text}
            </h1>
          </div>

          <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-surface-container border border-white/5 shadow-inner">
            <img src={currentQuiz?.image} alt="Quiz" className="w-full h-full object-cover brightness-[0.4]" />
            <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent"></div>
            
            <div className="absolute inset-0 flex items-center justify-center">
               {answered && (
                 <div className={`text-6xl font-black italic uppercase tracking-tighter animate-in zoom-in duration-300 ${selectedIdx === currentQuestion.correctIndex ? 'text-success drop-shadow-[0_0_20px_rgba(34,197,94,0.5)]' : 'text-error drop-shadow-[0_0_20px_rgba(239,68,68,0.5)]'}`}>
                   {selectedIdx === currentQuestion.correctIndex ? '¡CORRECTO!' : '¡INCORRECTO!'}
                 </div>
               )}
            </div>

            <div className="absolute bottom-6 left-6 right-6">
              <div className="h-2.5 w-full bg-white/10 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-secondary transition-all duration-1000 ease-linear shadow-[0_0_20px_rgba(38,254,220,0.6)]" 
                  style={{ width: `${(timeLeft / (currentQuestion.timeLimit || 15)) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {currentQuestion.options.map((opt, idx) => {
              const isCorrect = idx === currentQuestion.correctIndex;
              const isSelected = idx === selectedIdx;
              
              let btnClass = "bg-surface-bright border-white/5 hover:border-primary/40 hover:bg-white/5";
              let iconClass = "bg-primary/20 text-primary";

              if (answered) {
                if (isCorrect) {
                  btnClass = "bg-success/20 border-success shadow-[0_0_25px_rgba(34,197,94,0.4)] scale-[1.02]";
                  iconClass = "bg-success text-on-success";
                } else if (isSelected && !isCorrect) {
                  btnClass = "bg-error/20 border-error opacity-100";
                  iconClass = "bg-error text-white";
                } else {
                  btnClass = "bg-white/5 border-white/5 opacity-30 grayscale";
                }
              }

              return (
                <button 
                  key={idx}
                  disabled={answered || timeLeft === 0}
                  onClick={() => onAnswer(idx)}
                  className={`group relative flex items-center justify-between p-7 rounded-2xl transition-all duration-300 active:scale-95 text-left border ${btnClass}`}
                >
                  <div className="flex items-center gap-5">
                    <span className={`w-12 h-12 flex items-center justify-center rounded-xl font-headline font-black text-xl transition-all ${iconClass}`}>
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span className="text-white font-black text-xl uppercase italic tracking-tight">{opt}</span>
                  </div>
                  {answered && isCorrect && (
                    <span className="material-symbols-outlined text-success text-3xl animate-in fade-in zoom-in">check_circle</span>
                  )}
                  {answered && isSelected && !isCorrect && (
                    <span className="material-symbols-outlined text-error text-3xl animate-in fade-in zoom-in font-bold">cancel</span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </main>

      <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 py-8 bg-background-dark/95 backdrop-blur-3xl border-t border-white/5">
        <div className="flex flex-col items-center">
          <span className="text-white/30 text-[10px] font-black uppercase tracking-[0.2em]">RACHA ACTIVA</span>
          <div className="flex items-center gap-2 text-primary">
            <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>local_fire_department</span>
            <span className="text-3xl font-black font-headline italic tracking-tighter">X{currentPlayer?.streak || 0}</span>
          </div>
        </div>

        <div className="bg-secondary/15 border border-secondary/30 px-12 py-4 rounded-3xl shadow-[0_0_40px_rgba(38,254,220,0.1)] group">
          <span className="text-secondary font-black text-4xl font-headline italic tracking-tighter group-hover:scale-110 transition-transform block">
            {currentPlayer?.score?.toLocaleString() || 0} <span className="text-xs uppercase ml-1 opacity-50">PTS</span>
          </span>
        </div>

        <div className="flex flex-col items-center">
          <span className="text-white/30 text-[10px] font-black uppercase tracking-[0.2em]">{isSolo ? 'MODO SOLO' : 'JUGADOR'}</span>
          <span className="text-white font-black font-headline text-lg uppercase italic tracking-widest">{currentPlayer?.nickname || 'PLAYER'}</span>
        </div>
      </nav>
    </div>
  );
}
