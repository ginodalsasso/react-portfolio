import { useState, useRef, useContext } from "react";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { LanguageContext } from "./Language";  // Accès au contexte de langue


const Contact = () => {
    const { constants, language } = useContext(LanguageContext);  // Récupère la langue actuelle

    const formRef = useRef();
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
        consent: false,
    });
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    const validateForm = () => {
        const newErrors = {};

        if (form.name.length < 3) {
            newErrors.name = language === "en" 
                ? "Name must be at least 3 characters long." 
                : "Le nom doit contenir au moins 3 caractères.";
        } else if (form.name.length > 255) {
            newErrors.name = language === "en" 
                ? "Name cannot exceed 255 characters." 
                : "Le nom ne peut pas dépasser 255 caractères.";
        }

        const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
        if (!emailRegex.test(form.email)) {
            newErrors.email = language === "en" 
                ? "Please enter a valid email address." 
                : "Veuillez entrer une adresse email valide.";
        }

        if (form.message.length < 10) {
            newErrors.message = language === "en" 
                ? "Message must be at least 10 characters long." 
                : "Le message doit contenir au moins 10 caractères.";
        } else if (form.message.length > 2000) {
            newErrors.message = language === "en" 
                ? "Message cannot exceed 2000 characters." 
                : "Le message ne peut pas dépasser 2000 caractères.";
        }

        if (!form.consent) {
            newErrors.consent = language === "en" 
                ? "You must accept the privacy policy." 
                : "Vous devez accepter la politique de confidentialité.";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setForm({ ...form, [name]: type === "checkbox" ? checked : value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setLoading(true);

        emailjs
            .send(
                "service_y5q37hc",
                "template_ev6jmbs",
                {
                    from_name: form.name,
                    to_name: "Gino Dalsasso",
                    from_email: form.email,
                    to_email: "dalsasso.gino@gmail.com",
                    message: form.message,
                },
                "G9_4IB79769fRoa-Q"
            )
            .then(
                () => {
                    setLoading(false);
                    alert(language === "en" 
                        ? "Thank you. I will get back to you as soon as possible." 
                        : "Merci. Je vous recontacterai dès que possible.");
                    setForm({
                        name: "",
                        email: "",
                        message: "",
                        consent: false,
                    });
                    setErrors({});
                },
                (error) => {
                    setLoading(false);
                    alert(language === "en" 
                        ? "Something went wrong. Please try again." 
                        : "Une erreur est survenue. Veuillez réessayer.");
                    console.log(error.text);
                }
            );
    };

    return (
        <div>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>
                    {constants.headers[3].title}
                </p>
                <h3 className={styles.sectionHeadText}>
                    {constants.headers[3].subtitle}
                </h3>
            </motion.div>
            <div className="mt-6 overflow-hidden shadow-card_secondary">
                <div className="flex-[0.75] bg-primary p-4 border">
                    <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-8">
                        <label className="flex flex-col">
                            <span className="text-white font-medium mb-4">
                                {language === "en" ? "Name" : "Nom"}                            
                            </span>
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                placeholder={language === "en" ? "What is your name ?" : "Quel est votre nom ?"}
                                className="bg-tertiary py-4 px-6 text-white font-medium"
                            />
                            {errors.name && (
                                <span className="text-red-500 mt-2">
                                    {errors.name}
                                </span>
                            )}
                        </label>
                        <label className="flex flex-col">
                            <span className="text-white font-medium mb-4">
                                {language === "en" ? "Email address" : "Adresse email"}                            
                            </span>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                placeholder={language === "en" ? "What is your email address ?" : "Quel est votre email ?"}
                                className="bg-tertiary py-4 px-6 text-white font-medium"
                            />
                            {errors.email && (
                                <span className="text-red-500 mt-2">
                                    {errors.email}
                                </span>
                            )}
                        </label>
                        <label className="flex flex-col">
                            <span className="text-white font-medium mb-4">
                                {language === "en" ? "Message" : "Message"}                            
                            </span>
                            <textarea
                                rows="7"
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                placeholder={language === "en" ? "What would you say ?" : "Que voulez-vous dire ?"}
                                className="bg-tertiary py-4 px-6 text-white font-medium"
                            />
                            {errors.message && (
                                <span className="text-red-500 mt-2">
                                    {errors.message}
                                </span>
                            )}
                        </label>

                        <label className="flex flex-col items-start">
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    name="consent"
                                    checked={form.consent}
                                    onChange={handleChange}
                                    className="mr-2"
                                />
                            <span className="text-white">
                                {language === "en" ? "I accept the " : "J'accepte la "}
                                <a
                                    href="/privacy-policy"
                                    className="text-secondary underline"
                                >
                                    {language === "en" ? "privacy policy" : "politique de confidentialité"}
                                </a>
                            </span>
                            </div>
                            {errors.consent && (
                                <span className="text-red-500 mt-2">
                                    {errors.consent}
                                </span>
                            )}
                        </label>
                        <button
                            type="submit"
                            className="bg-primary py-3 px-8 outline-none w-fit text-white font-bold shadow-md border shadow-primary hover:text-primary hover:bg-white"
                        >
                            {/* Texte du bouton dépendant de la langue */}
                            {loading 
                                ? (language === "en" ? "Sending..." : "Envoi en cours...") 
                                : (language === "en" ? "Send" : "Envoyer")}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SectionWrapper(Contact, "contact");