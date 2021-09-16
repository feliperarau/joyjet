import './App.scss';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Carousel from './components/Carousel';
import AboutUs from './components/AboutUs';

function App() {
  return (
    <div className="App">
      <Header />

      <main className="page-content">
        <div className="mb-5">
          <Hero />
        </div>

        <div className="container mb-5">
          <Carousel />
        </div>
      </main>

      <div className="container mb-5">
        <AboutUs />
      </div>

      <Footer />
    </div>
  );
}

export default App;
