import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import Card from "../components/Card";
import Loader from "../components/Loader.jsx";
import API from "../API.js";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function CardPage() {
  const [cards, setCards] = useState([]);
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(true);
  const [selectedRarity, setSelectedRarity] = useState("");
  const [error, setError] = useState(null);
  useEffect(() => {
    API.get("https://api.pokemontcg.io/v2/cards")
      .then((response) => {
        console.log(response.data.data);
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
  return (
    <>
      <header>
        <Header></Header>
      </header>
      <button className="btn btn-ciola mt-20" onClick={() => navigate("/")}>
        {" "}
        Torna alla home
      </button>
      <div className="container mx-auto p-4  ">
        <label className="block mb-2 text-lg font-bold text-gray-700">
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

        <div className=" flex flex-wrap justify-center gap-6 ">
          {isLoading ? (
            <p>Caricamento carte...</p>
          ) : error ? (
            <p className="text-red-500">Errore: {error.message}</p>
          ) : filteredCards.length > 0 ? (
            filteredCards.map((card) => <Card key={card.id} card={card} />)
          ) : (
            <p>Nessuna carta trovata con questa rarità.</p>
          )}
        </div>
      </div>
      <div className="p-4">
        <div className="flex flex-auto flex-wrap flex-row justify-center gap-4 mt-20">
          {isLoading ? (
            <Loader></Loader>
          ) : (
            cards.map((card) => <Card key={card.id} card={card} />)
          )}
        </div>
      </div>

      <Footer></Footer>
    </>
  );
}
export default CardPage;
