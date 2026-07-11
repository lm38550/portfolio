"use client"

import {v4 as uuidv4} from "uuid";
import {Typography} from "@/ui/design-system/typography/typography";
import clsx from "clsx";
import {usePathname} from "next/navigation";
import {RiHome9Line} from "react-icons/ri";
import {Container} from "@/ui/components/container/container";
import Link from "next/link";

export const Breadcrumbs = () => {
    const asPath = usePathname();
    const segments = asPath.split("/");
    const lastSegment = segments[segments.length - 1];
    segments[0] = "accueil";

    const view = segments.map((segment, index) => (
        <div key={uuidv4()} className="flex items-center">
            {segment !== "accueil" && (
                <Typography variant="caption-sm" component="p" className="mr-2 text-gray-400 dark:text-gray-500">
                    /
                </Typography>
            )}
            <Link href={
                index > 0 ? `/${segments.slice(1,index + 1).join("/")}` : "/"
            }>
                <Typography variant="caption-sm" component="p" className={clsx(
                    segment !== lastSegment ? "text-gray-400 dark:text-gray-500" : "text-gray-600 dark:text-gray-300",
                    "capitalize hover:text-gray-900 hover:dark:text-gray-200 animate"
                )}>
                    {segment !== "accueil" ? segment.replace(/-/g, " ") : <RiHome9Line className="inline -mt-1"/>}
                </Typography>
            </Link>
        </div>
    ))

    return (
        <Container className="flex items-center gap-2 py-7">
            {view}
        </Container>
    )
}