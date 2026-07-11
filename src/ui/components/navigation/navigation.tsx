import {Container} from "@/ui/components/container/container";
import {Logo} from "@/ui/design-system/logo/logo";
import {Typography} from "@/ui/design-system/typography/typography";
import {Button} from "@/ui/design-system/button/button";
import {RiSunLine, RiMoonLine} from "react-icons/ri";
import Link from "next/link";
import {ActiveLink} from "@/ui/components/navigation/active-link";

interface Props {
}

export const Navigation = ({}: Props) => {
    return (
        <div className="bg-day-300 dark:bg-night-300">
            <Container className="flex items-center justify-between py-1.5 gap-7">
                <Link href="/">
                    <div className="flex items-center py-3 gap-3">
                        <Logo size="small"/>
                        <Typography variant="h3" component="h3">Louis Morel</Typography>
                    </div>
                </Link>
                <div className="flex items-center py-3 gap-3">
                    <Typography variant="h5" component="h5" className="flex items-center gap-3">
                        <ActiveLink href="/">
                            ACCUEIL
                        </ActiveLink>
                        <ActiveLink href="/projects">
                            PROJETS
                        </ActiveLink>
                        <ActiveLink href="/about">
                            À PROPOS
                        </ActiveLink>
                        <ActiveLink href="/contact">
                            CONTACT
                        </ActiveLink>
                    </Typography>
                    <Button variant="ico" size="medium" iconTheme="primary" icon={<RiMoonLine/>}></Button>
                </div>
            </Container>
        </div>
    )
}