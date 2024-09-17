import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";

import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import ReCAPTCHA from "react-google-recaptcha"; // Import ReCAPTCHA
import resume from "../assets/resume.pdf";

// Composant Contact
const Contact = () => {
    const formRef = useRef();
    const [form, setForm] = useState({
        // Initialise le formulaire avec des valeurs par défaut
        name: "",
        email: "",
        message: "",
        consent: false,
    });
    // Initialise l'état des erreurs avec un objet vide
    const [errors, setErrors] = useState({});
    // Initialise l'état de chargement à false
    const [loading, setLoading] = useState(false);
    // Initialise l'état captchaVerified à false
    const [captchaVerified, setCaptchaVerified] = useState(false);

    // Fonction de validation du formulaire
    const validateForm = () => {
        const newErrors = {};

        // Validate name
        if (form.name.length < 3) {
            newErrors.name = "Name must be at least 3 characters long.";
        } else if (form.name.length > 255) {
            newErrors.name = "Name cannot exceed 255 characters.";
        }

        // Validate email using regex
        const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
        if (!emailRegex.test(form.email)) {
            newErrors.email = "Please enter a valid email address.";
        }

        // Validate message
        if (form.message.length < 10) {
            newErrors.message = "Message must be at least 10 characters long.";
        } else if (form.message.length > 2000) {
            newErrors.message = "Message cannot exceed 2000 characters.";
        }

        // Validate consent
        if (!form.consent) {
            newErrors.consent = "You must accept the privacy policy.";
        }

        setErrors(newErrors);
        // Retourne true si le formulaire est valide
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        // Récupère les valeurs de l'événement
        const { name, value, type, checked } = e.target;
        // Met à jour le formulaire avec les nouvelles valeurs
        setForm({ ...form, [name]: type === "checkbox" ? checked : value });
    };

    const handleCaptchaChange = (value) => {
        setCaptchaVerified(!!value); // Met à jour l'état captchaVerified en fonction de la valeur de la case cochée
    };

    // Traitement du formulaire
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        if (!captchaVerified) {
            alert("Please verify that you are not a robot.");
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
                    alert(
                        "Thank you. I will get back to you as soon as possible."
                    );
                    setForm({
                        name: "",
                        email: "",
                        message: "",
                        consent: false,
                    });
                    setCaptchaVerified(false);
                    setErrors({});
                },
                (error) => {
                    setLoading(false);
                    alert("Something went wrong. Please try again.");
                    console.log(error.text);
                }
            );
    };

    return (
        <div>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>Get in touch</p>
                <h3 className={styles.sectionHeadText}>Contact.</h3>
            </motion.div>
            <div className="mt-10 overflow-hidden shadow-card_secondary">
                <div className="flex-[0.75] bg-primary p-4 border">
                    <form ref={formRef} onSubmit={handleSubmit} className=" flex flex-col gap-8">
                        <label className="flex flex-col">
                            <span className="text-white font-medium mb-4">
                                Your Name
                            </span>
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                placeholder="What's your name ?"
                                className="bg-tertiary py-4 px-6 text-white  font-medium"
                                />
                            {errors.name && (
                                <span className="text-red-500 mt-2">
                                    {errors.name}
                                </span>
                            )}
                        </label>
                        <label className="flex flex-col">
                            <span className="text-white font-medium mb-4">
                                Your Email
                            </span>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                placeholder="What's your email ?"
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
                                Your Message
                            </span>
                            <textarea
                                rows="7"
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                placeholder="What do you want to say ?"
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
                                    I agree to the{" "}
                                    <a
                                        href="/privacy-policy"
                                        className="text-secondary underline"
                                    >
                                        privacy policy
                                    </a>
                                </span>
                            </div>
                            {/* Affiche un message d'erreur sous le texte du consentement */}
                            {errors.consent && (
                                <span className="text-red-500 mt-2">
                                    {errors.consent}
                                </span>
                            )}
                        </label>

                        <ReCAPTCHA
                            sitekey="RECAPTCHA_SITE_KEY"
                            onChange={handleCaptchaChange}
                        />

                        <button
                            type="submit"
                            className="bg-primary py-3 px-8 outline-none w-fit text-white font-bold shadow-md border shadow-primary hover:text-primary hover:bg-white"
                        >
                            {/* // Affiche "Sending..." si le formulaire est en cours de traitement, sinon "Send" */}
                            {loading ? "Sending..." : "Send"}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SectionWrapper(Contact, "contact");
