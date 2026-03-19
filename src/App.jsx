import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Admin from './pages/Admin'
import Feedback from './pages/Feedback'
import FeedbackSimple from './pages/FeedbackSimple'
import Instrucciones from './pages/Instrucciones'
import Lobby from './pages/Lobby'
import PantallaJuego from './pages/PantallaJuego'
import Podio from './pages/Podio'
import Resumen from './pages/Resumen'

function Navigation() {
  return (
    <div className="fixed top-24 right-4 z-[9999] opacity-30 hover:opacity-100 transition-opacity bg-background/90 p-3 rounded-lg text-xs space-y-2 text-on-surface flex flex-col border border-outline-variant/50 backdrop-blur-xl">
      <div className="font-bold text-primary mb-1 uppercase tracking-widest text-[10px]">Dev Nav</div>
      <Link to="/" className="hover:text-primary transition-colors hover:translate-x-1">1. Admin / Setup</Link>
      <Link to="/lobby" className="hover:text-primary transition-colors hover:translate-x-1">2. Lobby</Link>
      <Link to="/instrucciones" className="hover:text-primary transition-colors hover:translate-x-1">3. Instrucciones</Link>
      <Link to="/juego" className="hover:text-primary transition-colors hover:translate-x-1">4. Pantalla Juego</Link>
      <Link to="/feedback" className="hover:text-primary transition-colors hover:translate-x-1">5. Feedback</Link>
      <Link to="/resumen" className="hover:text-primary transition-colors hover:translate-x-1">6. Resumen</Link>
      <Link to="/podio" className="hover:text-primary transition-colors hover:translate-x-1">7. Podio</Link>
    </div>
  );
}

import { QuizProvider } from './context/QuizContext'

function App() {
  return (
    <QuizProvider>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Admin />} />
          <Route path="/juego" element={<PantallaJuego />} />
          <Route path="/lobby" element={<Lobby />} />
          <Route path="/instrucciones" element={<Instrucciones />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/feedback-simple" element={<FeedbackSimple />} />
          <Route path="/podio" element={<Podio />} />
          <Route path="/resumen" element={<Resumen />} />
        </Routes>
      </BrowserRouter>
    </QuizProvider>
  )
}

export default App
