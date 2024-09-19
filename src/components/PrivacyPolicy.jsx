import React, { useContext } from "react";
import { LanguageContext } from "./Language";  // Import du contexte de langue

const PrivacyPolicy = () => {
    const { language } = useContext(LanguageContext);  // Récupérer la langue actuelle

    return (
        <div className="container mx-auto mt-[50px] p-8">
            <h1 className="text-3xl font-bold mb-6">
                {language === "en" ? "Privacy Policy" : "Politique de Confidentialité"}
            </h1>

            <p className="mb-4">
                {language === "en" 
                    ? "Your privacy is important to us. This privacy policy document outlines the types of personal information that is received and collected and how it is used."
                    : "Votre vie privée est importante pour nous. Ce document de politique de confidentialité décrit les types d'informations personnelles qui sont reçues et collectées, ainsi que la manière dont elles sont utilisées."}
            </p>

            <h2 className="text-2xl font-semibold mb-4">
                {language === "en" ? "Information We Collect" : "Informations que nous collectons"}
            </h2>

            <p className="mb-4">
                {language === "en" 
                    ? "We do not collect any personal information without your consent. The only information we collect is what you voluntarily provide through our contact form. This includes:"
                    : "Nous ne collectons aucune information personnelle sans votre consentement. Les seules informations que nous collectons sont celles que vous fournissez volontairement via notre formulaire de contact. Cela inclut :"}
            </p>

            <ul className="list-disc list-inside mb-4">
                <li>{language === "en" ? "Your name" : "Votre nom"}</li>
                <li>{language === "en" ? "Your email" : "Votre email"}</li>
                <li>{language === "en" ? "Your message" : "Votre message"}</li>
            </ul>


            <h2 className="text-2xl font-semibold mb-4">
                {language === "en" ? "How We Use Collected Information" : "Comment nous utilisons les informations collectées"}
            </h2>

            <p className="mb-4">
                {language === "en"
                    ? "The information you provide through the contact form is used solely to respond to your inquiry. This information is not stored in a database and is used only to reply to you via email."
                    : "Les informations que vous fournissez via le formulaire de contact sont utilisées uniquement pour répondre à votre demande. Ces informations ne sont pas stockées dans une base de données et sont uniquement utilisées pour vous répondre par email."}
            </p>

            <h2 className="text-2xl font-semibold mb-4">
                {language === "en" ? "Sharing Your Personal Information" : "Partage de vos informations personnelles"}
            </h2>

            <p className="mb-4">
                {language === "en"
                    ? "We do not share, sell, or rent any of your personal information to third parties. The information you provide to us is strictly confidential."
                    : "Nous ne partageons, ne vendons, ni ne louons aucune de vos informations personnelles à des tiers. Les informations que vous nous fournissez sont strictement confidentielles."}
            </p>

            <h2 className="text-2xl font-semibold mb-4">
                {language === "en" ? "Information Security" : "Sécurité des informations"}
            </h2>

            <p className="mb-4">
                {language === "en"
                    ? "We take measures to ensure the security of your personal information. However, since information transmission over the internet is never completely secure, we cannot guarantee absolute security of the information transmitted through our contact form."
                    : "Nous prenons des mesures pour assurer la sécurité de vos informations personnelles. Cependant, la transmission d'informations sur Internet n'étant jamais totalement sécurisée, nous ne pouvons pas garantir une sécurité absolue des informations transmises via notre formulaire de contact."}
            </p>

            <h2 className="text-2xl font-semibold mb-4">
                {language === "en" ? "Cookies" : "Cookies"}
            </h2>

            <p className="mb-4">
                {language === "en"
                    ? "Our website does not use cookies to collect visitor information. We do not implement any tracking or personalization technology based on cookies."
                    : "Notre site web n'utilise pas de cookies pour collecter des informations sur les visiteurs. Nous n'implémentons aucune technologie de suivi ou de personnalisation basée sur des cookies."}
            </p>

            <h2 className="text-2xl font-semibold mb-4">
                {language === "en" ? "User Rights" : "Droits des utilisateurs"}
            </h2>

            <p className="mb-4">
                {language === "en"
                    ? "You have the right to contact us to:"
                    : "Vous avez le droit de nous contacter pour :"}
            </p>

            <ul className="list-disc list-inside mb-4">
                <li>{language === "en" ? "Rectify or delete your personal information" : "Rectifier ou supprimer vos informations personnelles"}</li>
                <li>{language === "en" ? "Obtain a copy of the personal information you provided to us" : "Obtenir une copie des informations personnelles que vous nous avez fournies"}</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4">
                {language === "en" ? "Changes to This Privacy Policy" : "Modifications de cette politique de confidentialité"}
            </h2>

            <p className="mb-4">
                {language === "en"
                    ? "We reserve the right to modify this privacy policy at any time. Any changes will be posted on this page."
                    : "Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. Toute modification sera publiée sur cette page."}
            </p>

            <h2 className="text-2xl font-semibold mb-4">
                {language === "en" ? "Contact" : "Contact"}
            </h2>

            <p className="mb-4">
                {language === "en"
                    ? "If you have any questions about this Privacy Policy, please contact us at the following email address:"
                    : "Si vous avez des questions concernant cette politique de confidentialité, veuillez nous contacter à l'adresse email suivante :"}{" "}
                <a href="mailto:dalsasso.gino@gmail.com">dalsasso.gino@gmail.com</a>.
            </p>
        </div>
    );
};

export default PrivacyPolicy;
