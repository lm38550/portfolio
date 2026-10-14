import {Studies} from "@/types/career";

export const StudiesList : Studies[] = [
    {
        title : "Master Informatique ID3D (Image et Développement 3D)",
        university : "Université Lyon 1 Claude Bernard",
        begin : new Date(2025, 9, 1),
        end : new Date(-1, -1, -1),
        imageUrl : "/img/schools/UCBL-logo.png",
        imageAlt : "",
        description : "Approfondissement des connaissances.\n" +
            "Sythèse, analyse et animation d'image.\n" +
            "Gestion de projets en groupe et en monome.\n" +
            "Manipulation de maillages",
        skills : [
            "C++", "Java", "Python", "OpenGL", "OpenCV", "GLSL", "Git", "GKit", "JavaScript",
        ]
    },
    {
        title : "Licence Informatique",
        university : "Université Lyon 1 Claude Bernard",
        begin : new Date(2021, 9, 1),
        end : new Date(2025, 9, 1),
        imageUrl : "/img/schools/UCBL-logo.png",
        imageAlt : "",
        description : "J'ai fait une licence wsh",
        skills : [
            "C++", "Java"
        ]
    },
    {
        title : "DU Langue et Culture Coréenne",
        university : "Université Lyon 3 Jean Moulin",
        begin : new Date(2021, 9, 1),
        end : new Date(2025, 9, 2),
        imageUrl : "/img/schools/lyon3-logo.svg",
        imageAlt : "",
        description : "J'ai fait une licence wsh",
        skills : [
            "C++", "Java"
        ]
    },
    {
        title : "Erasmus+ (L3 Informatique)",
        university : "Universidad de Granada (Espagne)",
        begin : new Date(2023, 9, 1),
        end : new Date(2024, 9, 1),
        imageUrl : "/img/schools/UGR-logo.png",
        imageAlt : "",
        description : "J'ai fait une licence wsh",
        skills : [
            "C++", "Java"
        ]
    },
    {
        title : "Baccalauréat général",
        university : "Lycée Saint Denis, Annonay",
        begin : new Date(2018, 9, 1),
        end : new Date(2021, 9, 1),
        imageUrl : "/img/schools/saint-denis-logo.png",
        imageAlt : "",
        description : "J'ai fait passé le bac wsh",
        skills : [
            "Python"
        ]
    }
]