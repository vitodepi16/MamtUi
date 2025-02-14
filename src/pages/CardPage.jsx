import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import Card from "../components/Card";
import Loader from "../components/Loader.jsx";
import Pagination from "../components/Pagination.jsx";  
import API from "../API.js";

function CardPage() {
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedRarity, setSelectedRarity] = useState("");
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 18; // Numero di carte per pagina
  const navigate = useNavigate();

  useEffect(() => {
    API.get("https://api.pokemontcg.io/v2/cards")
      .then((response) => {
        console.log(response.data);
        setCards(response.data.data);
        setIsLoading(false); // Finito il caricamento
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
      });
  }, []);

  const filteredCards = selectedRarity
    ? cards.filter((card) => card.rarity === selectedRarity)
    : cards;
  
  // Calcolo delle carte da visualizzare nella pagina corrente
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentCards = filteredCards.slice(indexOfFirstItem, indexOfLastItem);


  return (
    <>
      <header>
        <Header />
      </header>
      <button className="btn btn-ciola mt-20" onClick={() => navigate("/")}>
        Torna alla home
      </button>
      <div className="container mx-auto p-4  ">
        <div className="flex flex-col items-end px-10">
          <label className="block mb-2 text-lg font-bold">
            Filtra per Rarità:
          </label>
          <select
            value={selectedRarity}
            onChange={(e) => setSelectedRarity(e.target.value)}
            className="border border-gray-300 rounded p-2 mb-4  "
          >
            <option value="">Tutte</option>
            <option value="Common">Comune</option>
            <option value="Uncommon">Non Comune</option>
            <option value="Rare">Rara</option>
            <option value="Rare Holo">Rara Olografica</option>
            <option value="Rare Ultra">Rara Ultra</option>
            <option value="Rare Secret">Rara Segreta</option>
          </select>  
        </div>
        

        <div className=" flex flex-wrap justify-center gap-6 ">
          {isLoading ? (
            <Loader/>
          ) : error ? (
            <p className="text-red-500">Errore: {error.message}</p>
          ) : currentCards.length > 0 ? (
            currentCards.map((card) => <Card key={card.id} card={card} />)
          ) : (
            <p>Nessuna carta trovata con questa rarità.</p>
          )}
        </div>
        
      </div>  
        {!isLoading ? <Pagination
          totalItems={filteredCards.length}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        /> : null}
        
      <Footer/>
    </>
  );
}
export default CardPage;
