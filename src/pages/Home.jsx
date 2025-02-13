import "../Home.css";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import Hero from "../components/Hero.jsx";
import Slider from "../components/Slider.jsx";

function App() {
  return (
    <>
      <header>
        <Header></Header>
      </header>
      <main className="flex flex-col">
        <div className="flex flex-auto flex-wrap w-full">
          <Hero></Hero>
        </div>
        <div className="py-20">
          <Slider/>
        </div>
      </main>
      <Footer></Footer>
    </>
  );
}
export default App;
