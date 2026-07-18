import Image from "next/image";
import {Typography} from "@/ui/design-system/typography/typography";
import {SocialNetworksButtons} from "@/ui/components/navigation/social-networks-buttons";

export const HeroTopView = () => {
    return (
        <main className="min-h-screen flex items-center justify-between">
            <div className="flex flex-col items-start justify-center space-y-4 px-15">
                <Typography variant="h1" component="h1">Louis Morel</Typography>
                <div className="pl-10 pb-5">
                    <Typography variant="body-lg" component="h2">Étudiant en informatique</Typography>
                    <Typography variant="body-lg" component="h2">Développement web & projets perso</Typography>
                </div>
                <SocialNetworksButtons/>
            </div>
            <div className="flex justify-end relative w-[600px] h-[600px]">
                <Image src="/img/louis.png" alt="profile" fill className="object-cover"/>
                <div className="absolute inset-0 bg-gradient-to-t from-day-100 dark:from-night-100 via-transparent to-transparent"></div>
            </div>
        </main>
    );
};
