import React, { useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useQuiz } from '../context/QuizContext';

export default function Resumen() {
  const navigate = useNavigate();
  const { currentPlayer, activeQuizId, saveQuizResult, logout } = useQuiz();
  const hasSaved = useRef(false);

  useEffect(() => {
    if (currentPlayer && activeQuizId && !hasSaved.current) {
      saveQuizResult(activeQuizId, currentPlayer.score);
      hasSaved.current = true;
    }
  }, [currentPlayer, activeQuizId, saveQuizResult]);

  return (
    <div className="bg-background-dark text-on-surface min-h-screen selection:bg-secondary selection:text-on-secondary">
      
<header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 h-20 bg-background-dark/60 backdrop-blur-2xl">
<div className="text-2xl font-black text-primary tracking-tighter font-headline">Electric Arena</div>
<div className="flex items-center gap-4">
<button onClick={() => navigate('/dashboard')} className="material-symbols-outlined text-primary">home</button>
</div>
</header>
<main className="min-h-screen pt-24 pb-32 px-6 flex flex-col items-center justify-center relative overflow-hidden">

<div className="absolute top-1/4 left-10 w-24 h-24 bg-primary/10 rounded-full blur-3xl"></div>
<div className="absolute bottom-1/4 right-10 w-32 h-32 bg-secondary/10 rounded-full blur-3xl"></div>

<div className="w-full max-w-2xl flex flex-col items-center space-y-10 z-10">

<div className="w-full glass-card rounded-lg p-8 md:p-12 text-center relative border border-outline-variant/10">

<div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-secondary text-on-secondary px-6 py-2 rounded-full shadow-lg">
<span className="font-headline font-extrabold text-sm tracking-widest uppercase">¡NIVEL COMPLETADO!</span>
</div>
<h1 className="font-headline font-black text-6xl md:text-8xl text-primary tracking-tighter mt-4 drop-shadow-[0_0_15px_rgba(208,149,255,0.4)] uppercase">
  {currentPlayer?.score > 0 ? '¡APROBADO!' : 'FIN DEL JUEGO'}
</h1>
<p className="mt-4 text-on-surface-variant text-lg font-medium max-w-md mx-auto">
                    {currentPlayer?.score > 0 ? '¡Buen trabajo! Has superado el reto con éxito.' : '¡Vuelve a intentarlo para mejorar tu puntuación!'}
                </p>

<div className="mt-12 mb-8 flex flex-col items-center">
<div className="relative w-48 h-48 md:w-56 md:h-56 flex items-center justify-center">

<svg className="absolute inset-0 w-full h-full -rotate-90">
<circle className="text-surface-bright" cx="50%" cy="50%" fill="transparent" r="45%" stroke="currentColor" strokeWidth="8" />
<circle className="text-secondary drop-shadow-[0_0_8px_rgba(38,254,220,0.5)]" cx="50%" cy="50%" fill="transparent" r="45%" stroke="currentColor" strokeDasharray="282.7" strokeDashoffset="0" strokeWidth="12" />
</svg>
<div className="text-center">
<span className="block font-headline font-black text-5xl md:text-6xl text-white">{currentPlayer?.score || 0}</span>
<span className="block font-label text-xs uppercase tracking-[0.2em] text-secondary font-bold mt-1">puntos</span>
</div>
</div>
</div>

<div className="grid grid-cols-1 gap-4 w-full max-w-sm mx-auto">
<div className="bg-surface-bright rounded-lg p-4 text-left border-l-4 border-primary">
<span className="block text-xs text-on-surface-variant font-label uppercase font-bold">Puntos Totales</span>
<span className="text-xl font-headline font-bold text-white uppercase">{currentPlayer?.score?.toLocaleString() || 0} PTS</span>
</div>
</div>
</div>

<div className="flex flex-col md:flex-row gap-4 w-full max-w-md">
<button className="flex-1 bg-gradient-to-r from-primary to-primary-container text-on-primary-container font-headline font-extrabold py-5 px-8 rounded-full text-lg shadow-[0_10px_30px_rgba(208,149,255,0.3)] hover:brightness-110 active:scale-95 transition-all duration-200">
                    Ver Ranking Global
                </button>
<button onClick={() => navigate('/dashboard')} className="flex-1 bg-surface-bright text-on-surface font-headline font-extrabold py-5 px-8 rounded-full text-lg hover:brightness-110 active:scale-95 transition-all duration-200 uppercase">
                    Volver a Jugar
                </button>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
<div className="bg-surface-bright p-6 rounded-lg flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center text-secondary">
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span>
</div>
<div>
<p className="text-xs font-label uppercase tracking-wider text-on-surface-variant">Racha Máxima</p>
<p className="text-xl font-headline font-bold">{currentPlayer?.streak || 0} Seguidas</p>
</div>
</div>
<div className="bg-surface-bright p-6 rounded-lg flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>stars</span>
</div>
<div>
<p className="text-xs font-label uppercase tracking-wider text-on-surface-variant">XP Ganada</p>
<p className="text-xl font-headline font-bold">+{currentPlayer?.score || 0} XP</p>
</div>
</div>
</div>
</div>
</main>
    </div>
  );
}
