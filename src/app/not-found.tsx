import {Container} from "@/ui/components/container/container";
import {Typography} from "@/ui/design-system/typography/typography";
import Link from "next/link";

export default function NotFound() {
    return (
        <div className="bg-day-100 dark:bg-night-100">
            <Container
                className="flex min-h-screen flex-col items-center justify-center w-full">
                <div className="flex items-center justify-center py-1">
                    <Typography variant="h3" component="p" className="border-r-2 pr-2">404 </Typography>
                    <Typography variant="body-base" component="p" className="pl-2"> Page not found</Typography>
                </div>
                <div className="flex items-center justify-center py-1">
                    <Typography variant="caption-sm" component="p">
                        We could not find any page you are looking for.
                    </Typography>
                </div>
                <div className="flex items-center justify-center py-1">
                    <Typography variant="caption-sm" component="p">
                        Go back to the <Link href="/">home page</Link>.
                    </Typography>
                </div>
            </Container>
        </div>
    )
}