import {ProjectList} from "@/ui/components/project-presentation/project-links";
import Image from "next/image";
import {Typography} from "@/ui/design-system/typography/typography";
import {
    RiAppleFill,
    RiArrowRightLongLine, RiGithubFill,
    RiUbuntuFill,
    RiWindowsFill
} from "react-icons/ri";
import {Button} from "@/ui/design-system/button/button";
import {v4 as uuidv4} from "uuid";
import Link from "next/link";

export const Projects = () => {
    const projectsList = ProjectList.map((project) => (
        <div className="flex items-center border-2 rounded h-60 mt-5 p-2 gap-3 bg-day-200 dark:bg-night-200" key={uuidv4()}>
            <div className="p-6 h-full w-100 relative rounded">
                <Image src={project.imageUrl} alt={project.imageAlt} fill className="rounded"/>
            </div>
            <div className="flex items-start flex-col gap-3">
                <Typography variant="h3" component="h1">{project.title}</Typography>
                <Typography variant="body-sm" component="p" className="ml-3">{project.description}</Typography>
                <div className="flex items-center gap-2">
                    {project.compatible_windows && <RiWindowsFill size={30} className="text-day-800 dark:text-night-800" />}
                    {project.compatible_linux && <RiUbuntuFill size={30} className="text-day-800 dark:text-night-800" />}
                    {project.compatible_mac && <RiAppleFill size={30} className="text-day-800 dark:text-night-800" />}
                </div>
                <div className="flex items-center gap-2">
                    {/* TODO : Rétablir quand les pages seront crées

                    <Link href={project.pageUrl}>
                        <Button iconPosition="right" icon={<RiArrowRightLongLine/>}>
                            Plus d'informations
                        </Button>
                    </Link>*/}
                    <Link href={project.gitUrl}>
                        <Button variant="secondary" iconPosition="right" icon={<RiGithubFill/>}>
                            Projet GitHub
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )) 
    
    return (
        projectsList
    );
}