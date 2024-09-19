import React, { useContext } from "react";  // Ajout de useContext
import { styles } from "../styles";
import { Link } from "react-router-dom";
import { LanguageContext } from "./Language";  // Accès au contexte de langue

const Footer = () => {
    const { constants, language } = useContext(LanguageContext);  // Récupère la langue actuelle

    return (
        <footer
            className={`
            ${styles.paddingX} w-full flex
            items-center justify-center	 bottom-0 z-20 
            bg-primary
            border border-secondary
        `}
        >
            <div className="flex flex-col items-center mb-2">
                <div className="flex gap-3">
                    <Link
                        to="/privacy-policy"
                        className="text-secondary underline mt-2"
                        >
                        {language === "en" ? "Privacy policy" : "Politique de confidentialité"}
                    </Link>
                    <Link
                        to="/legal-notice"
                        className="text-secondary underline mt-2"
                        >
                        {language === "en" ? "Legal notice" : "Mentions légales"}

                    </Link>
                </div>
                <p>&copy; {language === "en" ? "2024 Gino's Portfolio. All rights reserved." : "2024 Portfolio de Gino. Tous droits réservés."}
                </p>
            </div>
        </footer>
    );
};

export default Footer;
