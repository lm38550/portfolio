import {AppLinks} from "@/types/app-links";
import {
    RiGithubFill,
    RiGithubLine,
    RiInstagramLine,
    RiLinkedinBoxFill,
    RiLinkedinLine,
    RiYoutubeFill
} from "react-icons/ri";

export const footerApplicationLinks : AppLinks[] = [
    {
        label: "Accueil",
        baseUrl: "/",
        type: "internal",
    },
    {
        label: "Projets",
        baseUrl: "/#",
        type: "internal",
    },
    {
        label: "Louis Morel",
        baseUrl: "/#",
        type: "internal",
    },
    {
        label: "Formations",
        baseUrl: "https://youtube.com/@Chuunpix",
        type: "external",
    },
]
const footerUserList : AppLinks[] = [
    {
        label: "Mon espace",
        baseUrl: "/#",
        type: "internal",
    },
    {
        label: "Connexion",
        baseUrl: "/#",
        type: "internal",
    },
    {
        label: "Inscription",
        baseUrl: "/#",
        type: "internal",
    },
    {
        label: "Mot de passe Oublié",
        baseUrl: "/#",
        type: "internal",
    },
]
const footerInformationList : AppLinks[] = [
    {
        label: "CGU",
        baseUrl: "/#",
        type: "internal",
    },
    {
        label: "Confidentialité",
        baseUrl: "/#",
        type: "internal",
    },
    {
        label: "À propos",
        baseUrl: "/#",
        type: "internal",
    },
    {
        label: "Contact",
        baseUrl: "/#",
        type: "internal",
    },
]
export const footerSocialList : AppLinks[] = [
    {
        label: "Linkedin",
        baseUrl: "https://www.linkedin.com/in/louis-morel-info69/",
        type: "external",
        icon: <RiLinkedinBoxFill/>
    },
    {
        label: "GitHub",
        baseUrl: "https://forge.univ-lyon1.fr/p2100444/",
        type: "external",
        icon: <RiGithubFill/>
    },
    {
        label: "Instagram",
        baseUrl: "https://www.instagram.com/lm42520/",
        type: "external",
        icon: <RiInstagramLine/>
    },
]