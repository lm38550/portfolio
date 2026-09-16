import {Container} from "@/ui/components/container/container";
import {Projects} from "@/ui/components/project-presentation/project-presentation";
import {Typography} from "@/ui/design-system/typography/typography";
import {Button} from "@/ui/design-system/button/button";
import {RiGithubFill} from "react-icons/ri";
import Link from "next/link";

export default function Home() {
    return (
        <div className="flex items-center gap-2 bg-day-100 dark:bg-night-100">
            <Container className="flex flex-col items-center">
                <Typography variant="h1" component="h1" className="text-center">
                    Mes Projets
                </Typography>
                <Projects/>
                <Link href="https://github.com/lm38550/">
                    <Button size="large" iconPosition="left" variant="primary" className="my-4" icon={<RiGithubFill/>}>
                        Tous mes projets sont sur GitHub
                    </Button>
                </Link>
            </Container>
        </div>
    )
}