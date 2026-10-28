import { Typography } from "@/ui/design-system/typography/typography";
import { Container } from "@/ui/components/container/container";
import Image from "next/image";

export default function Home() {
    return (
        <div className="bg-day-100 dark:bg-night-100">
            <Container>
                {/*Image et titre*/}
                <div className="relative w-full h-100">
                    <Image
                        src="/img/projects/NAS.jpeg"
                        fill
                        alt="Câble RJ-45 relié à un équipement réseau"
                        className="object-cover object-center rounded color-night-100"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-day-100/40 dark:bg-night-100/40 rounded">

                    </div>

                    <div className="absolute inset-0 flex items-center justify-center">
                        <Typography
                            variant="h2"
                            component="h2"
                            className="z-10"
                        >
                            Hébérgement de mon propre NAS
                        </Typography>
                    </div>
                </div>

                <Typography variant="h4" component="h4" className="p-4">
                    Serveur TrueNAS
                </Typography>
                {/*Premier Paragraphe*/}
                <div className="grid grid-cols-5 gap-6 w-full">
                    <Typography variant="body-sm" component="div" className="col-span-3 indent-8 text-justify">
                        Afin de moins dépendre des services des GAFAM, j’ai décidé, début 2025, de créer mon propre serveur. Au départ, il fonctionnait sous
                        Ubuntu en ligne de commande, puis je suis passé à TrueNAS sur les conseils de plusieurs amis. Grâce à son interface web, je peux gérer
                        facilement mes données et mes applications. <br/>
                        L’objectif est d’avoir mon propre cloud pour stocker mes photos, vidéos, musiques et autres fichiers, tout en permettant à ma famille
                        et à mes amis d’y stocker les leurs. Je peux aussi y faire tourner des serveurs de jeux (Minecraft, Subnautica, etc.) et héberger mes
                        sites web, comme ce portfolio. <br/>
                        Pour le matériel, j’ai réutilisé un ancien PC portable dont l’écran était cassé. Comme le serveur n’a pas besoin d’écran pour fonctionner,
                        il était parfait pour ce projet. Je l’ai relié à ma box en Ethernet pour profiter d’une connexion plus stable. Enfin, j’ai mis en place
                        un VPN afin que l’interface de gestion du serveur soit accessible uniquement depuis les appareils connectés à ce VPN.<br/>
                    </Typography>
                    <Image src="/img/projects/NAS/TrueNAS_home.png"
                           alt="Page principale de TrueNAS"
                           width={1000}
                           height={1000}
                           className="w-full h-full col-span-2" />
                </div>

            </Container>
        </div>
    );
}