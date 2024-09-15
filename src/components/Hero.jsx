import { motion } from "framer-motion";
import { styles } from "../styles";
import { AbstractShapeCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import resume from "../assets/resume.pdf";

const Hero = () => {

    return (
        // Section présentation
        <section className="relative w-full h-95vh mx-auto">
            <div
                className="absolute inset-0 top-[40px] sm:top-[40px] max-w-7xl mx-auto flex flex-row items-start gap-5 px-6 z-10" 
            >
                <div>
                    <h1 className={`${styles.heroHeadText} text-white`}>
                        Hi, I am Gino
                    </h1>
                    <p className={`${styles.heroSubText} mt-2 text-white-100`}>
                        I develop web applications{" "}
                        <br className="sm:block hidden" />
                        and websites
                    </p>
                </div>
            </div>

            {/* Ajoute le canvas */}
            <AbstractShapeCanvas />

            <div className="absolute bottom-12 xs:bottom-10 sm:bottom-20 w-full flex justify-center items-center z-20">
            <a href="#about">
                    <div className="w-[35px] h-[64px] border border-secondary bg-primary flex justify-center items-start p-2">
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
                            className="w-3 h-3 bg-secondary"
                        />
                    </div>
                </a>
            </div>
        </section>
    );
};

// Export the Hero component wrapped with SectionWrapper HOC
export default SectionWrapper(Hero, "");
