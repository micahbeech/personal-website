import '../styles/App.css';
import Navbar from './Navbar';
import About from './About';
import Resume from './Resume';
import Projects from './Projects';
import Contact from './Contact';
import Home from './Home';

function App() {
  return (
    <>
      <Navbar />

      <Home />

      <section id="about"><About /></section>

      <section id="resume"><Resume /></section>

      <section id="projects"><Projects /></section>

      <section id="contact"><Contact /></section>
    </>
  );
}

export default App;
