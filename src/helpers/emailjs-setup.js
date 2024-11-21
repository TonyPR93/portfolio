import emailjs from "@emailjs/browser";

// Initialisation EmailJS
export const initializeEmailJS = () => {
  emailjs.init("YOUR_PUBLIC_KEY"); 
};