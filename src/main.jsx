import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css'
import Home from './pages/Home.jsx'
import CardPage from './pages/CardPage.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
        <Routes>
          <Route path="/home" element={<Home />} /> {/* Pagina delle card */}
          <Route path="/cardpage" element={<CardPage />} /> {/* Pagina delle card */}
        </Routes>
    </Router>
  </StrictMode>,
)
