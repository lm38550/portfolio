"use client";

import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import {useMemo} from "react";

interface Props {
    href: string;
    children?: React.ReactNode;
}

export const ActiveLink= ({ href, children }: Props) => {
    const pathname = usePathname();

    const isActive = useMemo(() => {
        return pathname === href;
    }, [pathname, href])

    console.log(pathname);
    console.log(href);
    console.log(isActive);

    return (
        <Link
            href={href}
            className={clsx(isActive && "text-day dark:text-night")}
        >
            {children}
        </Link>
    );
}