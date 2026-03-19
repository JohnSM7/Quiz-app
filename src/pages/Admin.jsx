import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as XLSX from 'xlsx';
import { useQuiz } from '../context/QuizContext';

export default function Admin() {
  const navigate = useNavigate();
  const { createQuiz, allQuizzes, allUsers } = useQuiz();
  const [activeTab, setActiveTab] = useState('CREATOR');
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [editingId, setEditingId] = useState(null);

  const loadQuizForEdit = (quiz) => {
    setEditingId(quiz.id);
    setTitle(quiz.title);
    setImage(quiz.image);
    setQuestions(quiz.questions || []);
    setActiveTab('CREATOR');
  };

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
        id: editingId,
        title,
        image: image || 'https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=400',
        questions,
        questionsCount: questions.length,
        category: 'NUEVO',
        timeLimit: 10
      });
      alert(editingId ? '¡Quiz actualizado!' : '¡Quiz publicado con éxito!');
      setEditingId(null);
      setTitle('');
      setImage('');
      setQuestions([]);
      setActiveTab('LIBRARY');
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
          <button 
            onClick={() => setActiveTab('CREATOR')} 
            className={`font-headline font-bold text-sm uppercase tracking-widest ${activeTab === 'CREATOR' ? 'text-primary border-b-2 border-primary' : 'text-white/40'}`}
          >
            CREADOR
          </button>
          <button 
            onClick={() => setActiveTab('LIBRARY')} 
            className={`font-headline font-bold text-sm uppercase tracking-widest ${activeTab === 'LIBRARY' ? 'text-primary border-b-2 border-primary' : 'text-white/40'}`}
          >
            LIBRERÍA
          </button>
          <button 
            onClick={() => setActiveTab('USERS')} 
            className={`font-headline font-bold text-sm uppercase tracking-widest ${activeTab === 'USERS' ? 'text-primary border-b-2 border-primary' : 'text-white/40'}`}
          >
            USUARIOS
          </button>
        </div>
      </nav>

      <main className="pt-28 px-4 md:px-8 max-w-7xl mx-auto pb-20">
        {activeTab === 'CREATOR' && (
          <>
            <header className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div>
                <span className="text-secondary font-headline font-extrabold tracking-widest text-xs uppercase mb-2 block">{editingId ? 'MODO EDICIÓN' : 'MODO TALLER'}</span>
                <h1 className="text-4xl md:text-5xl font-black tracking-tighter text-white uppercase">{editingId ? 'EDITAR QUIZ' : 'CREAR NUEVO QUIZ'}</h1>
              </div>
              <div className="flex gap-4">
                {editingId && (
                  <button onClick={() => { setEditingId(null); setTitle(''); setImage(''); setQuestions([]); }} className="bg-white/5 text-white px-6 py-3 rounded-full font-headline font-bold text-sm hover:bg-white/10 transition-all">CANCELAR</button>
                )}
                <button 
                  onClick={handlePublish}
                  disabled={loading}
                  className="bg-gradient-to-r from-primary to-primary-container text-on-primary-container px-8 py-3 rounded-full font-headline font-black text-sm hover:scale-105 active:scale-95 transition-all flex items-center gap-2 shadow-lg shadow-primary/20 disabled:opacity-50"
                >
                  <span className="material-symbols-outlined text-xl">rocket_launch</span> 
                  {loading ? 'PUBLICANDO...' : (editingId ? 'GUARDAR CAMBIOS' : 'PUBLICAR ARENA')}
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
                    <input 
                      className="w-full bg-background-dark border-none rounded-DEFAULT p-4 text-white placeholder:text-outline focus:ring-2 focus:ring-secondary/40 focus:outline-none" 
                      placeholder="https://..." 
                      type="text"
                      value={image}
                      onChange={(e) => setImage(e.target.value)}
                    />
                  </div>
                </section>

                <section className="bg-surface-bright rounded-lg p-8 border-2 border-dashed border-outline-variant hover:border-secondary/40 transition-colors group">
                  <div className="flex flex-col items-center text-center">
                    <span className="material-symbols-outlined text-secondary text-3xl mb-4">upload_file</span>
                    <h3 className="font-headline font-bold text-lg mb-1 text-white uppercase italic">Carga Masiva</h3>
                    <p className="text-on-surface-variant text-sm mb-6">Sube tu Excel para poblar el arena.</p>
                    <label className="bg-surface-bright text-secondary border border-secondary/30 px-6 py-3 rounded-xl font-headline font-bold text-xs uppercase cursor-pointer hover:bg-secondary hover:text-on-secondary transition-all w-full">
                      SUBIR EXCEL 
                      <input className="hidden" type="file" accept=".xlsx, .xls" onChange={handleFileUpload}/>
                    </label>
                    <button onClick={downloadTemplate} className="mt-3 text-primary-container text-[10px] font-bold uppercase tracking-widest hover:underline">Descargar Plantilla</button>
                  </div>
                </section>
              </div>

              <div className="lg:col-span-8">
                <section className="bg-surface-bright rounded-lg overflow-hidden min-h-[400px]">
                  <div className="bg-surface-container p-6 border-b border-white/5 text-white font-headline font-extrabold uppercase italic">
                    Vista Previa ({questions.length})
                  </div>
                  <div className="p-8 space-y-3">
                    {questions.length > 0 ? questions.map((q, idx) => (
                      <div key={idx} className="p-4 bg-background-dark/50 rounded-xl border border-white/5 flex gap-4 items-center">
                        <span className="text-secondary font-black">{idx + 1}</span>
                        <p className="text-white text-sm flex-1">{q.text}</p>
                        <span className="bg-primary/20 text-primary text-[10px] px-2 py-1 rounded-full uppercase">{q.options[q.correctIndex]}</span>
                      </div>
                    )) : <p className="text-center text-white/20 py-20 italic">No hay preguntas</p>}
                  </div>
                </section>
              </div>
            </div>
          </>
        )}

        {activeTab === 'LIBRARY' && (
          <div className="space-y-8">
            <header>
              <h1 className="text-4xl md:text-5xl font-black tracking-tighter text-white uppercase italic">Librería de Quizzes</h1>
              <p className="text-white/40 mt-2">Gestiona y edita tus arenas creadas.</p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.values(allQuizzes).map(quiz => (
                <div key={quiz.id} className="bg-surface-bright rounded-2xl overflow-hidden border border-white/5 hover:border-primary/30 transition-all group">
                  <div className="h-40 bg-cover bg-center relative" style={{ backgroundImage: `url(${quiz.image})` }}>
                    <div className="absolute inset-0 bg-gradient-to-t from-surface-bright to-transparent"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-white text-xl font-black uppercase italic tracking-tight">{quiz.title}</h3>
                    <p className="text-white/40 text-xs mt-1">{quiz.questionsCount || 0} Preguntas • {quiz.category || 'NUEVO'}</p>
                    <div className="mt-6 flex gap-3">
                      <button 
                        onClick={() => loadQuizForEdit(quiz)}
                        className="flex-1 bg-white/5 hover:bg-primary hover:text-background-dark text-white font-headline font-bold py-3 rounded-xl text-xs transition-with-all uppercase"
                      >
                        Editar
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'USERS' && <UsersManager />}
      </main>
    </div>
  );
}

function UsersManager() {
  const { allUsers, allQuizzes, createUser, assignQuizToUser } = useQuiz();
  const [newUsername, setNewUsername] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleCreateUser = async (e) => {
    e.preventDefault();
    if (!newUsername || !newPassword) return;
    try {
      await createUser({ username: newUsername, password: newPassword });
      setNewUsername('');
      setNewPassword('');
      alert('Usuario creado correctamente');
    } catch (err) {
      alert('Error: ' + err.message);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      <div className="lg:col-span-4 space-y-6">
        <section className="bg-surface-bright rounded-2xl p-8 border border-white/5">
          <h3 className="text-white text-xl font-black uppercase italic mb-6 text-primary">Nuevo Participante</h3>
          <form onSubmit={handleCreateUser} className="space-y-4">
            <input 
              className="w-full bg-background-dark border-none rounded-xl p-4 text-white placeholder:text-white/20 focus:ring-2 focus:ring-primary/40 focus:outline-none" 
              placeholder="Nombre de usuario" 
              value={newUsername}
              onChange={(e) => setNewUsername(e.target.value)}
            />
            <input 
              className="w-full bg-background-dark border-none rounded-xl p-4 text-white placeholder:text-white/20 focus:ring-2 focus:ring-primary/40 focus:outline-none" 
              placeholder="Contraseña" 
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <button className="w-full bg-primary text-background-dark font-black py-4 rounded-xl uppercase tracking-widest hover:brightness-110 transition-all">Crear Usuario</button>
          </form>
        </section>
      </div>

      <div className="lg:col-span-8 space-y-6">
        <h3 className="text-white text-xl font-black uppercase italic">Listado de Usuarios</h3>
        <div className="grid gap-4">
          {Object.values(allUsers).filter(u => u.role !== 'admin').map(u => (
            <div key={u.username} className="bg-surface-bright p-6 rounded-2xl border border-white/5 flex flex-col md:flex-row md:items-center justify-between gap-4 group hover:border-primary/20 transition-all">
              <div>
                <h4 className="text-white font-bold text-lg uppercase italic tracking-tight">{u.username}</h4>
                <p className="text-white/40 text-xs">Nivel {u.stats?.level || 1} • {u.stats?.xp || 0} XP</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {u.assignedQuizzes?.map(qid => (
                    <span key={qid} className="text-[9px] bg-primary/10 text-primary px-2 py-0.5 rounded-full uppercase font-bold border border-primary/20">
                      {allQuizzes[qid]?.title || qid}
                    </span>
                  ))}
                  {(!u.assignedQuizzes || u.assignedQuizzes.length === 0) && (
                    <span className="text-[9px] text-white/20 italic">No tiene quizzes asignados</span>
                  )}
                </div>
              </div>
              <div className="flex gap-2">
                <select 
                  className="bg-background-dark text-white text-xs p-3 rounded-xl border-none focus:ring-2 focus:ring-primary/40 cursor-pointer min-w-[150px]"
                  onChange={(e) => {
                    if (e.target.value) {
                      assignQuizToUser(u.username, e.target.value);
                      alert(`Quiz asignado a ${u.username}`);
                    }
                  }}
                  defaultValue=""
                >
                  <option value="" disabled>+ ASIGNAR QUIZ</option>
                  {Object.values(allQuizzes).map(q => (
                    <option key={q.id} value={q.id}>{q.title}</option>
                  ))}
                </select>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
