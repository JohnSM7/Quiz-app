import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Podio() {
  const navigate = useNavigate();
  return (
    <div className="bg-background text-on-background min-h-screen selection:bg-secondary selection:text-on-secondary">
      

<header className="fixed top-0 w-full z-50 flex justify-between items-center px-6 py-4 bg-[#080b27]/80 backdrop-blur-xl no-border shadow-[0_0_40px_rgba(156,66,244,0.3)] z-50 border-b border-white/10">
<div className="flex items-center gap-2">
<span className="text-2xl font-black italic text-transparent bg-clip-text bg-gradient-to-r from-[#ca98ff] to-[#9c42f4] font-['Plus_Jakarta_Sans'] tracking-tight">Quiz Party</span>
</div>
<div className="flex items-center gap-6">
<button className="material-symbols-outlined text-slate-400 hover:scale-105 transition-transform duration-200">timer</button>
<button className="material-symbols-outlined text-[#ca98ff] border-b-2 border-[#ca98ff] hover:scale-105 transition-transform duration-200">leaderboard</button>
<button className="material-symbols-outlined text-slate-400 hover:scale-105 transition-transform duration-200">account_circle</button>
</div>
</header>
<main className="relative pt-24 pb-32 px-4 md:px-8 max-w-7xl mx-auto min-h-screen flex flex-col items-center">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none overflow-hidden -z-10">
<div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[120%] h-[80%] bg-[radial-gradient(circle_at_50%_0%,rgba(156,66,244,0.15)_0%,transparent_70%)]"></div>
<div className="absolute top-0 left-1/4 w-1 h-full bg-gradient-to-b from-primary/20 to-transparent rotate-12 blur-xl"></div>
<div className="absolute top-0 right-1/4 w-1 h-full bg-gradient-to-b from-secondary/20 to-transparent -rotate-12 blur-xl"></div>
</div>

<div className="text-center mb-16 space-y-4">
<h1 className="font-headline font-black text-5xl md:text-7xl tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-on-surface to-slate-500 uppercase">
                GRAN FINAL
            </h1>
<p className="font-label text-primary font-bold tracking-[0.3em] uppercase text-sm">CAMPEONES DE LA ARENA</p>
</div>

<div className="relative w-full max-w-4xl flex items-end justify-center gap-4 md:gap-8 mt-24 mb-12">

<div className="flex flex-col items-center w-1/3 group">
<div className="relative mb-6">
<div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-slate-400 p-1 bg-surface-container shadow-[0_0_20px_rgba(166,169,203,0.3)]">
<img alt="MasterMind Avatar" className="w-full h-full rounded-full bg-surface-bright" data-alt="Stylized avatar for runner up player" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCdiqFVsWIGfPeZ-GAP-foToldiCaefqU78pG2nsKVp4iSoSh9zk07DDpfAvqUa7Tbzr8aLgwXEPTA4643u9GcprF8TDo24F_889D_KoqpYHtoG4u_VXn3HzDnvRvSqqTy-EV2Ca0Qj_rV6R3tcWCPlrkM0fe2WXEq1AK3NYtDwph1DxUoChSIl4bJJuHkZ40kvbXeNTspVHvtdp8LShFYY5em2hCLIuTMRQcRnWxJQmq26BewUqXC4LOoKz9opIH6gEOTDRS7H4KU"/>
</div>
<div className="absolute -top-4 -right-2 bg-slate-400 text-surface font-bold px-3 py-1 rounded-full text-xs shadow-lg">2nd</div>
</div>
<div className="text-center mb-4">
<p className="font-headline font-bold text-xl text-on-surface">MasterMind</p>
<p className="font-body font-bold text-slate-400">12,450 PTS</p>
</div>

<div className="w-full h-32 md:h-48 podium-gradient rounded-t-xl border-x border-t border-white/5 flex flex-col items-center justify-center relative overflow-hidden">
<span className="font-headline font-black text-6xl text-white/5 absolute -bottom-4">2</span>
<div className="absolute inset-0 bg-gradient-to-t from-transparent to-white/5"></div>
</div>
</div>

<div className="flex flex-col items-center w-1/3 -mt-16 z-10 group">
<div className="relative mb-8">

<div className="absolute -top-12 left-1/2 -translate-x-1/2 animate-bounce">
<span className="material-symbols-outlined text-6xl text-tertiary drop-shadow-[0_0_15px_rgba(255,231,146,0.8)]" style={{ fontVariationSettings: "'FILL' 1" }}>workspace_premium</span>
</div>
<div className="w-32 h-32 md:w-44 md:h-44 rounded-full border-4 border-tertiary p-1 bg-surface-container glow-tertiary">
<img alt="GamerPro Avatar" className="w-full h-full rounded-full bg-surface-bright" data-alt="Champion avatar with bright energy" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUwe_HqZ2lf1gU4u6sqgzB2OrWXZwmuSJkRfelRP-vbf7RyCYHNnGMv_tVjyUSo26zi1Q_cjvaFBUG3OyRVZo8AOHmAWboRn8lrJZZYm_te7KOXOa6UIw-A4c3lGbi129euxMqkkMykfnwfCKN_Jp8l3OpNSdZ-jUfJBQZxVxgmVOX9hRtz_irWM8BO5WeSWnjNMQQUEZeuUv4CeV_U8gJpJi40dWy1Fh-VJWuP7nA1dUsq67dVF52Ibxh3vcBdAbd-wNd7WCxtnI"/>
</div>
<div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-tertiary text-on-tertiary font-black px-6 py-1 rounded-full text-sm shadow-xl tracking-widest">GANADOR</div>
</div>
<div className="text-center mb-6">
<p className="font-headline font-extrabold text-2xl md:text-3xl text-tertiary drop-shadow-sm">GamerPro</p>
<p className="font-body font-black text-on-surface text-lg">15,820 PTS</p>
</div>

<div className="w-full h-56 md:h-72 bg-gradient-to-b from-tertiary/20 to-surface-container-high rounded-t-2xl border-x border-t border-tertiary/30 flex flex-col items-center justify-center relative overflow-hidden glow-tertiary">
<span className="font-headline font-black text-8xl text-tertiary/10 absolute -bottom-6">1</span>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,231,146,0.2)_0%,transparent_70%)]"></div>
</div>
</div>

