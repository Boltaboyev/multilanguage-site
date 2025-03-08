import i18n from "i18next"
import {initReactI18next} from "react-i18next"
import LanguageDetector from "i18next-browser-languagedetector"

const resources = {
    en: {translation: translationEN},
    ru: {translation: translationRU},
    uz: {translation: translationUZ},
}

const savedLanguage = localStorage.getItem("language") || "eng"

i18n.use(LanguageDetector)
    .use(initReactI18next)
    .init({
        debug: false,
        lng: savedLanguage,
        fallbackLng: "en",
        keySeparator: false,
        interpolation: {
            escapeValue: false,
        },
        resources,
    })

export default i18n
