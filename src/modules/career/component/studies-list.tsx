import { Studies } from "@/types/career";

export const StudiesList: Studies[] = [
    {
        title: "Master Informatique ID3D (Image et Développement 3D)",
        university: "Université Lyon 1 Claude Bernard",
        begin: new Date(2025, 9, 1),
        end: new Date(-1, -1, -1),
        imageUrl: "/img/schools/UCBL-logo.png",
        imageAlt: "Logo de l'université Lyon 1",
        description:
            "Approfondissement des connaissances.\n" +
            "Synthèse, analyse et animation d’images.\n" +
            "Gestion de projets en groupe et en monôme.\n" +
            "Manipulation de maillages, de shaders et de surfaces implicites.",
        skills: [
            "C++", "Java", "Python", "OpenGL", "OpenCV", "GLSL", "Git", "GKit", "JavaScript", "Matlab"
        ]
    },
    {
        title: "Licence Informatique",
        university: "Université Lyon 1 Claude Bernard",
        begin: new Date(2021, 9, 1),
        end: new Date(2025, 9, 1),
        imageUrl: "/img/schools/UCBL-logo.png",
        imageAlt: "Logo de l'université Lyon 1",
        description:
            "Gestion, planification et création de projets informatiques.\n" +
            "Mise en œuvre d’un réseau local raccordé à Internet.\n" +
            "Utilisation de différents paradigmes de programmation.\n" +
            "Mise en œuvre d’algorithmes en utilisant divers langages de programmation.\n" +
            "Conception, modélisation et exploitation de bases de données.\n" +
            "Modélisation de l’architecture logicielle (UML).",
        skills: [
            "C++", "HTML", "CSS", "PHP", "SQL", "UML", "Java", "Git", "OpenCV"
        ]
    },
    {
        title: "DU Langue et Culture Coréenne",
        university: "Université Lyon 3 Jean Moulin",
        begin: new Date(2021, 9, 1),
        end: new Date(2025, 9, 2),
        imageUrl: "/img/schools/lyon3-logo.svg",
        imageAlt: "Logo de l'université Lyon 3",
        description:
            "Apprentissage du coréen niveau A2/B1.\n" +
            "Acquisition de notions élémentaires.",
        skills: []
    },
    {
        title: "Erasmus+ (L3 Informatique)",
        university: "Universidad de Granada (Espagne)",
        begin: new Date(2023, 9, 1),
        end: new Date(2024, 9, 1),
        imageUrl: "/img/schools/UGR-logo.png",
        imageAlt: "Logo de l'université de Granada (Espagne)",
        description:
            "Licence 3 en espagnol.\n" +
            "Gestion de projets informatiques.\n" +
            "Fondamentaux de l’informatique graphique.",
        skills: [
            "Java", "Ruby", "Python", "C++"
        ]
    },
    {
        title: "Baccalauréat général",
        university: "Lycée Saint Denis, Annonay",
        begin: new Date(2018, 9, 1),
        end: new Date(2021, 9, 1),
        imageUrl: "/img/schools/saint-denis-logo.png",
        imageAlt: "Logo du lycée Saint Denis",
        description:
            "Mention bien.\n" +
            "Section européenne – anglais",
        skills: [
            "Python"
        ]
    }
];