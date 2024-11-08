import React from "react";
import "../css/contact.css";

function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center bg-gray-600 text-white p-10"
    >
      <h2 className="text-3xl font-semibold mb-6">Contactez-moi</h2>
      <form className="w-full max-w-lg bg-white p-6 rounded-lg shadow-md">
        <label className="block mb-2">Nom</label>
        <input
          type="text"
          name="name"
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
        />
        <label className="block mb-2">Email</label>
        <input
          type="email"
          name="email"
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
        />
        <label className="block mb-2">Message</label>
        <textarea
          name="message"
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
        >
          Envoyer
        </button>
      </form>
    </section>
  );
}

export default Contact;
