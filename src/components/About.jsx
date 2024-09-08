import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { Tilt } from "react-tilt";
// import { div } from "three/examples/jsm/nodes/Nodes.js";

// Carte des services
const ServiceCard = ({ index, title, icon }) => {
    return (
        <Tilt className="xs:w-[250px] w-full">
            <motion.div
                variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}   
                className="w-full  shadow-card"
            >
                <div options={{
                    max: 45,
                    scale: 1,
                    speed: 450
                }}
                className="bg-primary border py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
                >
                    <img src={icon} alt={title} className="w-16 h-16 object-contain"/>
                    <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>

                </div>
            </motion.div>
        </Tilt>
    )
}

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
                className="mt-4 text-secondary text-[20px] max-w-3x1 leading-[30px] w-9/12		"
            >
                Passionate about crafting digital solutions. Currently
                undergoing training to become a proficient developer, I'm
                dedicated to acquiring new skills and taking on stimulating
                challenges.
            </motion.p>
            <div className="mt-20 flex flex-wrap justify-center	 gap-10">
                {services.map((service, index) => (
                    <ServiceCard key={service.title} index={index} {...service} />  
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(About, "about");