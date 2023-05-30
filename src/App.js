import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/portfolio/Portfolio';
import Experience from './components/Experience';
import Contact from './components/Contact';
import SocialLinks from './components/SocialLinks';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Portfolio />
      <Experience />
      <Contact />
      <SocialLinks />
      <Footer />
    </div>
  );
}

export default App;
