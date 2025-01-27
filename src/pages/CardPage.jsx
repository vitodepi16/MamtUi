import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import Card from '../components/Card';

function CardPage() {
    return (
        <>
            <header>
                <Header></Header>
            </header>
            <div className='h-screen'>
                <Card></Card>
            </div>
            <Footer></Footer>
        </>
    );
}
export default CardPage;