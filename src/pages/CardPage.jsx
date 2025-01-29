import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import Card from '../components/Card';
import Loader from '../components/Loader.jsx';
import API from '../API.js';
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";


function CardPage() {
    const [cards, setCards] = useState([]);
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        API.get('https://api.pokemontcg.io/v2/cards',).then((response) => {
            console.log(response.data.data);
            setCards(response.data.data);
            setIsLoading(false); // Finito il caricamento
        });
}, []);

    return (
        <>
            <header>
                <Header></Header>
            </header>
            <button className="btn btn-ciola mt-20" onClick={() => navigate("/")}> Torna alla home</button>
            <div className='flex flex-auto flex-wrap flex-row justify-center gap-4 mt-20'>
                {isLoading ? (
                    <Loader></Loader>
                ) : (
                    (
                        cards.map((card) => (
                            <Card key={card.id} card={card} />
                        ))
                    )
                )}
            </div>
            <Footer></Footer>
        </>
    );
}
export default CardPage;