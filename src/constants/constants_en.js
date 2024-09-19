import {
    javascript,
    php,
    html,
    css,
    reactjs,
    symfony,
    tailwind,
    jquery,
    mongodb,
    git,
    figma,
    docker,
    tuttopasta,
    session,
    forum,
    wikifilm,
    iller,
    mysql,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "projects",
        title: "Projects",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const headers = [
    {
        title: "Introduction",
        subtitle: "Overview.",
        description: "Passionate about crafting digital solutions. Currently undergoing training to become a proficient developer, I'm dedicated to acquiring new skills and taking on stimulating challenges. Here is a list of the soft skills I have acquired along my journey :"
    },
    {
        title: "What have I done so far",
        subtitle: "Work Experience.",
    },
    {
        title: "My Work",
        subtitle: "Projects.",
        description: "From shaping wood into masterpieces with chisels and hammers to crafting digital wonders with code, I transitioned from a skilled carpenter to a passionate developer, seamlessly blending the artistry of both worlds. And now, here are my projects so far."
    },
    {
        title: "Get in touch",
        subtitle: "Contact.",
    },
];

const services = [
    {
        title: "Adaptability",
    },
    {
        title: "Autonomy ",
    },
    {
        title: "Work Ethic",
    },
    {
        title: "Curious",
    },
    {
        title: "Teamwork",
    }
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "PHP",
        icon: php,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Symfony",
        icon: symfony,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Jquery",
        icon: jquery,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "MySQL",
        icon: mysql,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
    {
        name: "docker",
        icon: docker,
    },
];

const experiences = [
    {
        title: "Software Development Intern",
        company_name: "Iller Distribution",
        iconBg: "#383E56",
        date: "June 2024 - July 2024",
        points: [
            "Designing and developing a web application for order management tailored for professional restaurateurs.",
            "Managing both front-end and back-end development, ensuring seamless functionality and user experience.",
            "Collaborating closely with a partner to ensure cohesive development across all aspects of the application.",
            "Working in close partnership with the internship supervisor to integrate the application with the existing database.",
            "Implementing best practices for code quality, ensuring the application is maintainable and scalable."
        ],
    },
    {
        title: "Carpentry Experience and Skill Development",
        company_name: "Multiple Companies",
        iconBg: "#E6DEDD",
        date: "Sept 2008 - Feb 2024",
        points: [
            "Gained 15 years of experience in carpentry, honing precision and attention to detail.",
            "Developed strong adaptability skills through diverse projects and challenges.",
            "Enhanced teamwork abilities by collaborating closely with other craftsmen and professionals.",
            "Cultivated patience and perseverance, essential traits for delivering high-quality work.",
            "Gained international experience by practicing carpentry in Australia for nearly one year and half, further broadening my skills and cultural understanding."
        ],
    },
    {
        title: "International Experience",
        company_name: "Multiple Companies",
        iconBg: "#383E56",
        date: "Sept 2018 - Jan 2021",
        points: [
            "Spent 2 years in Australia, gaining diverse work experience in farms, factories, and over a year in carpentry.",
            "Developed adaptability and resilience by working in varied environments and challenging roles.",
            "Enhanced cultural awareness and teamwork through international collaboration and exposure to different work cultures.",
            "Embarked on a transformative motorcycle journey across Cambodia, Vietnam, and Indonesia, fostering independence and problem-solving skills.",
            "Broadened my global perspective and appreciation for diversity through rich cultural exchanges and unique travel experiences."
        ],
    }
];


const projects = [
    {
        name: "Studio TuttoPasta ",
        description:
            "A graphic designer and web designer needed a website to showcase services and creations, featuring appointment booking based on availability, a quote generation and management system, and an admin panel for content management.",
        tags: [
            {
                name: "symfony",
                color: "blue-text-gradient",
            },
            {
                name: "mysql",
                color: "green-text-gradient",
            },
            {
                name: "gsap",
                color: "pink-text-gradient",
            },
            {
                name: "jquery",
                color: "blue-text-gradient",
            },
            {
                name: "chartjs",
                color: "green-text-gradient",
            },
        ],
        image: tuttopasta,
        source_code_link: "https://github.com/ginodalsasso/projet-tuttoPasta",
    },
    {
        name: "Professional Session management",
        description:
            "Web application designed for training center administrators to manage training sessions, modules, categories, and student registrations efficiently.",
        tags: [
            {
                name: "symfony",
                color: "blue-text-gradient",
            },
            {
                name: "javascript",
                color: "green-text-gradient",
            },
            {
                name: "mysql",
                color: "pink-text-gradient",
            },
        ],
        image: session,
        source_code_link: "https://github.com/ginodalsasso/projet-session",
    },
    {
        name: "Forum Zino",
        description:
            "The main objective of this project is to develop an online forum platform that meets the specifications outlined in the client's requirements. The forum should facilitate flexible and intuitive communication among users",
        tags: [
            {
                name: "php",
                color: "blue-text-gradient",
            },
            {
                name: "mysql",
                color: "green-text-gradient",
            },
            {
                name: "javascript",
                color: "pink-text-gradient",
            },
        ],
        image: forum,
        source_code_link: "https://github.com/ginodalsasso/projet-forum",
    },
    {
        name: "Web Application for Restaurateurs",
        description:
            "Designed and developed a web application for restaurateurs, handling full-stack development, collaborating with a supervisor for database integration and helping to ensure code quality.",
        tags: [
            {
                name: "php",
                color: "blue-text-gradient",
            },
            {
                name: "mysql",
                color: "green-text-gradient",
            },
            {
                name: "jquery",
                color: "pink-text-gradient",
            },
        ],
        image: iller,
        source_code_link: "https://github.com/ginodalsasso/",
    },
    {
        name: "Film Wiki Project",
        description:
            "This project involves the design of a website with a database for a film wiki, as well as the creation of a user interface to manage it.",
        tags: [
            {
                name: "php",
                color: "blue-text-gradient",
            },
            {
                name: "mysql",
                color: "green-text-gradient",
            },
            {
                name: "javascript",
                color: "pink-text-gradient",
            },
        ],
        image: wikifilm,
        source_code_link: "https://github.com/ginodalsasso/projet-cinema",
    },
];

export { headers, services, technologies, experiences, projects };
