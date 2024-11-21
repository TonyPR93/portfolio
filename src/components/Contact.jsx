import React from "react";
import "../css/contact.css";

function Contact() {
  return (
    <section id="contact">
      <h2>Contactez-moi</h2>
      <form>
        <label>Nom</label>
        <input type="text" name="name" />
        <label>Email</label>
        <input type="email" name="email" />
        <label>Message</label>
        <textarea name="message" />
        <button type="submit">Envoyer</button>
      </form>
    </section>
  );
}

export default Contact;
