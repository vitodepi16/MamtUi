import '../Home.css'
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import Hero from '../components/Hero.jsx';

function App() {
  return (
    <>
      <header>
        <Header></Header>
      </header>
      <main>
        <div className='flex flex-auto flex-wrap'>
          <Hero></Hero>
        </div>
      </main>  
      <Footer></Footer>
    </>
    
  )
}
export default App



