import {Experiences} from "@/types/career";

export const ExperienceList: Experiences[] = [
    {
        title : "Barista",
        place : "Starbucks, Lyon, CC Part-dieu",
        begin : new Date(2024, 11, 1),
        end : new Date(-1, -1, -1),
        imageUrl : "/img/companies/starbucks-logo.png",
        imageAlt : "Logo de Starbucks",
        description : "Préparation de boissons respectant des standards qualité.\n" +
            "Accueil et conseil des clients.\n" +
            "Travail en équipe lors des périodes d’affluence.\n" +
            "Respect des règles d’hygiène et entretien du poste de travail.",
        skills : []
    },
    {
        title : "Stage en gestion de parc informatique",
        place : "CROUS de Lyon",
        begin : new Date(2025, 5, 25),
        end : new Date(2025, 8, 1),
        imageUrl : "/img/companies/crous-logo.webp",
        imageAlt : "Logo du CROUS de Lyon",
        description : "Migration des postes vers Windows 11.\n" +
            "Gestion de tickets de maintenance.\n" +
            "Intervention sur les sites physiques du CROUS.",
        skills : ["Windows 11"]
    },
    {
        title : "Superviseur réseau",
        place : "SFR",
        begin : new Date(2024, 5, 25),
        end : new Date(2024, 9, 5),
        imageUrl : "/img/companies/SFR-logo.svg",
        imageAlt : "",
        description : "Migration et tout",
        skills : ["Windows 11"]
    },
    {
        title : "Agent de production",
        place : "Justin Bridou",
        begin : new Date(2023, 6, 15),
        end : new Date(2023, 9, 1),
        imageUrl : "/img/companies/justin-bridou-logo.png",
        imageAlt : "",
        description : "Migration et tout",
        skills : ["Windows 11"]
    },
    {
        title : "Agent de production",
        place : "Justin Bridou",
        begin : new Date(2022, 6, 15),
        end : new Date(2022, 9, 1),
        imageUrl : "/img/companies/justin-bridou-logo.png",
        imageAlt : "",
        description : "Migration et tout",
        skills : ["Windows 11"]
    },
    {
        title : "Agent de production",
        place : "Justin Bridou",
        begin : new Date(2021, 6, 15),
        end : new Date(2021, 9, 1),
        imageUrl : "/img/companies/justin-bridou-logo.png",
        imageAlt : "",
        description : "Migration et tout",
        skills : ["Windows 11"]
    },
]