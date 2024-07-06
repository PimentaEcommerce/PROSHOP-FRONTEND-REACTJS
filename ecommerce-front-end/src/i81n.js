// src/i18n.js
import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpBackend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

i18n
  .use(HttpBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: ["pt-BR", "en"], // Adicione 'en' para garantir o suporte ao inglês
    fallbackLng: "pt-BR", // Idioma padrão caso o idioma detectado não esteja disponível
    detection: {
      order: ["cookie", "htmlTag", "localStorage", "path", "subdomain"],
      caches: ["cookie"],
    },
    backend: {
      loadPath: "/locales/{{lng}}.json", // Caminho para os arquivos de tradução
    },
  });

export default i18n;
