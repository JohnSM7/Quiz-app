import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useQuiz } from '../context/QuizContext';

export default function Dashboard() {
  const navigate = useNavigate();
  const { user, logout, joinGame } = useQuiz();

  const handleStartQuiz = async (quizName) => {
    // In a real app we'd save quiz selection to FB, for now just join the lobby
    await joinGame(user?.username || 'Invitado');
    navigate('/lobby');
  };

  return (
    <div className="bg-background-dark text-on-surface min-h-screen selection:bg-secondary selection:text-on-secondary">
      
<header className="sticky top-0 z-50 flex items-center bg-background-dark/80 backdrop-blur-md p-4 justify-between border-b border-white/5">
<button onClick={() => logout()} className="text-primary flex size-10 shrink-0 items-center justify-center">
<span className="material-symbols-outlined text-3xl">logout</span>
</button>
<h2 className="text-white text-xl font-extrabold tracking-tighter uppercase italic flex-1 text-center">
            Electric <span className="text-accent-cyan">Arena</span>
</h2>
<div className="flex w-10 items-center justify-end relative">
<button className="flex items-center justify-center rounded-full size-10 bg-white/5 text-white hover:bg-white/10">
<span className="material-symbols-outlined">notifications</span>
<span className="absolute top-2 right-2 size-2 bg-accent-cyan rounded-full border border-background-dark"></span>
</button>
</div>
</header>
<main className="pb-24">

<section className="p-4 pt-6">
<div className="glass-card rounded-xl p-6 relative overflow-hidden border border-white/10">
<div className="absolute -right-4 -top-4 size-32 bg-primary/20 blur-3xl rounded-full"></div>
<div className="flex items-center gap-5 relative z-10">
<div className="relative">
<div className="size-20 rounded-full p-1 bg-gradient-to-tr from-primary to-accent-cyan">
<div className="size-full rounded-full bg-background-dark overflow-hidden bg-cover bg-center flex items-center justify-center bg-surface-container">
  <span className="material-symbols-outlined text-4xl text-primary">person</span>
</div>
</div>
<div className="absolute -bottom-1 -right-1 bg-accent-cyan text-background-dark text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-tighter">
                            Pro
                        </div>
</div>
<div className="flex flex-col">
<h1 className="text-white text-3xl font-black leading-none tracking-tight">{user?.username || 'USUARIO'}</h1>
<div className="flex gap-3 mt-2">
<div className="flex flex-col">
<span className="text-white/50 text-[10px] uppercase font-bold tracking-widest">Nivel</span>
<span className="text-primary font-bold text-lg leading-none">12</span>
</div>
<div className="w-px h-8 bg-white/10 self-center"></div>
<div className="flex flex-col">
<span className="text-white/50 text-[10px] uppercase font-bold tracking-widest">Experiencia</span>
<span className="text-accent-cyan font-bold text-lg leading-none">8,450 XP</span>
</div>
</div>
</div>
</div>

<div className="mt-6 w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
<div className="h-full bg-gradient-to-r from-primary to-accent-cyan w-[75%] rounded-full shadow-[0_0_10px_rgba(38,254,220,0.5)]"></div>
</div>
</div>
</section>

<section className="mt-4">
<h3 className="text-white tracking-tighter text-2xl font-black px-4 mb-4 italic uppercase">Mis Quizzes Asignados</h3>
</section>

<section className="p-4 space-y-4">

<div className="bg-surface-container rounded-xl overflow-hidden border border-white/5 flex flex-col group">
<div className="h-32 bg-cover bg-center relative bg-primary/10">
<div className="absolute inset-0 bg-gradient-to-t from-surface-container to-transparent"></div>
<div className="absolute top-3 left-3 bg-primary/90 text-background-dark text-[10px] font-black px-2 py-1 rounded italic uppercase">PELÍCULAS</div>
</div>
<div className="p-4 -mt-6 relative z-10 flex justify-between items-end">
<div>
<h4 className="text-white text-xl font-black tracking-tight uppercase italic">Reto Marvel</h4>
<p className="text-white/60 text-xs font-medium mt-1 flex items-center gap-1">
<span className="material-symbols-outlined text-sm text-accent-cyan">timer</span> 15 Preguntas • 10m
                        </p>
</div>
<button onClick={() => handleStartQuiz('Marvel')} className="bg-accent-cyan hover:bg-white text-background-dark font-black px-5 py-2 rounded-lg text-sm transition-all neon-glow-cyan uppercase tracking-tighter italic">
                        COMENZAR
                    </button>
</div>
</div>

<div className="bg-surface-container rounded-xl overflow-hidden border border-white/5 flex flex-col relative">
<div className="absolute top-0 right-0 w-1.5 h-full bg-primary"></div>
<div className="h-32 bg-cover bg-center relative bg-secondary/10">
<div className="absolute inset-0 bg-gradient-to-t from-surface-container to-transparent"></div>
<div className="absolute top-3 left-3 bg-primary/90 text-background-dark text-[10px] font-black px-2 py-1 rounded italic uppercase">CÓMICS</div>
</div>
<div className="p-4 -mt-6 relative z-10 flex justify-between items-end">
<div>
<h4 className="text-white text-xl font-black tracking-tight uppercase italic">DC Universe</h4>
<p className="text-white/60 text-xs font-medium mt-1 flex items-center gap-1">
<span className="material-symbols-outlined text-sm text-accent-cyan">timer</span> 20 Preguntas • 15m
                        </p>
</div>
<button onClick={() => handleStartQuiz('DC')} className="bg-accent-cyan hover:bg-white text-background-dark font-black px-5 py-2 rounded-lg text-sm transition-all neon-glow-cyan uppercase tracking-tighter italic">
                        COMENZAR
                    </button>
</div>
</div>
</section>
</main>
</div>
  );
}
