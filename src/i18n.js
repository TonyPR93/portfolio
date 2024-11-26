import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en.json";
import fr from "./locales/fr.json";

// Initialisation d'i18n
i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    fr: { translation: fr },
  },
  lng: "en", // Langue par défaut
  fallbackLng: "en", // Langue de secours
  interpolation: { escapeValue: false }, // Pas d'échappement nécessaire pour React
});

export default i18n;
