import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useQuiz } from '../context/QuizContext';

export default function Login() {
  const navigate = useNavigate();
  const { login } = useQuiz();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    const role = login(username, password);
    if (role === 'admin') {
      navigate('/admin');
    } else {
      navigate('/dashboard');
    }
  };

  return (
    <div className="bg-background text-on-background min-h-screen selection:bg-secondary selection:text-on-secondary flex items-center justify-center px-4">
      <div className="fixed inset-0 bg-kinetic pointer-events-none"></div>
      <div className="fixed -top-24 -left-24 w-96 h-96 bg-primary/20 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="fixed -bottom-24 -right-24 w-96 h-96 bg-secondary/10 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="w-full max-w-[400px] z-10 flex flex-col">
        <header className="text-center mb-10">
          <div className="inline-flex items-center justify-center p-4 mb-6 rounded-full bg-primary/10 border border-primary/20">
            <span className="material-symbols-outlined text-primary text-4xl">bolt</span>
          </div>
          <h1 className="font-headline text-4xl md:text-5xl font-extrabold tracking-tighter text-on-surface mb-3">
            ELECTRIC <span className="text-primary">ARENA</span>
          </h1>
          <p className="text-on-surface-variant text-lg">Inicia sesión para entrar en la arena</p>
        </header>

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-primary/80 ml-1">Email/Usuario</label>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-primary/50">person</span>
              <input 
                className="glass-card w-full h-14 pl-12 pr-4 rounded-xl text-on-surface placeholder:text-on-surface-variant/40 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all border border-outline-variant/10" 
                placeholder="Tu usuario o email (Escribe 'admin' para panel control)" 
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-col gap-1.5">
            <div className="flex justify-between items-center px-1">
              <label className="text-sm font-medium text-primary/80">Contraseña</label>
              <a className="text-xs text-secondary hover:text-primary transition-colors" href="#">¿Olvidaste tu contraseña?</a>
            </div>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-primary/50">lock</span>
              <input 
                className="glass-card w-full h-14 pl-12 pr-12 rounded-xl text-on-surface placeholder:text-on-surface-variant/40 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all border border-outline-variant/10" 
                placeholder="Cualquier contraseña servirá" 
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <button 
            type="submit"
            className="w-full h-14 mt-4 bg-gradient-to-r from-primary to-primary-container rounded-xl text-on-primary-container font-headline font-bold text-lg tracking-widest hover:shadow-[0_0_30px_rgba(208,149,255,0.4)] active:scale-[0.98] transition-all uppercase"
          >
            ENTRAR
          </button>
        </form>

        <div className="flex items-center gap-4 my-10">
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-primary/30"></div>
          <span className="text-xs font-medium text-on-surface-variant uppercase tracking-widest">O entra con</span>
          <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-primary/30"></div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <button className="glass-card h-14 rounded-xl flex items-center justify-center gap-3 hover:bg-white/5 transition-colors border border-outline-variant/10">
            <span className="text-sm font-semibold text-on-surface">Google</span>
          </button>
          <button className="glass-card h-14 rounded-xl flex items-center justify-center gap-3 hover:bg-white/5 transition-colors border border-outline-variant/10">
            <span className="text-sm font-semibold text-on-surface">Facebook</span>
          </button>
        </div>

        <footer className="mt-12 text-center text-on-surface-variant text-sm">
          ¿Nuevo en la arena? 
          <a className="text-secondary font-bold hover:underline ml-1" href="#">Crea una cuenta</a>
        </footer>
      </div>

      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-[120%] h-[176px] bg-gradient-to-t from-primary/10 to-transparent blur-3xl opacity-50"></div>
    </div>
  );
}
