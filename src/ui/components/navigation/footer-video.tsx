import {Container} from "@/ui/components/container/container";
import {Typography} from "@/ui/design-system/typography/typography";
import {Logo} from "@/ui/design-system/logo/logo";
import {footerApplicationLinks} from "@/ui/components/navigation/app-links";

export const FooterVideo = () => {
    const CurrentYear = new Date().getFullYear();

    const footerNavigationList = footerApplicationLinks.map((element) => {

    })

    return (
        <div className="bg-day-300 dark:bg-night-300">
            <Container className="flex justify-between pt-18">
                <div className="flex flex-col items-center gap-1">
                    <Typography variant="body-base">
                        Formations Gratuites
                    </Typography>
                    <Typography variant="caption-base">
                        Abonne-toi à la chaine
                    </Typography>
                    <a href="https://youtube.com/@chuunpix" target="_blank">
                        <Logo size="large"/>
                    </a>
                </div>
                <div className="">
                </div>
            </Container>
            <Container className="bg-day-300 dark:bg-night-300 pt-9 pb-11 space-y-11">
                <hr className="dark:bg-night-400" />
                <div className="flex items-center justify-between">
                    <Typography variant="caption-xsm">
                        {`Copyright © ${CurrentYear} | Louis Morel`}
                    </Typography>
                    <div className=""></div>
                </div>

            </Container>
        </div>
    )
}