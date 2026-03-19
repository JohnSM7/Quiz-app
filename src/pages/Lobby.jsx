import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Lobby() {
  const navigate = useNavigate();
  return (
    <div className="bg-background text-on-background min-h-screen selection:bg-secondary selection:text-on-secondary">
      

<header className="fixed top-0 w-full flex justify-between items-center px-6 py-4 h-20 bg-[#0e0e10]/80 backdrop-blur-xl border-none z-50 shadow-2xl shadow-[#9D4EDD]/10">
<div className="flex items-center gap-4">
<span className="text-[#d095ff] font-black italic tracking-tighter text-2xl">QUIZ ARENA</span>
<div className="h-6 w-[2px] bg-outline-variant/30 hidden md:block"></div>
<h1 className="font-['Plus_Jakarta_Sans'] font-bold tracking-tight text-xl uppercase text-[#d095ff] hidden md:block">Marvel Cinematic Universe</h1>
</div>
<div className="flex gap-4">
<button className="text-[#d095ff]/60 hover:brightness-125 transition-all duration-200 active:scale-95 duration-150">
<span className="material-symbols-outlined">timer</span>
</button>
<button className="text-[#d095ff]/60 hover:brightness-125 transition-all duration-200 active:scale-95 duration-150">
<span className="material-symbols-outlined">pause_circle</span>
</button>
</div>
</header>
<main className="pt-28 pb-32 px-4 md:px-8 max-w-7xl mx-auto">
<div className="flex flex-col items-center gap-12">

<section className="w-full text-center space-y-4">
<p className="font-headline font-extrabold text-secondary tracking-widest text-sm uppercase">ESPERANDO JUGADORES</p>
<div className="relative inline-block">
<div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full"></div>
<div className="glass-panel relative px-12 py-8 rounded-xl border border-white/5 neon-glow-primary">
<h2 className="font-headline font-black text-6xl md:text-8xl text-white tracking-tighter">
                            882 104
                        </h2>
<div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary px-4 py-1 rounded-full text-on-primary font-headline font-bold text-xs uppercase tracking-widest">CÓDIGO DE UNIÓN</div>
</div>
</div>
</section>

<section className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">

<div className="flex flex-col items-center gap-3">
<div className="relative group">
<div className="absolute -inset-1 bg-gradient-to-tr from-primary to-secondary rounded-full opacity-75 blur-sm group-hover:opacity-100 transition duration-500"></div>
<div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-surface-container">
<img alt="" className="w-full h-full object-cover bg-surface-container-highest" data-alt="Stylized portrait of a quiz master admin" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9AjPwg6aGeEz3JbgP9GPSAIoI_D-51j0NryIQQInRe7ESuh9rOU8-wjqOVrpf8IoMsmu4ENoIl0mtsCWObeqFZARb_LGeiWcrTVCaP3pR_59eVsDSFCtDu3z5qkf2lIK_0u3064BD6CeLq83_D9dOlql0Vwe14X1TMUr8ZFnTaUkOt4CKyOAbMWtugNMoQMT3iC8MWC_poGNQRlRGQTdqdq6CTs6-RXQoIpLY4J36TRB6Wmi7behR3Yi0N0YJXOkDWvZya8fb6dA"/>
</div>
<div className="absolute bottom-0 right-0 bg-primary-container p-1 rounded-full border-2 border-surface">
<span className="material-symbols-outlined text-[16px] text-on-primary-container" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
</div>
</div>
<span className="font-headline font-bold text-primary">MasterQuiz</span>
</div>

<div className="flex flex-col items-center gap-3">
<div className="w-24 h-24 rounded-full overflow-hidden border-4 border-transparent bg-surface-container-high group hover:border-secondary transition-colors cursor-default">
<img alt="" className="w-full h-full object-cover" data-alt="Animated colorful game controller avatar" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAgaS2lO0Jkj7D3ggVAcd-awitOz_FD9VzTbVHUTPv3DeSlnm6HBQnN3yIPJOI5EFc1AXV_Dc2HcZJA-BAE9GS-EfwifIKwYJhsJdZdAb-JRcUgiC7GJh-Nk9LapjM6BuODLWlh98IDcxo4Fy51vODGaiwnnNwNqrGkBpBFIjq4NhFHdyb6liLt1_hvdbePzr3-OZHqqL7IM1zJ1eulunUwR4SsMCWg7TNk-awKmBJJRs7xXbomARwNxotlFS5c1EXvlC316K5aP5Y"/>
</div>
<span className="font-body font-medium text-on-surface/80">Player 1</span>
</div>

<div className="flex flex-col items-center gap-3">
<div className="w-24 h-24 rounded-full overflow-hidden border-4 border-transparent bg-surface-container-high group hover:border-secondary transition-colors cursor-default">
<img alt="" className="w-full h-full object-cover" data-alt="Electric bolt themed profile icon" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhq4s8Spm2rh3ifhDUIYmy8nia-Q3PjCnowrkiXLStPgL4aN3vD_8Tph2ANbPIVNZSB_oPCiPDGkm_0ftTGXyacRssOPB--pKBUccmITmIwbUixIqJnJCPGn0HIhpBd523eI1LvbElLQe3TAhcImDFYKawK8TyOn5OVWhgJwexzi7VQwshhBjt4lO96JyTE580trqLwkUs7Tk-t_9so2A_ROlFzvgSuUy4GneSX-FMqI60h2Z5hcx9kSfJI3ZH6rb8glUTu5rE1g4"/>
</div>
<span className="font-body font-medium text-on-surface/80">ElectroFlash</span>
</div>

<div className="flex flex-col items-center gap-3">
<div className="w-24 h-24 rounded-full overflow-hidden border-4 border-transparent bg-surface-container-high group hover:border-secondary transition-colors cursor-default">
<img alt="" className="w-full h-full object-cover" data-alt="Human brain neon style avatar" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8PfhhdgT8K3nQs1sflPuGlHFUoNrfDtAfbshAFYwY5309dGXDiCOxCqNE1LnfSVvY8xPaDHCHe9fORqSMX-Nnzuk2vXslyvbH0sST8MXdZjn2o8YE-JLlX04ZxwtKcmYrYJlYu3C5xXQaKkoWcoXoUwT621H-DYaA5MVBrkqbduZZ2VH18a1eo_kj76HV9F2qX3_LI-A0cVdSWbdVY7w3_FLcyHVuhKml4ayJ4Zf5flUK8exDLZFnSWXDxJV4dXxKfJ6TUJ645nU"/>
</div>
<span className="font-body font-medium text-on-surface/80">BrainyBoi</span>
</div>

<div className="flex flex-col items-center gap-3">
<div className="w-24 h-24 rounded-full overflow-hidden border-4 border-transparent bg-surface-container-high group hover:border-secondary transition-colors cursor-default">
<img alt="" className="w-full h-full object-cover" data-alt="Rocket ship launching icon" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDp4zaZ4kJrdc2AnaSV0h0zkusbz_wUPScifz88PLIe64KVJQL07EeOCaRt-e9-KoHJtWNvTOJ9M4cDeycEE6W_M971N7eG1E1SrqoP0bBdMOM50T425dPu-ArzYcKglc3KCdle-D5F4y5mOg6oKYRf5UTIALwFVX7NNq__5tpiW_FnIH5zzJaeEcjoeWAT5-pKpO103FLfEX7f5hWHoCSTlAtgINqUH1C8b-4-lN8GDUHGiXDqsuAL1lsSZ5KF-9IidfRsU1_omGg"/>
</div>
<span className="font-body font-medium text-on-surface/80">StarkIndustries</span>
</div>

<div className="flex flex-col items-center gap-3">
<div className="w-24 h-24 rounded-full border-2 border-dashed border-outline-variant flex items-center justify-center bg-white/5">
<span className="material-symbols-outlined text-outline-variant">person_add</span>
</div>
<span className="font-body font-medium text-outline">ESPERANDO...</span>
</div>
</section>

<div className="w-full max-w-md space-y-6">
<button className="w-full py-6 px-8 rounded-full bg-gradient-to-r from-primary to-primary-container text-on-primary font-headline font-black text-xl uppercase tracking-tighter flex items-center justify-center gap-3 hover:brightness-110 active:scale-95 transition-all shadow-xl shadow-primary/20"><span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span> EMPEZAR ARENA</button>
<div className="flex items-center justify-center gap-8">
<div className="flex items-center gap-2">
<span className="w-3 h-3 rounded-full bg-secondary animate-pulse"></span>
<span className="font-headline font-bold text-secondary text-sm">5 JUGADORES LISTOS</span>
</div>
<div className="h-4 w-[1px] bg-outline-variant"></div>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-tertiary text-sm">settings</span>
<span className="font-headline font-bold text-on-surface/60 text-sm">AJUSTES DE LA SALA</span>
</div>
</div>
</div>
</div>
</main>

<nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 py-6 bg-[#0e0e10] rounded-t-[2rem] shadow-[0_-8px_32px_rgba(157,78,221,0.15)]">
<div className="flex flex-col items-center justify-center text-[#d095ff]/50 px-6 py-2 hover:bg-[#d095ff]/10 transition-all rounded-full active:scale-90 duration-200 ease-out">
<span className="material-symbols-outlined">person</span>
<span className="font-['Plus_Jakarta_Sans'] font-extrabold tracking-widest text-xs uppercase mt-1">APODO</span>
</div>
<div className="flex flex-col items-center justify-center text-[#d095ff]/50 px-6 py-2 hover:bg-[#d095ff]/10 transition-all rounded-full active:scale-90 duration-200 ease-out">
<span className="material-symbols-outlined">stars</span>
<span className="font-['Plus_Jakarta_Sans'] font-extrabold tracking-widest text-xs uppercase mt-1">8,450 PTS</span>
</div>
<div className="flex flex-col items-center justify-center bg-[#26fedc]/20 text-[#26fedc] rounded-full px-6 py-2 active:scale-90 duration-200 ease-out">
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>local_fire_department</span>
<span className="font-['Plus_Jakarta_Sans'] font-extrabold tracking-widest text-xs uppercase mt-1">RACHA X3</span>
</div>
</nav>

    </div>
  );
}
