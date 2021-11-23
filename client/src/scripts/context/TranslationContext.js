import React, { useState } from "react";
import translations from "../translations/translations.json";

const TranslationContext = React.createContext({});

function TranslationProvider({ children }) {
    // If it is the first time or if the user dosn't choose the language, english is the default
    const language = localStorage.language ? translations[localStorage.language] : translations.english;

    const [translation, setTranslation] = useState(language);

    return (
        <TranslationContext.Provider value={[translation, setTranslation]}>
            {children}
        </TranslationContext.Provider>
    );
}

export { TranslationContext, TranslationProvider };

