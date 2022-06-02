import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en.json";

const DEFAULT_LANGUAGE = "en";

const options = {
  interpolation: { escapeValue: false },
  resources: {
    en: {
      common: en,
    },
  },
  fallbackLng: DEFAULT_LANGUAGE,
  lng: DEFAULT_LANGUAGE,
  ns: ["common"],
  defaultNS: "common",
};

i18n.use(initReactI18next).init(options);
