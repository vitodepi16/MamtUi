import './App.css'
import Card from './components/card.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

function App() {
  

  return (
  
    <>
      <header>
        <Header></Header>
      </header>
      <main>
        <div className='flex flex-auto flex-wrap p-2'>
          <div className='flex flex-auto flex-wrap justify-center gap-5 pt-5 pb-5'>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
          </div>
      </div>
  
      </main>
      
    <Footer></Footer>
   
      </>
    
  )
}
export default App



