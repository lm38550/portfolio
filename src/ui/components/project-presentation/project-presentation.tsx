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
        <div className="items-center border-2 grid grid-cols-1 md:grid-cols-4 rounded min-h-60 mt-5 p-2 w-full md:gap-3 bg-day-200 dark:bg-night-200" key={uuidv4()}>
            <div className="h-full min-h-40 w-full md:col-span-1 relative rounded">
                {project.imageUrl === "" ?
                    <Image src="/img/no-image.png" alt="Image indiquant qu'il n'y a pas d'image pour ce projet" fill className="rounded object-cover"/>
                    :
                    <Image src={project.imageUrl} alt={project.imageAlt} fill className="rounded object-cover"/>
                }
            </div>
            <div className="md:col-span-3 flex items-center md:items-start flex-col gap-3">
                <Typography variant="h3" component="h1" className="text-center md:text-start">{project.title}</Typography>
                <Typography variant="body-sm" component="p" className="text-center md:text-start md:ml-3 whitespace-pre-line">{project.description}</Typography>
                <div className="flex items-center gap-2">
                    <div className="flex border-r-2 border-day-800 dark:border-night-800 pr-1">
                        {project.compatible_windows && <RiWindowsFill size={30} className="text-day-800 dark:text-night-800" />}
                        {project.compatible_linux && <RiUbuntuFill size={30} className="text-day-800 dark:text-night-800" />}
                        {project.compatible_mac && <RiAppleFill size={30} className="text-day-800 dark:text-night-800" />}
                    </div>
                    {project.tags.map((tag) => (
                        <Typography variant="caption-sm" component="p" key={uuidv4()}
                                    className="bg-day-400 dark:bg-night-400 p-2 rounded">
                            {tag}
                        </Typography>
                    ))}
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