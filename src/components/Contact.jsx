import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import "../css/contact.css";

function Contact() {
  const formRef = useRef(); // Référence pour le formulaire
  const [submitText, setSubmitText] = useState("Envoyer");
  const [isFocused, setIsFocused] = useState({
    from_name: false,
    email: false,
    message: false,
  });
  const [isValid, setIsValid] = useState({
    from_name: false,
    email: false,
    message: false,
  });

  const handleFocus = (e) => {
    setIsFocused((prev) => ({ ...prev, [e.target.name]: true }));
  };

  const handleBlur = (e) => {
    setIsFocused((prev) => ({ ...prev, [e.target.name]: false }));
    setIsValid((prev) => ({
      ...prev,
      [e.target.name]: e.target.value.trim() !== "",
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Empêche le rechargement de la page
    setSubmitText("En cours...");

    // Envoyer les données via EmailJS
    emailjs.sendForm(serviceId, templateId, formRef.current).then(
      () => {
        setSubmitText("Message envoyé, merci !");
        formRef.current.reset();
      },
      (error) => {
        console.error("Erreur :", error);
        setSubmitText("Erreur !");
      },
    );
  };
  // Clés EmailJS
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  console.log(publicKey, serviceId, templateId);
  // Initialiser EmailJS
  emailjs.init(publicKey);
  return (
    <section id="contact">
      <div className="inner">
        <h2>Contactez-moi</h2>
        <form ref={formRef} onSubmit={handleSubmit}>
          <label className="form-group">
            <motion.input
              type="text"
              id="from_name"
              name="from_name"
              required
              onFocus={handleFocus}
              onBlur={handleBlur}
              className="form-control"
            />
            <motion.span
              initial={{ y: 0, scale: 1 }}
              animate={{
                y: isFocused.from_name || isValid.from_name ? -22 : 11,
                scale: isFocused.from_name || isValid.from_name ? 0.8 : 1,
              }}
              transition={{ duration: 0.2 }}
            >
              Nom
            </motion.span>
            <motion.span
              className="border"
              initial={{ scaleX: 0 }}
              animate={{
                scaleX: isFocused.from_name || isValid.from_name ? 1 : 0,
              }}
              transition={{ duration: 0.05 }}
            ></motion.span>
          </label>

          <label className="form-group">
            <motion.input
              type="email"
              id="email"
              name="email"
              required
              onFocus={handleFocus}
              onBlur={handleBlur}
              className="form-control"
            />
            <motion.span
              initial={{ y: 0, scale: 1 }}
              animate={{
                y: isFocused.email || isValid.email ? -22 : 11,
                scale: isFocused.email || isValid.email ? 0.8 : 1,
              }}
              transition={{ duration: 0.2 }}
            >
              E-mail
            </motion.span>
            <motion.span
              className="border"
              initial={{ scaleX: 0 }}
              animate={{
                scaleX: isFocused.email || isValid.email ? 1 : 0,
              }}
              transition={{ duration: 0.15 }}
            ></motion.span>
          </label>

          <label className="form-group">
            <motion.textarea
              id="message"
              name="message"
              required
              onFocus={handleFocus}
              onBlur={handleBlur}
              className="form-control"
            />
            <motion.span
              initial={{ y: 0, scale: 1 }}
              animate={{
                y: isFocused.message || isValid.message ? -22 : 11,
                scale: isFocused.message || isValid.message ? 0.8 : 1,
              }}
              transition={{ duration: 0.2 }}
            >
              Message
            </motion.span>
          </label>
          <input
            type="text"
            id="to_name"
            name="to_name"
            value="Anthony"
            hidden
            required
          />
          <div className="subBtn">
            <button type="submit">{submitText}</button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
