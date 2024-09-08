import React, { useState } from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import 'react-vertical-timeline-component/style.min.css';
import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <VerticalTimelineElement
            contentStyle={{ 
                background: '#0a0a0a', 
                color: '#e8e8e8', 
                border: '1px solid #e8e8e8',
                borderRadius: '0', 
                boxShadow: '0 0 40px rgba(252, 233, 225, 0.08)', 
                maxHeight: isExpanded ? 'none' : '510px',
                display: 'flex',
                flexDirection: 'column',
            }}
            iconStyle={{ 
                background: '#0a0a0a',
            }}
            date={''} // Cache la date à cet endroit
            style={{ 
                '--vertical-timeline-element-line-width': '1px',
            }}
        >
            {/* Date affichée au-dessus sur mobile */}
            <div className="block text-secondary text-[16px] mb-2">
                {experience.date}
            </div>
            <div>
                <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
                <p className="text-secondary text-[20px] font-semi-bold" style={{ margin: 0 }}>
                    {experience.company_name}
                </p>
            </div>
            <ul className="mt-5 list-disc ml-5 space-y-2 flex-grow">
                {experience.points.slice(0, isExpanded ? experience.points.length : 2).map((point, index) => (
                    <li 
                        key={`experience-point-${index}`}
                        className="text-white-100 text[18px] pl-1 tracking-wider"
                    >
                        {point}
                    </li>
                ))}
            </ul>
            <div className="flex justify-end sm:flex ">
                <button onClick={toggleExpand} className="text-white text-[24px] font-bold hover:scale-125">
                    {isExpanded ? '-' : '+'}
                </button>
            </div>

        </VerticalTimelineElement>
    );
};

const Experience = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>What have I done so far</p>
                <h2 className={styles.sectionHeadText}>Work Experience.</h2>
            </motion.div>
            <div className="mt-20 flex flex-col">
                <VerticalTimeline>
                    {experiences.map((experience, index) => (
                        <ExperienceCard key={index} experience={experience} />
                    ))}
                </VerticalTimeline>
            </div>
        </>
    );
};

export default SectionWrapper(Experience, "work");
