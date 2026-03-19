import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function PantallaJuego() {
  const navigate = useNavigate();
  return (
    <div className="bg-background text-on-background min-h-screen selection:bg-secondary selection:text-on-secondary">
      

<header className="fixed top-0 w-full flex justify-between items-center px-6 py-4 h-20 bg-[#0e0e10]/80 backdrop-blur-xl z-50 shadow-2xl shadow-[#9D4EDD]/10">
<div className="text-[#d095ff] font-black italic tracking-tighter text-2xl">
            QUIZ ARENA
        </div>
<div className="flex items-center gap-6">
<div className="flex items-center gap-2 px-4 py-2 bg-surface-container-low rounded-full">
<span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>timer</span>
<span className="font-headline font-bold text-secondary text-xl">15s</span>
</div>
<div className="flex gap-4">
<button className="hover:brightness-125 transition-all duration-200 active:scale-95 duration-150 text-[#d095ff]">
<span className="material-symbols-outlined text-3xl">pause_circle</span>
</button>
</div>
</div>
</header>
<main className="pt-24 pb-32 px-4 md:px-8 max-w-7xl mx-auto min-h-screen">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

<div className="lg:col-span-8 flex flex-col gap-6">

<div className="surface-container-high rounded-lg p-8 relative overflow-hidden">
<div className="absolute top-0 left-0 w-2 h-full bg-primary"></div>
<span className="font-label text-primary/60 text-xs tracking-[0.2em] font-bold uppercase mb-4 block">PREGUNTA 08/20</span>
<h1 className="font-headline font-extrabold text-3xl md:text-4xl leading-tight text-on-surface">
                        ¿Cuál es el nombre del martillo de Thor?
                    </h1>
</div>

<div className="relative aspect-video w-full rounded-lg overflow-hidden bg-surface-container-highest group">
<img alt="Thor catchng Mjolnir cinematic shot" className="w-full h-full object-cover brightness-75 group-hover:scale-105 transition-transform duration-700" data-alt="Cinematic shot of Thor catching the glowing Mjolnir hammer" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAOmgqRsRFhaBokF0kAqckeBFM2_L5UF5wqe3zzr4elnUy-utP0LnTYKnLi0RZnxtxcgTuMsKjynyAB6fiAvkLMd1g4FIhLPwWFxpyTj0YzCelofEsNG6QpyRwCGg3YEYOnj_yf-qX89-uuuXqpufO7DYwYNyXCDhmFitCNHY5KiKPAsm5jVnPGursvZBD-vadHFDZiy7bxk61445bbXu6U1GCsf9--6nsxF7rj2G4h4zPIeEjtfADEWUVWa3BNDB2aUnazlw1YKcU"/>
<div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60"></div>

<div className="absolute bottom-6 left-6 right-6">
<div className="h-1.5 w-full bg-on-surface/10 rounded-full overflow-hidden">
<div className="h-full bg-secondary w-1/2 shadow-[0_0_12px_rgba(38,254,220,0.5)]"></div>
</div>
</div>
</div>
</div>

<div className="lg:col-span-4 flex flex-col gap-4">
<div className="grid grid-cols-1 gap-4 h-full">

<button className="group relative flex items-center justify-between p-6 bg-surface-container-high rounded-lg hover:bg-secondary/10 transition-all duration-300 active:scale-95 text-left overflow-hidden">
<div className="z-10 flex items-center gap-4">
<span className="w-10 h-10 flex items-center justify-center rounded-full bg-secondary/20 text-secondary font-headline font-black">A</span>
<span className="font-headline font-bold text-lg text-on-surface">Mjolnir</span>
</div>
<div className="absolute right-0 top-0 h-full w-1 bg-secondary opacity-0 group-hover:opacity-100 transition-opacity"></div>
</button>

<button className="group relative flex items-center justify-between p-6 bg-surface-container-high rounded-lg hover:bg-error/10 transition-all duration-300 active:scale-95 text-left overflow-hidden">
<div className="z-10 flex items-center gap-4">
<span className="w-10 h-10 flex items-center justify-center rounded-full bg-error/20 text-error font-headline font-black">B</span>
<span className="font-headline font-bold text-lg text-on-surface">Stormbreaker</span>
</div>
<div className="absolute right-0 top-0 h-full w-1 bg-error opacity-0 group-hover:opacity-100 transition-opacity"></div>
</button>

<button className="group relative flex items-center justify-between p-6 bg-surface-container-high rounded-lg hover:bg-tertiary-container/10 transition-all duration-300 active:scale-95 text-left overflow-hidden">
<div className="z-10 flex items-center gap-4">
<span className="w-10 h-10 flex items-center justify-center rounded-full bg-tertiary-container/20 text-tertiary-container font-headline font-black">C</span>
<span className="font-headline font-bold text-lg text-on-surface">Gungnir</span>
</div>
<div className="absolute right-0 top-0 h-full w-1 bg-tertiary-container opacity-0 group-hover:opacity-100 transition-opacity"></div>
</button>

<button className="group relative flex items-center justify-between p-6 bg-surface-container-high rounded-lg hover:bg-primary/10 transition-all duration-300 active:scale-95 text-left overflow-hidden">
<div className="z-10 flex items-center gap-4">
<span className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/20 text-primary font-headline font-black">D</span>
<span className="font-headline font-bold text-lg text-on-surface">Hofund</span>
</div>
<div className="absolute right-0 top-0 h-full w-1 bg-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>
</button>

<div className="mt-4 p-6 glass-card rounded-lg border border-outline-variant/10 flex items-center justify-between">
<div className="flex flex-col">
<span className="text-xs font-bold text-secondary tracking-widest uppercase">COMBO ACTIVO</span>
<span className="text-2xl font-headline font-black italic text-on-surface">X2 XP</span>
</div>
<span className="material-symbols-outlined text-4xl text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span>
</div>
</div>
</div>
</div>
</main>

<nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 py-6 bg-[#0e0e10] rounded-t-[2rem] shadow-[0_-8px_32px_rgba(157,78,221,0.15)]">

<div className="flex flex-col items-center justify-center text-[#d095ff]/50 px-6 py-2 hover:bg-[#d095ff]/10 transition-all rounded-full cursor-pointer">
<span className="material-symbols-outlined mb-1">person</span>
<span className="font-['Plus_Jakarta_Sans'] font-extrabold tracking-widest text-xs uppercase">APODO</span>
<span className="text-[10px] font-bold text-[#d095ff]">ALEX</span>
</div>

<div className="flex flex-col items-center justify-center bg-[#26fedc]/20 text-[#26fedc] rounded-full px-8 py-2 border border-[#26fedc]/20 animate-pulse">
<span className="material-symbols-outlined mb-1" style={{ fontVariationSettings: "'FILL' 1" }}>stars</span>
<span className="font-['Plus_Jakarta_Sans'] font-extrabold tracking-widest text-xs uppercase">8,450 PTS</span>
</div>

<div className="flex flex-col items-center justify-center text-[#d095ff]/50 px-6 py-2 hover:bg-[#d095ff]/10 transition-all rounded-full cursor-pointer">
<span className="material-symbols-outlined mb-1 text-error" style={{ fontVariationSettings: "'FILL' 1" }}>local_fire_department</span>
<span className="font-['Plus_Jakarta_Sans'] font-extrabold tracking-widest text-xs uppercase">RACHA X3</span>
</div>
</nav>

    </div>
  );
}