<div className="flex flex-col items-center w-1/3 group">
<div className="relative mb-6">
<div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-secondary-dim p-1 bg-surface-container shadow-[0_0_20px_rgba(225,0,128,0.2)]">
<img alt="QuizWiz Avatar" className="w-full h-full rounded-full bg-surface-bright" data-alt="Third place contestant avatar" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQbedp9os_fUNHDi2v7kZQxOxRbHbqO1JQs7IEUHKmhlKZq7hPZEd9ZiQDuWaESHJYT4bAK11JOZtGvujKW4iebc7uTB8I9wkPvTIUAarUKH57mOwYN4cdQVH89rNQxy-fgJ3npZ5WErlvBZZhPs6vOH-N_aYcUG_1PFOvNRBs6lqXuoDCI6w0ypQVobyURDlKpQg5kVRwPyeeyDJZYAHJpwbfFLKeLE2NUMtglkHFg7RbEQ1Mg1xVnJIzQyLMcZrX6jsKQU_bahA"/>
</div>
<div className="absolute -top-4 -left-2 bg-secondary-dim text-white font-bold px-3 py-1 rounded-full text-xs shadow-lg">3rd</div>
</div>
<div className="text-center mb-4">
<p className="font-headline font-bold text-xl text-on-surface">QuizWiz</p>
<p className="font-body font-bold text-slate-400">10,100 PTS</p>
</div>

