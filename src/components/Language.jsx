import React, { createContext, useState, useEffect } from "react";
import * as constantsEn from "../constants/constants_en";
import * as constantsFr from "../constants/constants_fr";

// Crée un contexte
export const LanguageContext = createContext();

// Composant qui va fournir la langue et la fonction pour changer la langue
export const LanguageProvider = ({ children }) => {
    // Récupère la langue depuis le localStorage ou utilise en par défaut
    const [language, setLanguage] = useState(
        localStorage.getItem("language") || "en"
    );

    // Sélection des constantes en fonction de la langue
    const constants = language === "en" ? constantsEn : constantsFr;

    // Fonction pour changer la langue
    const toggleLanguage = () => {
        const newLanguage = language === "en" ? "fr" : "en";
        setLanguage(newLanguage);
        localStorage.setItem("language", newLanguage);  // Sauvegarde la langue dans le localStorage
    };

    useEffect(() => {
        // Vérifie si une langue est déjà définie dans le localStorage lors du montage
        const savedLanguage = localStorage.getItem("language");
        if (savedLanguage) {
            setLanguage(savedLanguage);
        }
    }, []); // Ne s'exécute qu'au montage

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage, constants }}>
            {children}
        </LanguageContext.Provider>
    );
};
