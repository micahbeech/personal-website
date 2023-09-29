import '../styles/Contact.css';
import github from '../images/github.png';
import linkedin from '../images/linkedin.avif';
import email from '../images/email.jpeg';

const contacts = [
  {
    link: "https://github.com/micahbeech",
    text: "GitHub",
    image: github,
  },
  {
    link: "https://www.linkedin.com/in/micahbeech/",
    text: "LinkedIn",
    image: linkedin,
  },
  {
    link: "mailto:beechmicah@gmail.com",
    text: "eMail",
    image: email,
  },
]

function Contact() {
  return (
    <div className="contacts hbox page">
      {contacts.map((contact) => {
        return (
          <a key={contact.link} href={contact.link}>
            <img src={contact.image} className="contact" alt={contact.text}></img>
          </a>
        );
      })}
    </div>
  );
}

export default Contact;