<div className="w-full h-24 md:h-32 podium-gradient rounded-t-xl border-x border-t border-white/5 flex flex-col items-center justify-center relative overflow-hidden">
<span className="font-headline font-black text-6xl text-white/5 absolute -bottom-4">3</span>
<div className="absolute inset-0 bg-gradient-to-t from-transparent to-white/5"></div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl mt-8">
<div className="bg-surface-container p-6 rounded-xl border border-white/5 glass-panel flex flex-col items-center justify-center text-center">
<span className="material-symbols-outlined text-primary text-4xl mb-2" style={{ fontVariationSettings: "'FILL' 1" }}>flash_on</span>
<p className="text-on-surface-variant font-label text-xs uppercase tracking-widest">RESPUESTA MÁS RÁPIDA</p>
<p className="text-2xl font-headline font-bold">0.8s <span className="text-sm font-normal text-slate-500">por GamerPro</span></p>
</div>
<div className="bg-surface-container p-6 rounded-xl border border-white/5 glass-panel flex flex-col items-center justify-center text-center">
<span className="material-symbols-outlined text-secondary text-4xl mb-2" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<p className="text-on-surface-variant font-label text-xs uppercase tracking-widest">MAESTRO DEL QUIZ</p>
<p className="text-2xl font-headline font-bold">MasterMind</p>
</div>
<div className="bg-surface-container p-6 rounded-xl border border-white/5 glass-panel flex flex-col items-center justify-center text-center">
<span className="material-symbols-outlined text-tertiary text-4xl mb-2" style={{ fontVariationSettings: "'FILL' 1" }}>psychology</span>
<p className="text-on-surface-variant font-label text-xs uppercase tracking-widest">RONDAS PERFECTAS</p>
<p className="text-2xl font-headline font-bold">4 / 10</p>
</div>
</div>

<div className="mt-16 flex flex-col md:flex-row gap-6 w-full max-w-2xl">
<button className="flex-1 bg-gradient-to-r from-primary to-primary-dim text-on-primary-container py-5 rounded-xl font-headline font-extrabold text-lg shadow-lg hover:scale-[1.02] active:scale-95 transition-all cubic-bezier(0.34,1.56,0.64,1) flex items-center justify-center gap-3">
<span className="material-symbols-outlined">replay</span>
                JUGAR DE NUEVO
            </button>
<button className="flex-1 bg-surface-bright text-on-surface border border-outline-variant py-5 rounded-xl font-headline font-extrabold text-lg shadow-lg hover:bg-surface-container-highest transition-all flex items-center justify-center gap-3">
<span className="material-symbols-outlined">share</span>
                COMPARTIR PUNTUACIÓN
            </button>
</div>
</main>

<nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-6 pt-2 bg-[#080b27]/90 backdrop-blur-md border-t border-white/5 shadow-[0_-10px_40px_rgba(8,11,39,0.8)] rounded-t-[3rem] md:hidden">
<div className="flex flex-col items-center justify-center text-slate-400 p-3 hover:text-[#ca98ff] transition-colors">
<span className="material-symbols-outlined">home</span>
<span className="font-['Be_Vietnam_Pro'] font-medium text-[10px] uppercase tracking-widest">Home</span>
</div>
<div className="flex flex-col items-center justify-center text-slate-400 p-3 hover:text-[#ca98ff] transition-colors">
<span className="material-symbols-outlined">group</span>
<span className="font-['Be_Vietnam_Pro'] font-medium text-[10px] uppercase tracking-widest">Lobby</span>
</div>
<div className="flex flex-col items-center justify-center bg-[#ca98ff] text-[#080b27] rounded-full p-3 shadow-[0_0_20px_rgba(202,152,255,0.5)] scale-110 transition-all">
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>emoji_events</span>
<span className="font-['Be_Vietnam_Pro'] font-medium text-[10px] uppercase tracking-widest">Rankings</span>
</div>
<div className="flex flex-col items-center justify-center text-slate-400 p-3 hover:text-[#ca98ff] transition-colors">
<span className="material-symbols-outlined">person</span>
<span className="font-['Be_Vietnam_Pro'] font-medium text-[10px] uppercase tracking-widest">Profile</span>
</div>
</nav>

<div className="fixed top-0 right-0 p-12 pointer-events-none opacity-20 -z-10">
<div className="w-96 h-96 bg-primary rounded-full blur-[160px]"></div>
</div>
<div className="fixed bottom-0 left-0 p-12 pointer-events-none opacity-20 -z-10">
<div className="w-96 h-96 bg-secondary rounded-full blur-[160px]"></div>
</div>

    </div>
  );
}
