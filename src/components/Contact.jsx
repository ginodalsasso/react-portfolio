import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
    // déclare une variable de référence pour le formulaire
    const formRef = useRef();
    // déclare une variable d'état pour le formulaire
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });
    // déclare une variable d'état pour le chargement
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target; // Récupère le nom et la valeur de l'élément cible
        setForm({ ...form, [name]: value }); // Met à jour l'état du formulaire
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Empêche le rechargement de la page
        setLoading(true); // Met à jour l'état de chargement

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
                    setLoading(false); // Met à jour l'état de chargement
                    alert(
                        "Thank you. I will get back to you as soon as possible."
                    ); // Affiche une alerte

                    setForm({
                        name: "",
                        email: "",
                        message: "",
                    }); // Réinitialise le formulaire
                },
                (error) => {
                    setLoading(false); // Met à jour l'état de chargement
                    alert("Something went wrong. Please try again."); // Affiche une alerte
                    console.log(error.text); // Affiche l'erreur dans la console
                }
            );
    };

    return (
        <div className="xl:mt-12 overflow-hidden shadow-card_secondary">
            <motion.div
                variants={slideIn("left", "tween", 0.2, 1)} // Ajoute une animation de défilement
                className="flex-[0.75] bg-primary p-8 border"
            >
                <p className={styles.sectionSubText}>Get in touch</p>
                <h3 className={styles.sectionHeadText}>Contact</h3>

                <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className="mt-12 flex flex-col gap-8"
                >
                    <label className="flex flex-col">
                        <span className="text-white font-medium mb-4 ">
                            Your Name
                        </span>

                        <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="What's your name ?"
                            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white outline-none border font-medium"
                        />
                    </label>
                    <label className="flex flex-col">
                        <span className="text-white font-medium  mb-4 ">
                            Your Email
                        </span>

                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="What's your email ?"
                            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white outline-none border font-medium"
                        />
                    </label>
                    <label className="flex flex-col">
                        <span className="text-white font-medium  mb-4 ">
                            Your Message
                        </span>

                        <textarea
                            rows="7"
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            placeholder="What do you want to say ?"
                            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white outline-none border font-medium"
                        />
                    </label>
                    <button
                        type="submit"
                        className="bg-primary py-3 px-8 outline-none w-fit text-white font-bold shadow-md border shadow-primary hover:text-primary hover:bg-white"
                    >
                        {loading ? "Sending..." : "Send"}{" "}{/* Affiche le texte en fonction de l'état de chargement */}
                    </button>
                </form>
            </motion.div>
        </div>
    );
};

export default SectionWrapper(Contact, "contact");
