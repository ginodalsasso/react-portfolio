// import Titl from 'react-titl'
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { projects } from "../constants";
import { Tilt } from "react-tilt";

const ProjectCard = ({
    index,
    name,
    description,
    tags,
    image,
    source_code_link,
}) => {
    return (
        <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
            <Tilt
                options={{
                    max: 45,
                    scale: 1,
                    speed: 450,
                }}
                className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
            >
                <div className="relative w-full h-[230px]">
                    <img
                        src={image}
                        alt={name}
                        className="w-full h-full object-cover rounded-2xl"
                    />
                </div>
                <div className="absolute inset-0 flex justify-end m-4 card-img_hover">
                    <div
                        // Ouvre le lien du code source dans un nouvel onglet
                        onClick={() => window.open(source_code_link, "_blank")}
                        className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:scale-110	"
                    >
                        <img
                            src={github}
                            alt="github"
                            className="w-full h-full object-contain"
                        />
                    </div>
                </div>
                <div className="mt-5">
                    <h3 className="text-white font-bold text-[24px]">{name}</h3>
                    <p className="mt-2 text-secondary text-[14px]">{description}</p>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                    {/* Ajoute des tags de projet */}
                    {tags.map((tag) => (
                        <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                            #{tag.name} 
                        </p>
                    ))}

                </div>
            </Tilt>
        </motion.div>
    );
};

const Works = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>My work</p>
                <h2 className={styles.sectionHeadText}>Projects.</h2>
            </motion.div>
            <div className="w-full flex">
                <motion.p
                    variants={fadeIn("", "", 0.1, 1)} // Ajoute une animation de fondu
                    className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
                >
                    From shaping wood into masterpieces with chisels and hammers
                    to crafting digital wonders with code, I transitioned from a
                    skilled carpenter to a passionate developer, seamlessly
                    blending the artistry of both worlds. And now, here are my
                    projects so far.
                </motion.p>
            </div>
            <div className="mt-20 flex flex-wrap gap-7">
                {/* Ajoute un composant de carte de projet */}
                {projects.map((project, index) => (
                    <ProjectCard
                        key={`project-${index}`}
                        index={index}
                        {...project}
                    />
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(Works, "");
