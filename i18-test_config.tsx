import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import index from "public/locales/en/index.json";

i18n.use(initReactI18next).init({
  lng: "en",
  fallbackLng: "en",

  // have a common namespace used around the full app
  ns: ["index"],
  defaultNS: "index",

  debug: true,

  interpolation: {
    escapeValue: false // not needed for react!!
  },

  resources: { en: { translationsNS: {} } }
});

export default i18n.addResourceBundle("en", "index", index, true);
