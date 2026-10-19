import { Experiences } from "@/types/career";

export const ExperienceList: Experiences[] = [
    {
        title: "Barista",
        place: "Starbucks, Lyon, CC Part-Dieu",
        begin: new Date(2024, 11, 1),
        end: new Date(-1, -1, -1),
        imageUrl: "/img/companies/starbucks-logo.png",
        imageAlt: "Logo de Starbucks",
        description:
            "Préparation de boissons dans le respect des normes de qualité.\n" +
            "Accueil et conseil des clients.\n" +
            "Travail en équipe lors des périodes d’affluence.\n" +
            "Respect des règles d’hygiène et entretien du poste de travail.",
        skills: []
    },
    {
        title: "Stage en gestion de parc informatique",
        place: "CROUS de Lyon",
        begin: new Date(2025, 6, 25),
        end: new Date(2025, 8, 1),
        imageUrl: "/img/companies/crous-logo.webp",
        imageAlt: "Logo du CROUS de Lyon",
        description:
            "Migration des postes vers Windows 11.\n" +
            "Gestion des tickets de maintenance.\n" +
            "Interventions sur les différents sites du CROUS.\n" +
            "Vulgarisation des nouveaux outils informatiques.",
        skills: ["Windows 11", "Active Directory", "FOG Project"]
    },
    {
        title: "Président de l’AML",
        place: "Association des inforMaticiens lyonnais – Université Lyon 1",
        begin: new Date(2024, 10, 1),
        end: new Date(2025, 5, 1),
        imageUrl: "/img/companies/aml-logo.png",
        imageAlt: "Logo de l’Association des inforMaticiens lyonnais",
        description:
            "Gestion de la communication interne et de l’organisation du bureau.\n" +
            "Organisation d’événements universitaires.\n" +
            "Maintien du lien entre l’administration et les étudiants.",
        skills: []
    },
    {
        title: "Superviseur réseau",
        place: "SFR",
        begin: new Date(2024, 5, 25),
        end: new Date(2024, 9, 5),
        imageUrl: "/img/companies/SFR-logo.svg",
        imageAlt: "Logo de SFR",
        description:
            "Supervision du réseau national.\n" +
            "Gestion des tickets d’intervention.\n" +
            "Gestion des opérations de crise et des interventions urgentes.",
        skills: []
    },
    {
        title: "Responsable de l’infographie",
        place: "Association des inforMaticiens lyonnais – Université Lyon 1",
        begin: new Date(2023, 10, 1),
        end: new Date(2024, 10, 1),
        imageUrl: "/img/companies/aml-logo.png",
        imageAlt: "Logo de l’Association des inforMaticiens lyonnais",
        description:
            "Création de visuels et de contenus interactifs.",
        skills: ["Canva"]
    },
    {
        title: "Agent de production",
        place: "Justin Bridou",
        begin: new Date(2023, 6, 15),
        end: new Date(2023, 9, 1),
        imageUrl: "/img/companies/justin-bridou-logo.png",
        imageAlt: "Logo de Justin Bridou",
        description:
            "Contrôle de la qualité, de la propreté et de la sécurité.\n" +
            "Entretien des appareils de manutention.",
        skills: []
    },
    {
        title: "Responsable de la communication",
        place: "Association des inforMaticiens lyonnais – Université Lyon 1",
        begin: new Date(2022, 10, 1),
        end: new Date(2023, 10, 1),
        imageUrl: "/img/companies/aml-logo.png",
        imageAlt: "Logo de l’Association des inforMaticiens lyonnais",
        description:
            "Gestion des réseaux sociaux de l’association.\n" +
            "Création de visuels.\n" +
            "Communication avec les adhérents.",
        skills: ["Canva"]
    },
    {
        title: "Agent de production",
        place: "Justin Bridou",
        begin: new Date(2022, 6, 15),
        end: new Date(2022, 9, 1),
        imageUrl: "/img/companies/justin-bridou-logo.png",
        imageAlt: "Logo de Justin Bridou",
        description:
            "Contrôle de la qualité, de la propreté et de la sécurité.\n" +
            "Entretien des appareils de manutention.",
        skills: []
    },
    {
        title: "Agent de production",
        place: "Justin Bridou",
        begin: new Date(2021, 6, 15),
        end: new Date(2021, 9, 1),
        imageUrl: "/img/companies/justin-bridou-logo.png",
        imageAlt: "Logo de Justin Bridou",
        description:
            "Contrôle de la qualité, de la propreté et de la sécurité.\n" +
            "Entretien des appareils de manutention.",
        skills: []
    }
];