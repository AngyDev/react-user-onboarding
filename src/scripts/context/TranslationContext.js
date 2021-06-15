import React, { useState } from "react";
import translations from "../translations/translations.json";

const TranslationContext = React.createContext({});

function TranslationProvider({ children }) {
    const [translation, setTranslation] = useState(translations.english);

    return (
        <TranslationContext.Provider value={[translation, setTranslation]}>
            {children}
        </TranslationContext.Provider>
    );
}

export { TranslationContext, TranslationProvider };

