import {
    createContext,
    useContext,
    useEffect,
    useState,
    type ReactNode,
} from "react";
import { translations } from "@/i18n/translations";

export type Language = "es" | "en";

interface LanguageContextType {
    language: Language;
    setLanguage: (language: Language) => void;
    toggleLanguage: () => void;
    t: (typeof translations)[Language];
}

const LanguageContext = createContext<LanguageContextType | undefined>(
    undefined
);

export function LanguageProvider({
    children,
}: {
    children: ReactNode;
}) {
    const [language, setLanguage] = useState<Language>(() => {
        const storedLanguage = localStorage.getItem("language");
        return storedLanguage === "es" ? "es" : "en";
    });

    const toggleLanguage = () => {
        setLanguage((current) =>
            current === "en" ? "es" : "en"
        );
    };

    useEffect(() => {
        localStorage.setItem("language", language);

        document.documentElement.lang = language;
    }, [language]);

    const t = translations[language];

    return (
        <LanguageContext.Provider
            value={{
                language,
                setLanguage,
                toggleLanguage,
                t,
            }}
        >
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);

    if (!context) {
        throw new Error(
            "useLanguage must be used inside LanguageProvider"
        );
    }

    return context;
}