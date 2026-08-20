import {Container} from "@/ui/components/container/container";
import {Projects} from "@/ui/components/project-presentation/project-presentation";
import {Typography} from "@/ui/design-system/typography/typography";

export default function Home() {
    return (
        <div className="flex items-center gap-2 bg-day-100 dark:bg-night-100">
            <Container>
                <Typography variant="h1" component="h1" className="text-center">
                    Mes Projets
                </Typography>
                <Projects/>
            </Container>
        </div>
    )
}