import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Instrucciones() {
  const navigate = useNavigate();
  return (
    <div className="bg-background text-on-background min-h-screen selection:bg-secondary selection:text-on-secondary">
      

<header className="fixed top-0 w-full z-50 bg-[#080b27]/80 backdrop-blur-xl shadow-2xl">
<div className="flex justify-between items-center px-6 py-4 w-full">
<h1 className="text-2xl font-black italic tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-[#ca98ff] to-[#9c42f4] font-['Plus_Jakarta_Sans']">QUIZ PARTY</h1>
<div className="flex items-center gap-4">
<button className="text-[#ca98ff] hover:scale-105 transition-transform duration-300 active:scale-95">
<span className="material-symbols-outlined text-3xl" data-icon="military_tech">military_tech</span>
</button>
<button className="text-[#ca98ff] hover:scale-105 transition-transform duration-300 active:scale-95">
<span className="material-symbols-outlined text-3xl" data-icon="account_circle">account_circle</span>
</button>
</div>
</div>
</header>
<main className="pt-24 pb-32 px-6 max-w-4xl mx-auto flex flex-col items-center">

<section className="relative w-full mb-12 text-center">
<div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/20 rounded-full blur-[80px]"></div>
<div className="absolute top-0 -right-10 w-64 h-64 bg-secondary/15 rounded-full blur-[100px]"></div>
<h2 className="font-headline font-extrabold text-5xl md:text-7xl leading-tight tracking-tighter mb-4 text-on-surface">
                ¿LISTO PARA EL <span className="text-primary italic">SHOW?</span>
</h2>
<p className="text-on-surface-variant font-medium text-lg max-w-xl mx-auto">
                La arena está encendida. Sigue estas reglas para convertirte en el MVP de la noche.
            </p>
</section>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">

<div className="bg-surface-container-high rounded-lg p-8 relative overflow-hidden group hover:scale-[1.02] transition-all duration-300 border border-white/5 shadow-2xl md:col-span-1">
<div className="absolute -top-4 -right-4 text-9xl font-black text-white/5 select-none italic">1</div>
<div className="relative z-10">
<div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center mb-6 border border-primary/30">
<span className="material-symbols-outlined text-primary text-3xl" data-icon="menu_book">menu_book</span>
</div>
<h3 className="font-headline font-bold text-2xl mb-3 text-primary">Lee la pregunta</h3>
<p className="text-on-surface-variant leading-relaxed">Mantén el enfoque. Cada detalle cuenta antes de que aparezcan las opciones.</p>
</div>
<div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-transparent"></div>
</div>

<div className="bg-surface-bright rounded-lg p-8 relative overflow-hidden group hover:scale-[1.02] transition-all duration-300 border border-white/10 shadow-2xl md:col-span-1">
<div className="absolute -top-4 -right-4 text-9xl font-black text-white/5 select-none italic">2</div>
<div className="relative z-10">
<div className="w-14 h-14 bg-secondary/20 rounded-xl flex items-center justify-center mb-6 border border-secondary/30">
<span className="material-symbols-outlined text-secondary text-3xl" data-icon="bolt" style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span>
</div>
<h3 className="font-headline font-bold text-2xl mb-3 text-secondary">Elige rápido</h3>
<p className="text-on-surface-variant leading-relaxed">¡El reloj no perdona! Entre más rápido respondas, más puntos acumularás.</p>
</div>
<div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-secondary to-transparent"></div>
</div>

<div className="bg-surface-container-highest rounded-lg p-8 relative overflow-hidden group hover:scale-[1.02] transition-all duration-300 border border-white/5 shadow-2xl md:col-span-1">
<div className="absolute -top-4 -right-4 text-9xl font-black text-white/5 select-none italic">3</div>
<div className="relative z-10">
<div className="w-14 h-14 bg-tertiary/20 rounded-xl flex items-center justify-center mb-6 border border-tertiary/30">
<span className="material-symbols-outlined text-tertiary text-3xl" data-icon="celebration">celebration</span>
</div>
<h3 className="font-headline font-bold text-2xl mb-3 text-tertiary">¡Diviértete!</h3>
<p className="text-on-surface-variant leading-relaxed">No importa el ranking, lo importante es disfrutar de la fiesta del conocimiento.</p>
</div>
<div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-tertiary to-transparent"></div>
</div>
</div>

<div className="mt-16 w-full flex flex-col items-center gap-6">
<button className="group relative px-12 py-6 bg-gradient-to-br from-[#ca98ff] to-[#9c42f4] rounded-xl font-headline font-black text-2xl text-on-primary-fixed shadow-[0_20px_50px_rgba(156,66,244,0.4)] hover:scale-105 active:scale-95 transition-all cubic-bezier(0.34,1.56,0.64,1) flex items-center gap-3">
<span>¡ESTOY LISTO!</span>
<span className="material-symbols-outlined text-3xl group-hover:translate-x-2 transition-transform" data-icon="rocket_launch" style={{ fontVariationSettings: "'FILL' 1" }}>rocket_launch</span>
</button>
<p className="text-outline font-medium tracking-widest flex items-center gap-2 text-sm uppercase">
<span className="w-2 h-2 rounded-full bg-error animate-pulse"></span>
                Esperando a 4 jugadores más...
            </p>
</div>
</main>

<nav className="fixed bottom-0 left-0 w-full z-50 bg-[#080b27]/90 backdrop-blur-lg flex justify-around items-center px-4 pb-6 pt-3 rounded-t-[3rem] border-t border-white/10 shadow-[0_-10px_50px_rgba(8,11,39,0.5)]">
<div className="flex flex-col items-center justify-center bg-[#ca98ff] text-[#080b27] rounded-full px-6 py-2 scale-110 shadow-[0_0_20px_rgba(202,152,255,0.6)]">
<span className="material-symbols-outlined" data-icon="videogame_asset" style={{ fontVariationSettings: "'FILL' 1" }}>videogame_asset</span>
<span className="font-['Be_Vietnam_Pro'] font-medium text-[10px] uppercase tracking-widest">Lobby</span>
</div>
<div className="flex flex-col items-center justify-center text-slate-400 opacity-70 hover:opacity-100 hover:text-[#ca98ff] transition-all duration-300">
<span className="material-symbols-outlined" data-icon="local_mall">local_mall</span>
<span className="font-['Be_Vietnam_Pro'] font-medium text-[10px] uppercase tracking-widest">Shop</span>
</div>
<div className="flex flex-col items-center justify-center text-slate-400 opacity-70 hover:opacity-100 hover:text-[#ca98ff] transition-all duration-300">
<span className="material-symbols-outlined" data-icon="leaderboard">leaderboard</span>
<span className="font-['Be_Vietnam_Pro'] font-medium text-[10px] uppercase tracking-widest">Rank</span>
</div>
<div className="flex flex-col items-center justify-center text-slate-400 opacity-70 hover:opacity-100 hover:text-[#ca98ff] transition-all duration-300">
<span className="material-symbols-outlined" data-icon="settings">settings</span>
<span className="font-['Be_Vietnam_Pro'] font-medium text-[10px] uppercase tracking-widest">Settings</span>
</div>
</nav>

<div className="fixed inset-0 pointer-events-none -z-10 opacity-30">
<div className="absolute top-1/4 left-10 w-2 h-2 bg-primary rounded-full shadow-[0_0_10px_#ca98ff]"></div>
<div className="absolute bottom-1/3 right-20 w-3 h-3 bg-secondary rounded-full shadow-[0_0_15px_#ff68a7]"></div>
<div className="absolute top-1/2 left-1/2 w-1 h-1 bg-tertiary rounded-full shadow-[0_0_8px_#ffe792]"></div>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(18,23,55,1)_0%,rgba(8,11,39,1)_100%)]"></div>
</div>

    </div>
  );
}
