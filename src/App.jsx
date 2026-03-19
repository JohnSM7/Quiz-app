import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom'
import { useQuiz, QuizProvider } from './context/QuizContext'
import Admin from './pages/Admin'
import Feedback from './pages/Feedback'
import FeedbackSimple from './pages/FeedbackSimple'
import Instrucciones from './pages/Instrucciones'
import Lobby from './pages/Lobby'
import PantallaJuego from './pages/PantallaJuego'
import Podio from './pages/Podio'
import Resumen from './pages/Resumen'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'

function RequireAuth({ children, role }) {
  const { user } = useQuiz();
  if (!user) return <Navigate to="/login" />;
  if (role && user.role !== role) return <Navigate to={user.role === 'admin' ? '/admin' : '/dashboard'} />;
  return children;
}

function App() {
  return (
    <QuizProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Navigate to="/login" />} />
          
          {/* Protected Participant Routes */}
          <Route path="/dashboard" element={<RequireAuth><Dashboard /></RequireAuth>} />
          <Route path="/juego" element={<RequireAuth role="participant"><PantallaJuego /></RequireAuth>} />
          <Route path="/lobby" element={<RequireAuth role="participant"><Lobby /></RequireAuth>} />
          <Route path="/instrucciones" element={<RequireAuth role="participant"><Instrucciones /></RequireAuth>} />
          <Route path="/feedback" element={<RequireAuth role="participant"><Feedback /></RequireAuth>} />
          <Route path="/feedback-simple" element={<RequireAuth role="participant"><FeedbackSimple /></RequireAuth>} />
          <Route path="/resumen" element={<RequireAuth role="participant"><Resumen /></RequireAuth>} />
          
          {/* Protected Admin Routes */}
          <Route path="/admin" element={<RequireAuth role="admin"><Admin /></RequireAuth>} />
          <Route path="/podio" element={<RequireAuth role="admin"><Podio /></RequireAuth>} />
        </Routes>
      </BrowserRouter>
    </QuizProvider>
  )
}

export default App
