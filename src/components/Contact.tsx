import '../styles/Contact.css';
import github from '../icons/github.png';
import linkedin from '../icons/linkedin.avif';
import email from '../icons/email.jpeg';

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contacts">
        <a href="https://github.com/micahbeech">
          <img src={github} className="contact" alt="GitHub"></img>
        </a>

        <a href="https://www.linkedin.com/in/micahbeech/">
          <img src={linkedin} className="contact" alt="LinkedIn"></img>
        </a>

        <a href="mailto:beechmicah@gmail.com">
          <img src={email} className="contact" alt="eMail"></img>
        </a>
      </div>
    </section>
  );
}

export default Contact;
