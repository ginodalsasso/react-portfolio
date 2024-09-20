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
        title: "À propos",
    },
    {
        id: "work",
        title: "Expérience",
    },
    {
        id: "projects",
        title: "Projets",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const headers = [
    {
        title: "Qui suis-je ?",
        subtitle: "Introduction.",
        description: "Passionné par la création de solutions numériques. Actuellement en formation pour devenir un développeur compétent, je suis déterminé à acquérir de nouvelles compétences et à relever des défis stimulants. Voici une liste des compétences relationnelles que j'ai acquises au cours de mon parcours :"
    },
    {
        title: "Ce que j'ai fait jusqu'à présent",
        subtitle: "Expérience pro.",
    },
    {
        title: "Mon Travail",
        subtitle: "Projets.",
        description: "De la transformation du bois en chefs-d'œuvre avec un marteau et un ciseau à la création de merveilles numériques avec du code, j'ai effectué la transition de menuisier qualifié à développeur passionné, fusionnant harmonieusement l'art de ces deux mondes. Et maintenant, voici mes projets réalisés jusqu'à présent."
    },
    {
        title: "Envoyez-moi un message",
        subtitle: "Contact.",
    },
];


const services = [
    {
        title: "Adaptabilité",
    },
    {
        title: "Autonomie",
    },
    {
        title: "Éthique de travail",
    },
    {
        title: "Curiosité",
    },
    {
        title: "Travail d'équipe",
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
        name: "jQuery",
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
        title: "Stagiaire en développement web",
        company_name: "Iller Distribution",
        iconBg: "#383E56",
        date: "Juin 2024 - Juillet 2024",
        points: [
            "Conception et développement d'une application web de gestion des commandes adaptée aux restaurateurs professionnels.",
            "Gestion du développement front-end et back-end, assurant une fonctionnalité et une expérience utilisateur fluides.",
            "Collaboration étroite avec un partenaire pour assurer un développement cohérent dans tous les aspects de l'application.",
            "Travail en partenariat étroit avec le superviseur de stage pour intégrer l'application à la base de données existante.",
            "Mise en œuvre des meilleures pratiques pour la qualité du code, assurant que l'application soit maintenable et évolutive."
        ],
    },
    {
        title: "Expérience en menuiserie et développement de compétences",
        company_name: "Plusieurs entreprises",
        iconBg: "#E6DEDD",
        date: "Sept 2008 - Fév 2024",
        points: [
            "J'ai aquis 15 ans d'expérience en menuiserie, perfectionnant la précision et l'attention aux détails.",
            "Développé de fortes compétences d'adaptabilité à travers divers projets et défis.",
            "Amélioré les capacités de travail en équipe en collaborant étroitement avec d'autres artisans et professionnels.",
            "Cultivé la patience et la persévérance, traits essentiels pour fournir un travail de haute qualité.",
            "Acquis une expérience internationale en pratiquant la menuiserie en Australie pendant près d'un an et demi, élargissant davantage mes compétences et ma compréhension culturelle."
        ],
    },
    {
        title: "Expérience internationale",
        company_name: "Plusieurs entreprises",
        iconBg: "#383E56",
        date: "Sept 2018 - Jan 2021",
        points: [
            "2 années passées en Australie, acquérant une expérience de travail diverse dans des fermes, des usines, et plus d'un an en menuiserie.",
            "Développé l'adaptabilité et la résilience en travaillant dans des environnements variés et des rôles stimulants.",
            "Amélioré la conscience culturelle et le travail d'équipe grâce à la collaboration internationale et l'exposition à différentes cultures de travail.",
            "Entrepris un voyage transformateur en moto à travers le Cambodge, le Vietnam et l'Indonésie, favorisant l'indépendance et les compétences de résolution de problèmes.",
            "Élargi ma perspective globale et mon appréciation de la diversité à travers de riches échanges culturels et des expériences de voyage uniques."
        ],
    }
];

const projects = [
    {
        name: "Studio TuttoPasta",
        description:
            "Une graphiste et web designer avait besoin d'un site web pour présenter ses services et créations, avec une réservation de rendez-vous basée sur ses disponibilitées, un système de génération et de gestion de devis, et un panneau d'administration pour la gestion du contenu et la gestion administrative.",
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
        name: "Gestion de sessions professionnelles",
        description:
            "Application web conçue pour les administrateurs de centres de formation afin de gérer efficacement les sessions de formation, les modules, les catégories et les inscriptions des étudiants.",
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
            "L'objectif principal de ce projet est de développer une plateforme de forum en ligne qui répond aux spécifications décrites dans les exigences du client. Le forum doit faciliter une communication flexible et intuitive entre les utilisateurs",
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
        name: "Application Web pour Restaurateurs",
        description:
            "Conçu et développé une application web pour les restaurateurs, gérant le développement full-stack, collaborant avec un superviseur pour l'intégration de la base de données et contribuant à assurer la qualité du code.",
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
        name: "Projet Wiki Film",
        description:
            "Ce projet implique la conception d'un site web avec une base de données pour un wiki de films, ainsi que la création d'une interface utilisateur pour le gérer.",
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