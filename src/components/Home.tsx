import logo from "../icons/profile-pic.jpg";
import "../styles/Home.css";
import "../styles/Section.css";
import "../styles/Image.css"

function Home() {
  return (
    <section id="home">
      <div>
        <img src={logo} className="rounded-image" alt="Profile Picture" width="300"/>
        <p>Home</p>
      </div>
    </section>
  );
}

export default Home;
