import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  lng: "es",
  debug: true,
  resources: {
    en: {
      translation: {
        key: "hello world",
      },
    },
  },
});

export default i18n;
