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

      <div className="card"><Home/></div>

      <div className="card"><Work/></div>

      <div className="card"><Projects/></div>

      <div className="card"><Education/></div>

      <div className="card"><Contact/></div>
    </div>
  );
}

export default App;
