import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";



const Tech = () => {
    return (
        <section id="Techs" className="relative z-0">
            <motion.div
                variants={textVariant()}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
            >
                <p className={styles.sectionSubText}>Grab it</p>
                <h2 className={styles.sectionHeadText}>Techs.</h2>
            </motion.div>
            <div className="flex flex-row flex-wrap justify-center gap-10">
                {technologies.map((technology) => (
                    <div className="w-28 h-28" key={technology.name}>
                        <BallCanvas icon={technology.icon} />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default SectionWrapper(Tech, "");
