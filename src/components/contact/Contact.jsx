import React from "react";
import "./contact.css";
import { FiMail } from "react-icons/fi";
import { RiMessengerLine, RiWhatsappLine } from "react-icons/ri";
import emailjs from "emailjs-com";
const Contact = () => {
  const form = React.useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ztv59bc",
        "template_bl5pmib",
        form.current,
        "CAq2G3OE8SgSH839R"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <FiMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>chuedgah@gmail.com</h5>
            <a
              href="mailto:chuedgah@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>edwingah</h5>
            <a
              href="https://m.me/asonganyi.rouclec.16"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <RiWhatsappLine className="contact__option-icon" />
            <h4>Whatsapp</h4>
            <h5>+237 675 534 139</h5>
            <a
              href="https://wa.me/23750184172"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your full name"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your email@gmail.com"
            required
          />
          <textarea
            name="message"
            rows="7"
            placeholder="Your message"
            required
          />
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
