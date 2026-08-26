import {ProjectLinks} from "@/types/project-links";

export const ProjectList : ProjectLinks[] = [
    {
        title: "Sythèse d'image - Simulation de tissu",
        description: "Projet Universitaire réalisé en 2026, mettant en scène un tissu soumis à différentes forces " +
            "(vent, gravitée, ...) avec lequel l'utilisateur peut interagir.",
        gitUrl: "https://github.com/lm38550/mif37_fz",
        pageUrl: "@/app/projects/MIF37-FZ",
        imageUrl: "/img/projects/MIF37-FZ.png",
        imageAlt: "Image de présentation du projet : Sythèse d'image - Simulation de tissu",
        compatible_mac : true,
        compatible_linux : true,
        compatible_windows : true,
        tags : ["C++", "GKit"]
    },
    {
        title: "Sythèse d'image - Mouvements d'un robot",
        description: "Projet Universitaire réalisé en 2026, mettant en scène un robot. L'objectif était de faire l'animation de " +
            "ce robot",
        gitUrl: "https://github.com/lm38550/mif37_am",
        pageUrl: "@/app/projects/MIF37-AM",
        imageUrl: "/img/projects/MIF37-AM.png",
        imageAlt: "Image de présentation du projet : Sythèse d'image - Mouvements d'un robot",
        compatible_mac : true,
        compatible_linux : true,
        compatible_windows : true,
        tags : ["C++", "GKit"]
    },
    {
        title: "Sythèse d'image - Mouvements d'une créature soumise à des forces physiques",
        description: "Projet Universitaire réalisé en 2026, mettant en scène une créature. L'objectif était de la maintenir en équilibre " +
            "mais aussi de pouvoir interagir avec en lui faisant subir des forces physique",
        gitUrl: "https://github.com/lm38550/mif37_np",
        pageUrl: "@/app/projects/MIF37-NP",
        imageUrl: "/img/projects/MIF37-NP.png",
        imageAlt: "Image de présentation du projet : Sythèse d'image - Mouvements d'un robot",
        compatible_mac : true,
        compatible_linux : true,
        compatible_windows : true,
        tags : ["C++", "GKit"]
    },
    {
        title: "Budget Manager",
        description: "ATTENTION CE LOGICIEL EST EN COURS DE REFONTE TOTALE \n " +
            "Logiciel de gestion de budget",
        gitUrl: "https://github.com/lm38550/BudgetManager",
        pageUrl: "@/app/projects/BudgetManager",
        imageUrl: "",
        imageAlt: "Image de présentation du projet : Budget Manager",
        compatible_mac : false,
        compatible_linux : false,
        compatible_windows : true,
        tags : ["Pyhton", "SQLlite", "C++", "WxWidget"]
    },
    {
        title: "L'Incroyable Fermier Assassin Partant Checher Des Abricots (LIFAPCDA)",
        description: "Projet universitaire de développement de logiciel. LIFAPCDA est un jeu similaire aux premier jeu Zelda, " +
            "avec pour objectif de récupérer des abricots et tuer des slimes pour gagner.",
        gitUrl: "https://github.com/lm38550/LIFAPCDA",
        pageUrl: "@/app/projects/LIFAPCDA",
        imageUrl: "",
        imageAlt: "Image de présentation du projet : LIFAPCDA",
        compatible_mac : true,
        compatible_linux : true,
        compatible_windows : true,
        tags : ["C++", "SDL2"]
    },
    {
        title: "Gestionnaire de CV",
        description: "Projet universitaire de développement et gestion de projet. Ce gestionnaire permet de trier des CV en fonction de différents critères et d'en calculer le score",
        gitUrl: "https://github.com/lm38550/mif01_cv",
        pageUrl: "@/app/projects/MIF01_CV",
        imageUrl: "",
        imageAlt: "Image de présentation du projet : Gestionnaire de CV",
        compatible_mac : true,
        compatible_linux : true,
        compatible_windows : true,
        tags : ["Java", "Maven"]
    },
]