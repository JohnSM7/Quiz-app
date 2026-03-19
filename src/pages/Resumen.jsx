import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Resumen() {
  const navigate = useNavigate();
  return (
    <div className="bg-background text-on-background min-h-screen selection:bg-secondary selection:text-on-secondary">
      

<header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 h-20 bg-[#0e0e10]/60 backdrop-blur-2xl">
<div className="text-2xl font-black text-[#d095ff] tracking-tighter font-headline">Electric Arena</div>
<div className="hidden md:flex gap-8 items-center">
<a className="text-zinc-500 font-medium hover:text-[#26fedc] transition-colors duration-200 font-label" href="#">Lobby</a>
<a className="text-zinc-500 font-medium hover:text-[#26fedc] transition-colors duration-200 font-label" href="#">Leaderboard</a>
<a className="text-zinc-500 font-medium hover:text-[#26fedc] transition-colors duration-200 font-label" href="#">Rewards</a>
<a className="text-[#d095ff] font-bold border-b-2 border-[#d095ff] font-label" href="#">Profile</a>
</div>
<div className="flex items-center gap-4">
<button className="material-symbols-outlined text-[#d095ff] active:scale-95 transition-transform duration-150">settings</button>
</div>
</header>
<main className="min-h-screen pt-24 pb-32 px-6 flex flex-col items-center justify-center bg-mesh relative overflow-hidden">

<div className="absolute top-1/4 left-10 w-24 h-24 bg-primary/10 rounded-full blur-3xl"></div>
<div className="absolute bottom-1/4 right-10 w-32 h-32 bg-secondary/10 rounded-full blur-3xl"></div>

<div className="w-full max-w-2xl flex flex-col items-center space-y-10 z-10">

<div className="w-full glass-panel rounded-lg p-8 md:p-12 text-center relative border border-outline-variant/10">

<div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-tertiary-container px-6 py-2 rounded-full shadow-lg">
<span className="text-on-tertiary-container font-headline font-extrabold text-sm tracking-widest uppercase">¡NIVEL COMPLETADO!</span>
</div>
<h1 className="font-headline font-black text-6xl md:text-8xl text-primary tracking-tighter mt-4 drop-shadow-[0_0_15px_rgba(208,149,255,0.4)]">¡APROBADO!</h1>
<p className="mt-4 text-on-surface-variant text-lg font-medium max-w-md mx-auto">
                    ¡Buen trabajo! Has superado el reto con éxito.
                </p>

<div className="mt-12 mb-8 flex flex-col items-center">
<div className="relative w-48 h-48 md:w-56 md:h-56 flex items-center justify-center">

<svg className="absolute inset-0 w-full h-full -rotate-90">
<circle className="text-surface-container-highest" cx="50%" cy="50%" fill="transparent" r="45%" stroke="currentColor" strokeWidth="8" /></circle>
<circle className="text-secondary drop-shadow-[0_0_8px_rgba(38,254,220,0.5)]" cx="50%" cy="50%" fill="transparent" r="45%" stroke="currentColor" stroke-dasharray="282.7" stroke-dashoffset="84.8" strokeWidth="12" /></circle>
</svg>
<div className="text-center">
<span className="block font-headline font-black text-5xl md:text-6xl text-white">7/10</span>
<span className="block font-label text-xs uppercase tracking-[0.2em] text-secondary font-bold mt-1">aciertos</span>
</div>
</div>
</div>

<div className="grid grid-cols-2 gap-4 w-full max-w-sm mx-auto">
<div className="bg-surface-container-high rounded-lg p-4 text-left border-l-4 border-secondary">
<span className="block text-xs text-on-surface-variant font-label uppercase font-bold">Tiempo</span>
<span className="text-xl font-headline font-bold text-white">04:32</span>
</div>
<div className="bg-surface-container-high rounded-lg p-4 text-left border-l-4 border-primary">
<span className="block text-xs text-on-surface-variant font-label uppercase font-bold">Puntos</span>
<span className="text-xl font-headline font-bold text-white">1,450</span>
</div>
</div>
</div>

<div className="flex flex-col md:flex-row gap-4 w-full max-w-md">
<button className="flex-1 bg-gradient-to-r from-primary to-primary-container text-on-primary-container font-headline font-extrabold py-5 px-8 rounded-full text-lg shadow-[0_10px_30px_rgba(208,149,255,0.3)] hover:brightness-110 active:scale-95 transition-all duration-200">
                    Ver Ranking Global
                </button>
<button className="flex-1 bg-secondary-container text-on-secondary-container font-headline font-extrabold py-5 px-8 rounded-full text-lg hover:brightness-110 active:scale-95 transition-all duration-200">
                    Volver a Jugar
                </button>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
<div className="bg-surface-container-high p-6 rounded-lg flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center text-secondary">
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span>
</div>
<div>
<p className="text-xs font-label uppercase tracking-wider text-on-surface-variant">Racha</p>
<p className="text-xl font-headline font-bold">5 Seguidas</p>
</div>
</div>
<div className="bg-surface-container-high p-6 rounded-lg flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>military_tech</span>
</div>
<div>
<p className="text-xs font-label uppercase tracking-wider text-on-surface-variant">Nivel</p>
<p className="text-xl font-headline font-bold">Pro Gamer</p>
</div>
</div>
<div className="bg-surface-container-high p-6 rounded-lg flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-tertiary-container/20 flex items-center justify-center text-tertiary">
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>stars</span>
</div>
<div>
<p className="text-xs font-label uppercase tracking-wider text-on-surface-variant">Bonus</p>
<p className="text-xl font-headline font-bold">+250 XP</p>
</div>
</div>
</div>
</div>
</main>

<nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-6 pb-8 pt-4 bg-[#0e0e10]/80 backdrop-blur-3xl rounded-t-[2.5rem] shadow-[0_-10px_40px_rgba(0,0,0,0.5)] md:hidden">
<a className="flex flex-col items-center justify-center text-zinc-500 opacity-60 active:scale-90 transition-all duration-200 ease-out font-label" href="#">
<span className="material-symbols-outlined mb-1">home</span>
<span className="text-[10px] font-extrabold uppercase tracking-widest">Lobby</span>
</a>
<a className="flex flex-col items-center justify-center text-zinc-500 opacity-60 active:scale-90 transition-all duration-200 ease-out font-label" href="#">
<span className="material-symbols-outlined mb-1">emoji_events</span>
<span className="text-[10px] font-extrabold uppercase tracking-widest">Leaderboard</span>
</a>
<a className="flex flex-col items-center justify-center text-zinc-500 opacity-60 active:scale-90 transition-all duration-200 ease-out font-label" href="#">
<span className="material-symbols-outlined mb-1">military_tech</span>
<span className="text-[10px] font-extrabold uppercase tracking-widest">Rewards</span>
</a>
<a className="flex flex-col items-center justify-center bg-gradient-to-b from-[#d095ff]/20 to-transparent text-[#d095ff] rounded-2xl px-5 py-2 active:scale-90 transition-all duration-200 ease-out font-label" href="#">
<span className="material-symbols-outlined mb-1" style={{ fontVariationSettings: "'FILL' 1" }}>person</span>
<span className="text-[10px] font-extrabold uppercase tracking-widest">Profile</span>
</a>
</nav>

    </div>
  );
}
