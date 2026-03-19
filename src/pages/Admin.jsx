import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Admin() {
  const navigate = useNavigate();
  return (
    <div className="bg-background text-on-background min-h-screen selection:bg-secondary selection:text-on-secondary">
      

<nav className="fixed top-0 w-full flex justify-between items-center px-6 py-4 h-20 bg-[#0e0e10]/80 backdrop-blur-xl z-50 shadow-2xl shadow-[#9D4EDD]/10">
<div className="text-[#d095ff] font-black italic tracking-tighter text-2xl">QUIZ ARENA</div>
<div className="hidden md:flex gap-8 items-center">
<a className="font-['Plus_Jakarta_Sans'] font-bold tracking-tight text-xl uppercase text-[#26fedc] border-b-2 border-[#26fedc] pb-1 hover:brightness-125 transition-all duration-200" href="#">CREATOR</a>
<a className="font-['Plus_Jakarta_Sans'] font-bold tracking-tight text-xl uppercase text-[#d095ff]/60 hover:brightness-125 transition-all duration-200" href="#">ANALYTICS</a>
<a className="font-['Plus_Jakarta_Sans'] font-bold tracking-tight text-xl uppercase text-[#d095ff]/60 hover:brightness-125 transition-all duration-200" href="#">LIBRARY</a>
</div>
<div className="flex items-center gap-4">
<button className="text-[#d095ff]/60 hover:brightness-125 transition-all duration-200">
<span className="material-symbols-outlined" data-icon="timer">timer</span>
</button>
<button className="text-[#d095ff]/60 hover:brightness-125 transition-all duration-200">
<span className="material-symbols-outlined" data-icon="pause_circle">pause_circle</span>
</button>
</div>
</nav>

<main className="pt-28 px-4 md:px-8 max-w-7xl mx-auto">

<header className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
<div>
<span className="text-secondary font-headline font-extrabold tracking-widest text-xs uppercase mb-2 block">MODO TALLER</span>
<h1 className="text-4xl md:text-5xl font-black tracking-tighter text-on-surface">CREAR NUEVO QUIZ</h1>
</div>
<div className="flex gap-4">
<button className="bg-surface-container-highest text-on-surface px-6 py-3 rounded-full font-headline font-bold text-sm hover:brightness-125 transition-all flex items-center gap-2"><span className="material-symbols-outlined text-xl" data-icon="save">save</span> GUARDAR BORRADOR</button>
<button className="bg-gradient-to-r from-primary to-primary-container text-on-primary-container px-8 py-3 rounded-full font-headline font-black text-sm hover:scale-105 active:scale-95 transition-all flex items-center gap-2 shadow-lg shadow-primary/20"><span className="material-symbols-outlined text-xl" data-icon="rocket_launch">rocket_launch</span> PUBLICAR ARENA</button>
</div>
</header>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

<div className="lg:col-span-4 space-y-6">

<section className="bg-surface-container-high rounded-lg p-8 space-y-6">
<div>
<label className="block text-primary font-headline font-bold text-xs uppercase tracking-widest mb-3">TÍTULO DEL QUIZ</label>
<input className="w-full bg-surface-container-lowest border-none rounded-DEFAULT p-4 text-on-surface placeholder:text-outline focus:ring-2 focus:ring-secondary/40 focus:outline-none text-lg font-bold" placeholder="Introduce un nombre épico..." type="text"/>
</div>
<div>
<label className="block text-primary font-headline font-bold text-xs uppercase tracking-widest mb-3">URL DE IMAGEN DE PORTADA</label>
<div className="relative">
<input className="w-full bg-surface-container-lowest border-none rounded-DEFAULT p-4 text-on-surface placeholder:text-outline focus:ring-2 focus:ring-secondary/40 focus:outline-none" placeholder="https://..." type="text"/>
<span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-outline" data-icon="image">image</span>
</div>
</div>
<div className="pt-4">
<div className="h-48 rounded-lg bg-surface-container-lowest flex items-center justify-center overflow-hidden group cursor-pointer relative">
<img className="w-full h-full object-cover opacity-40 group-hover:scale-110 transition-transform duration-700" data-alt="Abstract neon geometric pattern background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAb3QDb686w0IGkvuF__L7QUea9OceJ8EtywTgf30hDmw0nMoNvtEDP2NAqHBSLnc11NLorbSC-a1pgtgwBHZGBo3QYtwBI0nJO-TXZfxlVTEf2MN5vYHJLFsd67bKEjHBqPdpZWHxKSCLTwjVPXC5rsEaGZ1qR84QrQTMfVRRxCVnRrql7SXvLRWCfIUsggzRCjgC555E5jlg8Jxo8HEZYwLDO5UgowBcur9YxZMFwg_LUD9BATMv7rtGL0CyNXEDKxDzlH7M2WCU"/>
<div className="absolute inset-0 flex flex-col items-center justify-center bg-background/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
<span className="material-symbols-outlined text-4xl text-secondary" data-icon="add_a_photo">add_a_photo</span>
<span className="text-xs font-headline font-bold mt-2">VISTA PREVIA DE PORTADA</span>
</div>
<span className="absolute font-headline font-black text-outline/20 text-4xl select-none">PREVIEW</span>
</div>
</div>
</section>

<section className="bg-surface-container-high rounded-lg p-8 border-2 border-dashed border-outline-variant hover:border-secondary/40 transition-colors group">
<div className="flex flex-col items-center text-center">
<div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-secondary text-3xl" data-icon="upload_file">upload_file</span>
</div>
<h3 className="font-headline font-bold text-lg mb-1">Carga Masiva de Preguntas</h3>
<p className="text-on-surface-variant text-sm mb-6">Arrastra y suelta tu archivo Excel o CSV aquí para poblar el arena al instante.</p>
<label className="bg-surface-container-highest text-secondary px-6 py-2 rounded-full font-headline font-bold text-xs uppercase cursor-pointer hover:bg-secondary hover:text-on-secondary transition-all">Explorar Archivos <input className="hidden" type="file"/></label>
</div>
</section>
</div>

<div className="lg:col-span-8 space-y-6">

<section className="bg-surface-container-high rounded-lg overflow-hidden">
<div className="bg-surface-container-highest p-6 flex justify-between items-center">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-on-primary font-black">1</div>
<h2 className="font-headline font-extrabold text-xl tracking-tight">EDITOR DE PREGUNTAS</h2>
</div>
<div className="flex gap-2">
<button className="p-2 text-outline hover:text-error transition-colors">
<span className="material-symbols-outlined" data-icon="delete">delete</span>
</button>
</div>
</div>
<div className="p-8 space-y-8">

<div className="space-y-3">
<label className="block text-tertiary font-headline font-bold text-xs uppercase tracking-widest">CONTENIDO DE LA PREGUNTA</label>
<textarea className="w-full bg-surface-container-lowest border-none rounded-DEFAULT p-6 text-on-surface placeholder:text-outline focus:ring-2 focus:ring-tertiary/40 focus:outline-none text-xl font-medium resize-none" placeholder="¿Cuál es la respuesta definitiva a la vida, el universo y todo lo demás?" rows="3"></textarea>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-4">

<div className="relative group">
<div className="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-surface-container-highest flex items-center justify-center text-xs font-black text-outline group-focus-within:bg-secondary group-focus-within:text-on-secondary transition-colors">A</div>
<input className="w-full bg-surface-container-low border-none rounded-DEFAULT py-4 pl-16 pr-12 text-on-surface focus:ring-2 focus:ring-secondary/40 focus:outline-none" placeholder="Opción 1" type="text"/>
<button className="absolute right-4 top-1/2 -translate-y-1/2 text-outline hover:text-secondary transition-colors">
<span className="material-symbols-outlined text-xl" data-icon="check_circle">check_circle</span>
</button>
</div>

<div className="relative group">
<div className="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-xs font-black text-on-secondary">B</div>
<input className="w-full bg-surface-container-low border-2 border-secondary/30 rounded-DEFAULT py-4 pl-16 pr-12 text-on-surface focus:ring-2 focus:ring-secondary/40 focus:outline-none" type="text" value="42"/>
<button className="absolute right-4 top-1/2 -translate-y-1/2 text-secondary">
<span className="material-symbols-outlined text-xl" data-icon="check_circle" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
</button>
</div>

<div className="relative group">
<div className="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-surface-container-highest flex items-center justify-center text-xs font-black text-outline group-focus-within:bg-secondary group-focus-within:text-on-secondary transition-colors">C</div>
<input className="w-full bg-surface-container-low border-none rounded-DEFAULT py-4 pl-16 pr-12 text-on-surface focus:ring-2 focus:ring-secondary/40 focus:outline-none" placeholder="Opción 3" type="text"/>
<button className="absolute right-4 top-1/2 -translate-y-1/2 text-outline hover:text-secondary transition-colors">
<span className="material-symbols-outlined text-xl" data-icon="check_circle">check_circle</span>
</button>
</div>

<div className="relative group">
<div className="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-surface-container-highest flex items-center justify-center text-xs font-black text-outline group-focus-within:bg-secondary group-focus-within:text-on-secondary transition-colors">D</div>
<input className="w-full bg-surface-container-low border-none rounded-DEFAULT py-4 pl-16 pr-12 text-on-surface focus:ring-2 focus:ring-secondary/40 focus:outline-none" placeholder="Opción 4" type="text"/>
<button className="absolute right-4 top-1/2 -translate-y-1/2 text-outline hover:text-secondary transition-colors">
<span className="material-symbols-outlined text-xl" data-icon="check_circle">check_circle</span>
</button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-outline-variant/30">
<div>
<label className="block text-primary font-headline font-bold text-xs uppercase tracking-widest mb-3">LÍMITE DE TIEMPO (SEGUNDOS)</label>
<div className="flex items-center gap-4">
<input className="flex-1 accent-primary" max="60" min="5" step="5" type="range"/>
<span className="text-xl font-headline font-black text-primary min-w-[3rem]">20s</span>
</div>
</div>
<div>
<label className="block text-primary font-headline font-bold text-xs uppercase tracking-widest mb-3">MULTIMEDIA (URL DE IMAGEN/GIF)</label>
<div className="relative">
<input className="w-full bg-surface-container-lowest border-none rounded-DEFAULT p-3 text-on-surface text-sm focus:ring-2 focus:ring-primary/40 focus:outline-none" placeholder="Añade un toque visual..." type="text"/>
<span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-outline" data-icon="link">link</span>
</div>
</div>
</div>
</div>
</section>

<button className="w-full py-8 rounded-lg bg-surface-container-low border-2 border-dashed border-outline-variant hover:border-primary/50 hover:bg-primary/5 transition-all group flex flex-col items-center justify-center gap-2">
<div className="w-12 h-12 rounded-full bg-surface-container-highest flex items-center justify-center group-hover:bg-primary group-hover:text-on-primary transition-colors">
<span className="material-symbols-outlined text-2xl" data-icon="add">add</span>
</div>
<span className="font-headline font-bold text-outline group-hover:text-primary transition-colors">AÑADIR SIGUIENTE DESAFÍO</span>
</button>
</div>
</div>
</main>

<footer className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 py-6 bg-[#0e0e10] rounded-t-[2rem] shadow-[0_-8px_32px_rgba(157,78,221,0.15)]">
<div className="flex flex-col items-center justify-center text-[#d095ff]/50 px-6 py-2 hover:bg-[#d095ff]/10 transition-all rounded-full">
<span className="material-symbols-outlined" data-icon="person">person</span>
<span className="font-['Plus_Jakarta_Sans'] font-extrabold tracking-widest text-xs uppercase mt-1">APODO</span>
</div>
<div className="flex flex-col items-center justify-center bg-[#26fedc]/20 text-[#26fedc] rounded-full px-6 py-2 transition-all">
<span className="material-symbols-outlined" data-icon="stars" style={{ fontVariationSettings: "'FILL' 1" }}>stars</span>
<span className="font-['Plus_Jakarta_Sans'] font-extrabold tracking-widest text-xs uppercase mt-1">8,450 PTS</span>
</div>
<div className="flex flex-col items-center justify-center text-[#d095ff]/50 px-6 py-2 hover:bg-[#d095ff]/10 transition-all rounded-full">
<span className="material-symbols-outlined" data-icon="local_fire_department">local_fire_department</span>
<span className="font-['Plus_Jakarta_Sans'] font-extrabold tracking-widest text-xs uppercase mt-1">RACHA X3</span>
</div>
</footer>

    </div>
  );
}
