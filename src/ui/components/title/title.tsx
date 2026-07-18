import Image from "next/image";
import {Typography} from "@/ui/design-system/typography/typography";

interface Props {
    name: string;
    img: string;
}

export const Title = ({ name, img }: Props) => {
    return (
        <main className="min-h-screen flex items-center justify-between">
            <div className="flex flex-col items-start justify-center space-y-4 px-20">
                <Typography variant="h1" component="h1">{name}</Typography>
                <div className="px-10">
                    <Typography variant="body-lg" component="h2">Étudiant en informatique</Typography>
                    <Typography variant="body-lg" component="h2">Développement web & projets perso</Typography>
                </div>
            </div>
            <div className="flex justify-end relative w-[600px] h-[600px]">
                <Image src={img} alt="profile" fill className="object-cover"/>
                <div className="absolute inset-0 bg-gradient-to-t from-day-100 dark:from-night-100 via-transparent to-transparent"></div>
            </div>
        </main>
    );
};
