import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../Home.css'
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import Hero from '../components/Hero.jsx';
import CardPage from './CardPage.jsx';

function App() {
  return (
  
    <>
      <Router>
        <Routes>
          <Route path="/CardPage" element={<CardPage />} /> {/* Pagina delle card */}
        </Routes>
      
      <header>
        <Header></Header>
      </header>
      <main>
        <div className='flex flex-auto flex-wrap'>
          <Hero></Hero>
        </div>
      </main>
      
      <Footer></Footer>
      </Router>
    </>
    
  )
}
export default App



