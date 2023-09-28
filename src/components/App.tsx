import Navbar from './Navbar';
import Work from './Work';
import Education from './Education';
import Projects from './Projects';
import Contact from './Contact';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <Navbar/>

      <section id="about"><Home/></section>

      <section id="work"><Work/></section>

      <section id="projects"><Projects/></section>

      <section id="education"><Education/></section>

      <section id="contact"><Contact/></section>
    </div>
  );
}

export default App;
