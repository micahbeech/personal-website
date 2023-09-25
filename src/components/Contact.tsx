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
    <section id="contact" className="contact">
      <div className="contacts">
        {contacts.map((contact) => {
          return (
            <a href={contact.link}>
              <img src={contact.image} className="contact" alt={contact.text}></img>
            </a>
          );
        })}
      </div>
    </section>
  );
}

export default Contact;
