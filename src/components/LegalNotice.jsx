import React, { useContext } from "react";
import { LanguageContext } from "./Language";  // Accès au contexte de langue

const LegalNotice = () => {
    const { language } = useContext(LanguageContext);  // Récupère la langue actuelle

    return (
        <div className="container mx-auto p-8">
            <h1 className="text-3xl font-bold mt-10 mb-6">
                {language === "en" ? "Legal Notice" : "Mentions Légales"}
            </h1>
            
            <h2 className="text-2xl font-semibold mb-4">
                {language === "en" ? "Website Publisher" : "Éditeur du site"}
            </h2>
            <p className="mb-4">
                <strong>{language === "en" ? "Website Name:" : "Nom du site:"}</strong> gino-dalsasso <br />
                <strong>{language === "en" ? "Publisher:" : "Responsable de la publication:"}</strong> Gino Dalsasso <br />
                <strong>{language === "en" ? "Email:" : "Email :"}</strong> <a href="mailto:dalsasso.gino@gmail.com">dalsasso.gino@gmail.com</a> <br />
            </p>

            <h2 className="text-2xl font-semibold mb-4">
                {language === "en" ? "Hosting" : "Hébergement"}
            </h2>
            <p className="mb-4">
                <strong>{language === "en" ? "Hosting Provider:" : "Hébergeur :"}</strong> OVH Cloud <br />
                <strong>{language === "en" ? "Hosting Provider Address:" : "Adresse de l'hébergeur :"}</strong> 2 Rue Kellermann, 59100 Roubaix, France <br />
                <strong>{language === "en" ? "Hosting Provider Phone:" : "Téléphone de l'hébergeur :"}</strong> +33 9 72 10 10 07
            </p>

            <h2 className="text-2xl font-semibold mb-4">
                {language === "en" ? "Limitation of Liability" : "Limitation de responsabilité"}
            </h2>
            <p className="mb-4">
                {language === "en" 
                    ? "The information on this site is as accurate as possible and is periodically updated, but it may contain inaccuracies or omissions. If you notice any errors, please report them by email, describing the issue as precisely as possible."
                    : "Les informations présentes sur ce site sont aussi précises que possible et sont périodiquement mises à jour, mais elles peuvent contenir des inexactitudes ou des omissions. Si vous constatez une erreur, veuillez nous la signaler par email en décrivant le problème aussi précisément que possible."}
            </p>

            <h2 className="text-2xl font-semibold mb-4">
                {language === "en" ? "Hyperlinks" : "Liens hypertextes"}
            </h2>
            <p className="mb-4">
                {language === "en"
                    ? "This website may contain hyperlinks to other websites. We do not have control over the content of external sites and disclaim any responsibility for their content."
                    : "Ce site peut contenir des liens hypertextes vers d'autres sites web. Nous n'avons aucun contrôle sur le contenu de ces sites externes et déclinons toute responsabilité à leur égard."}
            </p>

            <h2 className="text-2xl font-semibold mb-4">
                {language === "en" ? "Governing Law" : "Droit applicable"}
            </h2>
            <p className="mb-4">
                {language === "en"
                    ? "This site and its legal notices are subject to French law. In the event of a dispute, and after an attempt to reach an amicable resolution, the courts of Strasbourg shall have exclusive jurisdiction."
                    : "Ce site et ses mentions légales sont soumis au droit français. En cas de litige, et après tentative de résolution à l'amiable, les tribunaux de Strasbourg auront compétence exclusive."
                }
            </p>

            <h2 className="text-2xl font-semibold mb-4">
                {language === "en" ? "Contact" : "Contact"}
            </h2>
            <p className="mb-4">
                {language === "en"
                    ? "For any questions regarding the legal notices, please contact us at the following email address: "
                    : "Pour toute question concernant les mentions légales, vous pouvez nous contacter à l'adresse email suivante : "}
                <a href="mailto:dalsasso.gino@gmail.com">dalsasso.gino@gmail.com</a>
            </p>
        </div>
    );
};

export default LegalNotice;
