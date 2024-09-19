import React, { useContext } from "react";
import { motion } from "framer-motion";
import { LanguageContext } from "./Language";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

// Carte des services
const ServiceCard = ({ index, title }) => {
    return (
        <div className="xs:w-[190px] w-full">
            <motion.div
                variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
                className="w-full  shadow-card"
            >
                <div className="bg-primary border py-5 px-2 min-h-[90px] flex justify-evenly items-center flex-col">
                    <h3 className="text-white text-[20px] font-bold text-center">
                        {title}
                    </h3>
                </div>
            </motion.div>
        </div>
    );
};

const About = () => {
    const { language, constants } = useContext(LanguageContext);  // Accès au contexte

    return (
        <>
            {/* Section présentation */}
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>{constants.headers[0].title}</p>
                <h2 className={styles.sectionHeadText}>{constants.headers[0].subtitle}</h2>
            </motion.div>

            <motion.p
                variants={fadeIn("", "", 0.1, 1)}
                className="mt-4 text-secondary text-[20px] max-w-3xl leading-[30px]"
            >
                {constants.headers[0].description}
            </motion.p>

            <div className="mt-10 flex flex-wrap justify-center gap-10">
                {constants.services.map((service, index) => (
                    <ServiceCard key={service.title} index={index} {...service} />
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(About, "about");
