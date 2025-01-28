import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import Card from '../components/Card';
import API from '../API.js';
import { useEffect, useState } from 'react';

function CardPage() {
    const [cards, setCards] = useState([]);
    useEffect(() => {
        API.get('https://api.tcgdex.net/v2/en/sets/sv08.5',).then((response) => {
            console.log(response.data);
            console.log(response.data.cards);
            setCards(response.data.cards);
        });
}, []);

    return (
        <>
            <header>
                <Header></Header>
            </header>
            <div className='flex flex-auto flex-wrap'>
                {cards.map((card) => (
                    <Card key={card.id} card={card} />
                ))}
                
            </div>
            <Footer></Footer>
        </>
    );
}
export default CardPage;