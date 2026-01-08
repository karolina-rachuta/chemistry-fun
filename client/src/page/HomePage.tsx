import Header from '../components/layout/header/Header';
import Parallax from '../components/homepage/Parallax';
import About from '../components/homepage/About';
import Footer from '../components/layout/footer/Footer';

function HomePage() {
    return (
        <div>
            <Header />
            <Parallax />
            <About />
            <Footer />
        </div>
    );
}

export default HomePage;
