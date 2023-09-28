import '../styles/Contact.css';
import github from '../icons/github.png';
import linkedin from '../icons/linkedin.avif';
import email from '../icons/email.jpeg';

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
    <div className="hbox page">
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
