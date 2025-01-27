import './App.css'
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

function App() {
  

  return (
  
    <>
      <header>
        <Header></Header>
      </header>
      <main>
        <div className='flex flex-auto flex-wrap'>
          <div
  className="hero min-h-screen"
  style={{
    backgroundImage: "url(https://w0.peakpx.com/wallpaper/403/85/HD-wallpaper-machop-machamp.jpg)",
  }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md text-white">
      <h1 className="mb-5 text-5xl font-bold">Benvenuto/a</h1>
      <p className="mb-5">
       Benvenut* nella tua collezione Pokemon! Qui potrai trovare tutte le carte dei tuoi Pokemon preferiti, scoprire nuove carte e tanto altro!
      </p>
      <button className="btn bg-ciola text-white">Scopri le carte</button>
    </div>
  </div>
</div>
      </div>
  
      </main>
      
    <Footer></Footer>
   
      </>
    
  )
}
export default App



