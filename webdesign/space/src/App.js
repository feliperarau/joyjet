import './App.scss';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Carousel from './components/Carousel';
import AboutUs from './components/AboutUs';
import AboutUsData from './data/AboutUs';
import FooterData from './data/FooterData';
import HeaderData from './data/HeaderData';
import HeroData from './data/HeroData';

function App() {
  return (
    <div className="App">
      <Header {...HeaderData} />

      <main className="page-content">
        <div className="mb-6 mb-lg-8">
          <Hero {...HeroData} />
        </div>

        <div className="container mb-6">
          <Carousel />
        </div>

        <div className="container mb-6">
          <AboutUs {...AboutUsData} />
        </div>
      </main>

      <Footer {...FooterData} />
    </div>
  );
}

export default App;
