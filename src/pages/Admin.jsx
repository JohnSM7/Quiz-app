import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as XLSX from 'xlsx';
import { useQuiz } from '../context/QuizContext';

export default function Admin() {
  const navigate = useNavigate();
  const { createQuiz } = useQuiz();
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(false);

  const downloadTemplate = () => {
    const ws = XLSX.utils.json_to_sheet([
      { 
        Pregunta: '¿Cuál es el color del cielo?', 
        OpcionA: 'Azul', 
        OpcionB: 'Rojo', 
        OpcionC: 'Verde', 
        OpcionD: 'Amarillo', 
        Correcta: 'A',
        TiempoS: 15
      }
    ]);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Preguntas");
    XLSX.writeFile(wb, "plantilla_quiz_arena.xlsx");
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const bstr = event.target.result;
      const wb = XLSX.read(bstr, { type: 'binary' });
      const wsname = wb.SheetNames[0];
      const ws = wb.Sheets[wsname];
      const data = XLSX.utils.sheet_to_json(ws);
      
      const formattedQuestions = data.map((q, idx) => ({
        id: idx,
        text: q.Pregunta,
        options: [q.OpcionA, q.OpcionB, q.OpcionC, q.OpcionD],
        correctIndex: q.Correcta === 'A' ? 0 : q.Correcta === 'B' ? 1 : q.Correcta === 'C' ? 2 : 3,
        timeLimit: q.TiempoS || 20
      }));

      setQuestions(formattedQuestions);
      alert(`¡${formattedQuestions.length} preguntas cargadas correctamente!`);
    };
    reader.readAsBinaryString(file);
  };

  const handlePublish = async () => {
    if (!title) return alert('Ponle un título al menos!');
    setLoading(true);
    try {
      await createQuiz({
        title,
        image: image || 'https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=400',
        questions,
        questionsCount: questions.length,
        category: 'NUEVO',
        timeLimit: 10
      });
      alert('¡Quiz publicado con éxito!');
      navigate('/dashboard');
    } catch (err) {
      alert('Error: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-background-dark text-on-surface min-h-screen selection:bg-secondary selection:text-on-secondary">
      
<nav className="fixed top-0 w-full flex justify-between items-center px-6 py-4 h-20 bg-background-dark/80 backdrop-blur-xl z-50 border-b border-white/5">
<div className="text-primary font-black italic tracking-tighter text-2xl">QUIZ ARENA</div>
<div className="hidden md:flex gap-8 items-center">
<button onClick={() => navigate('/dashboard')} className="font-headline font-bold text-sm text-secondary uppercase">Dashboard</button>
</div>
</nav>

<main className="pt-28 px-4 md:px-8 max-w-7xl mx-auto">

<header className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
<div>
<span className="text-secondary font-headline font-extrabold tracking-widest text-xs uppercase mb-2 block">MODO TALLER</span>
<h1 className="text-4xl md:text-5xl font-black tracking-tighter text-white">CREAR NUEVO QUIZ</h1>
</div>
<div className="flex gap-4">
<button 
  onClick={handlePublish}
  disabled={loading}
  className="bg-gradient-to-r from-primary to-primary-container text-on-primary-container px-8 py-3 rounded-full font-headline font-black text-sm hover:scale-105 active:scale-95 transition-all flex items-center gap-2 shadow-lg shadow-primary/20 disabled:opacity-50"
>
  <span className="material-symbols-outlined text-xl">rocket_launch</span> 
  {loading ? 'PUBLICANDO...' : 'PUBLICAR ARENA'}
</button>
</div>
</header>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

<div className="lg:col-span-4 space-y-6">

<section className="bg-surface-bright rounded-lg p-8 space-y-6">
<div>
<label className="block text-primary font-headline font-bold text-xs uppercase tracking-widest mb-3">TÍTULO DEL QUIZ</label>
<input 
  className="w-full bg-background-dark border-none rounded-DEFAULT p-4 text-white placeholder:text-outline focus:ring-2 focus:ring-secondary/40 focus:outline-none text-lg font-bold" 
  placeholder="Introduce un nombre épico..." 
  type="text"
  value={title}
  onChange={(e) => setTitle(e.target.value)}
/>
</div>
<div>
<label className="block text-primary font-headline font-bold text-xs uppercase tracking-widest mb-3">URL DE IMAGEN DE PORTADA</label>
<div className="relative">
<input 
  className="w-full bg-background-dark border-none rounded-DEFAULT p-4 text-white placeholder:text-outline focus:ring-2 focus:ring-secondary/40 focus:outline-none" 
  placeholder="https://..." 
  type="text"
  value={image}
  onChange={(e) => setImage(e.target.value)}
/>
<span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-outline">image</span>
</div>
</div>
</section>

<section className="bg-surface-bright rounded-lg p-8 border-2 border-dashed border-outline-variant hover:border-secondary/40 transition-colors group">
<div className="flex flex-col items-center text-center">
<div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-secondary text-3xl">upload_file</span>
</div>
<h3 className="font-headline font-bold text-lg mb-1 text-white uppercase italic">Carga Masiva</h3>
<p className="text-on-surface-variant text-sm mb-6">Sube tu archivo Excel para poblar el arena al instante.</p>
<div className="flex flex-col gap-3 w-full">
  <label className="bg-surface-bright text-secondary border border-secondary/30 px-6 py-3 rounded-xl font-headline font-bold text-xs uppercase cursor-pointer hover:bg-secondary hover:text-on-secondary transition-all">
    SUBIR ARCHIVO EXCEL 
    <input className="hidden" type="file" accept=".xlsx, .xls" onChange={handleFileUpload}/>
  </label>
  <button onClick={downloadTemplate} className="text-primary-container text-[10px] font-bold uppercase tracking-widest hover:underline">
    Descargar Plantilla Vacía
  </button>
</div>
</div>
</section>
</div>

<div className="lg:col-span-8 space-y-6">
<section className="bg-surface-bright rounded-lg overflow-hidden min-h-[400px]">
  <div className="bg-surface-container p-6 flex justify-between items-center border-b border-white/5">
    <h2 className="font-headline font-extrabold text-xl tracking-tight text-white uppercase italic">Vista Previa de Preguntas ({questions.length})</h2>
  </div>
  <div className="p-8 space-y-4">
    {questions.length > 0 ? (
      <div className="grid gap-3">
        {questions.map((q, idx) => (
          <div key={idx} className="p-4 bg-background-dark/50 rounded-xl border border-white/5 flex gap-4 items-center">
            <span className="text-secondary font-black">{idx + 1}</span>
            <span className="text-white text-sm font-medium flex-1">{q.text}</span>
            <span className="bg-primary/20 text-primary text-[10px] px-2 py-1 rounded-full">{q.options[q.correctIndex]}</span>
          </div>
        ))}
      </div>
    ) : (
      <div className="h-full flex flex-col items-center justify-center text-on-surface-variant py-20">
        <span className="material-symbols-outlined text-6xl mb-4 opacity-20">quiz</span>
        <p className="italic">Aún no hay preguntas cargadas. Usa el importador de Excel.</p>
      </div>
    )}
  </div>
</section>
</div>
</div>
</main>
    </div>
  );
}
