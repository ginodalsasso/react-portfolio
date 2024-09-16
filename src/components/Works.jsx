import { motion } from "framer-motion";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { projects } from "../constants";
import { Tilt } from "react-tilt";
import resume from "../assets/resume.pdf";

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
            variants={fadeIn("up", "spring", index * 0.5, 0.75)} // 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="w-full sm:w-[360px]"
        >
            <Tilt
                options={{
                    max: 45,
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
                            className="w-full h-full object-cover grayscale-[50%]"
                        />
                    </div>
                    <div className="black-gradient w-10 h-10 rounded-full flex justify-center items-center absolute top-[-10px] right-[-10px]">
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
    return (
        <section id="projects" className="relative z-0">
            <motion.div
                variants={textVariant()}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
            >
                <p className={styles.sectionSubText}>My work</p>
                <h2 className={styles.sectionHeadText}>Projects.</h2>
                <a
                    href={resume}
                    className="inline-block mt-4 font-bold bg-white px-4 py-2 text-primary hover:bg-gray-200 transition-colors"
                    download="resume.pdf"
                >
                    Download CV
                </a>
            </motion.div>

            <motion.div
                variants={fadeIn("", "", 0.1, 1)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
            >
                <p>
                    From shaping wood into masterpieces with chisels and
                    hammers to crafting digital wonders with code, I
                    transitioned from a skilled carpenter to a passionate
                    developer, seamlessly blending the artistry of both
                    worlds. And now, here are my projects so far.
                </p>
            </motion.div>

            <div className="mt-10 flex flex-wrap justify-center gap-7">
                {projects.map((project, index) => (
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