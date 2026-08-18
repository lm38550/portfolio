import {Container} from "@/ui/components/container/container";
import {Typography} from "@/ui/design-system/typography/typography";
import Link from "next/link";
import {Logo} from "@/ui/design-system/logo/logo";
import {SocialNetworksButtons} from "@/ui/components/navigation/social-networks-buttons";
import clsx from "clsx";

export const Footer = () => {
    return (
        <div className="bg-day-300 dark:bg-night-300">
            <div className="w-full max-w-[90rem] mx-auto px-5 lg:px-10 flex items-center justify-between p-4">
                <div className="flex items-center justify-between">
                    <Typography variant="caption-xsm" component="p">
                        Copyright © 2026 - Louis Morel
                    </Typography>
                </div>
                <div className="flex items-center justify-between">
                    <Typography variant="caption-xsm" component="div" className="flex items-center gap-3">
                        <Link href="/">Accueil</Link>
                        <p>|</p>
                        <Link href="/UI">UI design</Link>
                        <p>|</p>
                        <Link href="/contact">Contact</Link>
                    </Typography>
                </div>
                <div className="flex items-center justify-between">
                    <SocialNetworksButtons theme="gray"/>
                </div>
            </div>
        </div>
    )
}