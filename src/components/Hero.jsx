import { motion } from "framer-motion";
import { useContext } from "react";  // Import useContext
import { styles } from "../styles";
import { AbstractShapeCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import resume from "../assets/resume.pdf";
import { LanguageContext } from "./Language";  // Import du LanguageContext


const Hero = () => {
    const { language } = useContext(LanguageContext);  // Accéder à la langue actuelle

    return (
        // Section présentation
        <section className="relative w-full h-95vh mx-auto">
            <div className="flex justify-between items-center">      
                <div
                    className="absolute inset-0 top-[40px] sm:top-[40px] max-w-7xl mx-auto flex flex-row items-start gap-5 z-10" 
                >
                    <div>
                        <h1 className={`${styles.heroHeadText} text-white`}>
                            {language === "en" ? "Hi !" : "Hello !"}
                            <br />
                            {language === "en" ? "I am Gino." : " Moi c'est Gino."}
                        </h1>
                        <p className={`${styles.heroSubText} text-white`}>
                            {language === "en" 
                                ? "I develop web applications" 
                                : "Je développe des applications web"}
                                <br />
                            {language === "en" 
                            ? "and websites" 
                            : "et des sites internet"}
                        </p>
                        {/* Lien pour télécharger le CV */}
                        <a
                            href={resume}
                            className="relative inline-block mt-6 lg:mt-8 px-4 py-2 font-bold border-2 border-black bg-white text-black text-[20px] transition-all duration-300 ease-in-out 
                            hover:text-white hover:border-white hover:shadow-[inset_240px_0_0_0_#0a0a0a]"
                            download="resume.pdf"
                        >
                            {language === "en" ? "Download CV" : "Télécharger mon CV"}
                        </a>
                    </div>
                </div>
            </div>

            {/* Ajoute le canvas */}
            <AbstractShapeCanvas />

            <div className="absolute bottom-12 xs:bottom-10 sm:bottom-20 w-full flex justify-center items-center z-20">
                <a href="#about">
                    <div className="w-[35px] h-[64px] border rounded-full bg-primary flex justify-center items-start p-2">
                        {/* Ajoute la flèche de défilement */}
                        <motion.div
                            animate={{
                                y: [0, 30, 0],
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                repeatType: "loop",
                            }}
                            className="w-3 h-3 rounded-full bg-secondary"
                        />
                    </div>
                </a>
            </div>
        </section>
    );
};

export default SectionWrapper(Hero, "");
