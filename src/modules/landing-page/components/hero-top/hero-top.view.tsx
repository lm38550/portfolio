"use client"

import Image from "next/image";
import {Typography} from "@/ui/design-system/typography/typography";
import {SocialNetworksButtons} from "@/ui/components/navigation/social-networks-buttons";
import {SwiperView} from "@/modules/landing-page/components/swiper/swiper.view";
import {Button} from "@/ui/design-system/button/button";
import {RiDownloadLine} from "react-icons/ri";

export const HeroTopView = () => {
    return (
        <main className="min-h-screen flex items-center justify-between bg-day-100 dark:bg-night-100">
            <div className="flex flex-col items-start justify-center space-y-4 px-15">
                <Typography variant="h1" component="h1">Louis Morel</Typography>
                <div className="pl-10 pb-5">
                    <Typography variant="body-lg" component="h2">Étudiant en informatique graphique</Typography>
                    <Typography variant="body-lg" component="h2">Développement 2D/3D, développement logiciel & projets personels</Typography>
                </div>
                <SocialNetworksButtons/>
                <Button variant="secondary" icon={<RiDownloadLine/>} iconPosition="left" className="mt-2" action={() => {
                    const link = document.createElement("a");
                    link.href = "/cv.pdf";
                    link.download = "CV.pdf";
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                }}>
                    Télécharger mon CV
                </Button>
            </div>
            <div className="flex justify-end relative w-[600px] h-[600px]">
                <Image src="/img/louis.png" alt="profile" fill className="object-cover" loading="eager"/>
                <div className="absolute inset-0 bg-gradient-to-t from-day-100 dark:from-night-100 via-transparent to-transparent"></div>
            </div>
        </main>
    );
};
