import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import "../css/contact.css";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner, faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";

function Contact() {
  const { t } = useTranslation();
  const formRef = useRef();
  const [submitText, setSubmitText] = useState(t("contact.submitText"));
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
  const [loading, setLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(null);

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
    e.preventDefault();
    setSubmitText(t("contact.sending"));
    setLoading(true);
    setIsSuccess(null);

    emailjs
      .sendForm(serviceId, templateId, formRef.current)
      .then(
        () => {
          setSubmitText(t("contact.success"));
          setIsSuccess(true);
          formRef.current.reset();

          setTimeout(() => {
            setSubmitText(t("contact.submitText"));
            setIsSuccess(null);
          }, 3000);
        },
        (error) => {
          console.error("Erreur :", error);
          setSubmitText(t("contact.error"));
          setIsSuccess(false);

          setTimeout(() => {
            setSubmitText(t("contact.submitText"));
            setIsSuccess(null);
          }, 3000);
        },
      )
      .finally(() => {
        setLoading(false);
      });
  };

  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

  emailjs.init(publicKey);

  return (
    <section id="contact">
      <div className="inner">
        <h2>{t("contact.title")}</h2>
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
              {t("contact.name")}
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
              {t("contact.email")}
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
              {t("contact.message")}
            </motion.span>
          </label>
          <input
            type="text"
            id="to_name"
            name="to_name"
            value="Anthony"
            hidden
            readOnly
            required
          />
          <div className="subBtn">
            <motion.button type="submit">
              <motion.div
                key={
                  loading
                    ? "loading"
                    : isSuccess === null
                    ? "initial"
                    : isSuccess
                    ? "success"
                    : "error"
                }
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                {loading ? (
                  <FontAwesomeIcon icon={faSpinner} spin />
                ) : isSuccess === null ? (
                  submitText
                ) : isSuccess ? (
                  <FontAwesomeIcon icon={faCheck} style={{ color: "green" }} />
                ) : (
                  <FontAwesomeIcon icon={faTimes} style={{ color: "red" }} />
                )}
              </motion.div>
            </motion.button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
