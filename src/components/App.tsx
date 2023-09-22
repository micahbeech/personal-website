import '../styles/App.css';
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

      <Home/>

      <Work/>

      <Projects/>

      <Education/>

      <Contact/>
    </div>
  );
}

export default App;
