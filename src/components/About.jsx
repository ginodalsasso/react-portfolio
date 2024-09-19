import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";


// Carte des services
const ServiceCard = ({ index, title }) => {
    return (
        // Ajoute un effet de basculement à la carte
        <div className="xs:w-[190px] w-full">
            {/* // Ajoute un effet de fondu à la carte */}
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
    return (
        <>
            {/* Section présentation */}
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>Introduction</p>
                <h2 className={styles.sectionHeadText}>Overview.</h2>
            </motion.div>
            <motion.p
                variants={fadeIn("", "", 0.1, 1)}
                className="mt-4 text-secondary text-[20px] max-w-3xl leading-[30px] "
                >
                Passionate about crafting digital solutions. Currently
                undergoing training to become a proficient developer, I'm
                dedicated to acquiring new skills and taking on stimulating
                challenges. <br />
                Here is a list of the soft skills I have acquired along my
                journey :
            </motion.p>
            <div className="mt-10 flex flex-wrap justify-center gap-10">
                {services.map((service, index) => (
                    <ServiceCard
                        key={service.title}
                        index={index}
                        {...service}
                    />
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(About, "about");
