import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Feedback() {
  const navigate = useNavigate();
  return (
    <div className="bg-background text-on-background min-h-screen selection:bg-secondary selection:text-on-secondary">
      

<header className="fixed top-0 w-full flex justify-between items-center px-6 py-4 h-20 bg-[#0e0e10]/80 backdrop-blur-xl border-none bg-surface-container-low shadow-2xl shadow-[#9D4EDD]/10 z-50">
<div className="flex items-center gap-2">
<span className="text-[#d095ff] font-black italic tracking-tighter text-2xl">QUIZ ARENA</span>
</div>
<div className="flex items-center gap-6">
<div className="hidden md:flex gap-8">
<span className="font-['Plus_Jakarta_Sans'] font-bold tracking-tight text-xl uppercase text-[#26fedc] border-b-2 border-[#26fedc] pb-1 cursor-pointer">GAME</span>
<span className="font-['Plus_Jakarta_Sans'] font-bold tracking-tight text-xl uppercase text-[#d095ff]/60 hover:brightness-125 transition-all duration-200 cursor-pointer">LEADERBOARD</span>
</div>
<div className="flex gap-4">
<button className="text-[#d095ff]/60 hover:brightness-125 transition-all duration-200 active:scale-95 duration-150">
<span className="material-symbols-outlined" data-icon="timer">timer</span>
</button>
<button className="text-[#d095ff]/60 hover:brightness-125 transition-all duration-200 active:scale-95 duration-150">
<span className="material-symbols-outlined" data-icon="pause_circle">pause_circle</span>
</button>
</div>
</div>
</header>
<main className="min-h-screen pt-20 pb-32 flex items-center justify-center px-4 relative overflow-hidden">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-secondary/10 rounded-full blur-[120px] pointer-events-none"></div>
<div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>

<div className="relative z-10 w-full max-w-2xl">

<div className="bg-surface-variant/60 backdrop-blur-2xl rounded-xl p-8 md:p-12 text-center border-none shadow-[0_0_80px_rgba(38,254,220,0.15)] bg-confetti">

<div className="mb-8 space-y-2">
<div className="inline-flex items-center justify-center w-24 h-24 bg-secondary rounded-full mb-6 shadow-[0_0_40px_#26fedc66]">
<span className="material-symbols-outlined text-on-secondary text-5xl font-bold" data-icon="check_circle" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
</div>
<h1 className="font-headline text-6xl md:text-8xl font-black tracking-tighter text-secondary italic">
                        ¡CORRECTO!
                    </h1>
<p className="font-body text-secondary/80 text-lg md:text-xl font-semibold tracking-wide uppercase">
                        Respuesta Perfecta
                    </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12">

<div className="bg-surface-container-highest p-6 rounded-lg flex flex-col items-center justify-center transform hover:scale-[1.02] transition-transform">
<span className="text-tertiary-container font-headline text-5xl font-extrabold tracking-tighter">+450 PTS</span>
<span className="text-on-surface-variant font-label text-xs tracking-widest uppercase mt-2">Puntos Ganados</span>
</div>

<div className="bg-surface-container-highest p-6 rounded-lg flex flex-col items-center justify-center transform hover:scale-[1.02] transition-transform">
<div className="flex items-center gap-2">
<span className="text-error font-headline text-5xl font-extrabold tracking-tighter">3X</span>
<span className="material-symbols-outlined text-error text-4xl" data-icon="local_fire_department" style={{ fontVariationSettings: "'FILL' 1" }}>local_fire_department</span>
</div>
<span className="text-on-surface-variant font-label text-xs tracking-widest uppercase mt-2">RACHA ACTUAL</span>
</div>
</div>

<div className="mt-8 flex justify-center">
<div className="bg-tertiary text-on-tertiary px-6 py-2 rounded-full font-headline font-bold text-sm tracking-widest uppercase flex items-center gap-2 shadow-[0_4px_20px_rgba(202,253,0,0.3)]">
<span className="material-symbols-outlined text-sm" data-icon="bolt">bolt</span>
                        Multiplicador de Velocidad Activado
                    </div>
</div>

<div className="mt-12">
<button className="w-full md:w-auto px-12 py-5 bg-gradient-to-r from-primary to-primary-container text-on-primary-container font-headline font-extrabold text-xl rounded-full hover:brightness-110 active:scale-95 transition-all shadow-[0_8px_32px_rgba(208,149,255,0.4)]">
                        SIGUIENTE PREGUNTA
                    </button>
</div>
</div>
</div>
</main>

<nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 py-6 bg-[#0e0e10] rounded-t-[2rem] shadow-[0_-8px_32px_rgba(157,78,221,0.15)]">
<div className="flex flex-col items-center justify-center text-[#d095ff]/50 px-6 py-2 hover:bg-[#d095ff]/10 rounded-full transition-all cursor-pointer">
<span className="material-symbols-outlined mb-1" data-icon="person">person</span>
<span className="font-['Plus_Jakarta_Sans'] font-extrabold tracking-widest text-xs uppercase">APODO</span>
</div>
<div className="flex flex-col items-center justify-center bg-[#26fedc]/20 text-[#26fedc] rounded-full px-6 py-2 transition-all cursor-pointer">
<span className="material-symbols-outlined mb-1" data-icon="stars" style={{ fontVariationSettings: "'FILL' 1" }}>stars</span>
<span className="font-['Plus_Jakarta_Sans'] font-extrabold tracking-widest text-xs uppercase">8,450 PTS</span>
</div>
<div className="flex flex-col items-center justify-center text-[#d095ff]/50 px-6 py-2 hover:bg-[#d095ff]/10 rounded-full transition-all cursor-pointer">
<span className="material-symbols-outlined mb-1" data-icon="local_fire_department">local_fire_department</span>
<span className="font-['Plus_Jakarta_Sans'] font-extrabold tracking-widest text-xs uppercase">RACHA X3</span>
</div>
</nav>



    </div>
  );
}
