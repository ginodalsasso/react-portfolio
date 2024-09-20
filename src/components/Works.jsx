import { useContext } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { Tilt } from "react-tilt";
import { LanguageContext } from "./Language";  // Accès au contexte de langue

const ProjectCard = ({
    index,
    name,
    description,
    tags,
    image,
    source_code_link,
}) => {
    return (
        <motion.div
            variants={fadeIn("up", "spring", index * 0.1, 0.75)} 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="w-full sm:w-[360px]"
        >
            <Tilt
                options={{
                    max: 10,
                    scale: 1,
                    speed: 250,
                }}
                className="bg-primary p-3 sm:p-5 border w-full h-full shadow-card"
            >
                <div
                    onClick={() => window.open(source_code_link, "_blank")}
                    className="relative cursor-pointer"
                >
                    <div className="relative w-full h-[200px]">
                        <img
                            src={image}
                            alt={name}
                            className="w-full h-full object-cover overflow-hidden grayscale-[50%] transition duration-500 ease-in-out transform hover:grayscale-0 hover:scale-105"
                        />
                    </div>
                    <div className="black-gradient w-10 h-10 rounded-full flex justify-center items-center absolute top-[-12px] right-[-12px]">
                        <img
                            src={github}
                            alt="github"
                            className="w-full h-full object-contain"
                        />
                    </div>
                </div>
                <div className="mt-5">
                    <h3 className="text-white font-bold text-[20px] sm:text-[24px]">{name}</h3>
                    <p className="mt-2 text-secondary text-[14px] sm:text-[16px]">
                        {description}
                    </p>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                    {tags.map((tag) => (
                        <p
                            key={tag.name}
                            className={`text-[12px] sm:text-[14px] ${tag.color}`}
                        >
                            #{tag.name}
                        </p>
                    ))}
                </div>
            </Tilt>
        </motion.div>
    );
};

const Works = () => {
    const { constants } = useContext(LanguageContext);  // Accès aux données traduites

    // Vérifie si les données sont bien chargées
    if (!constants) {
        return <div>Loading...</div>;  // Ajoute un message de chargement ou d'erreur
    }

    return (
        <section id="projects" className="relative z-0">
            <motion.div
                variants={textVariant()}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
            >
                <p className={styles.sectionSubText}>{constants.headers[2].title}</p>
                <h2 className={styles.sectionHeadText}>{constants.headers[2].subtitle}</h2>
            </motion.div>

            <motion.div
                variants={fadeIn("", "", 0.1, 1)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
            >
                <p className="mt-4 text-secondary text-[20px] max-w-3xl leading-[30px]">
                    {constants.headers[2].description}
                </p>
            </motion.div>

            <div className="mt-10 flex flex-wrap justify-center gap-7">
                {constants.projects.map((project, index) => (
                    <ProjectCard
                        key={`project-${index}`}
                        index={index}
                        {...project}
                    />
                ))}
            </div>
        </section>
    );
};

export default SectionWrapper(Works, "projects");
