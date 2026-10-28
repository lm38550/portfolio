import React from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

interface Props {
    variant?:
        | "h1"
        | "h2"
        | "h3"
        | "h4"
        | "h5"
        | "body-xlg"
        | "body-lg"
        | "body-base"
        | "body-sm"
        | "caption-lg"
        | "caption-base"
        | "caption-sm"
        | "caption-xsm";
    component?:
        | "h1"
        | "h2"
        | "h3"
        | "h4"
        | "h5"
        | "div"
        | "p"
        | "span"
    className?: string;
    children: React.ReactNode;
}

export const Typography = ({
    variant = "body-base",
    component: Component = "p",
    className,
    children
}: Props) => {

    let variantStyle: string ="";

    switch (variant) {
        case "h1":
            variantStyle = "md:text-6xl text-5xl text-day-800 dark:text-night-800";
            break;
        case "h2":
            variantStyle = "md:text-5xl text-4xl text-day-800 dark:text-night-800";
            break;
        case "h3":
            variantStyle = "md:text-4xl text-3xl text-day-800 dark:text-night-800";
            break;
        case "h4":
            variantStyle = "md:text-3xl text-2xl text-day-800 dark:text-night-800";
            break;
        case "h5":
            variantStyle = "md:text-2xl text-xl text-day-800 dark:text-night-800";
            break;
        case "body-xlg":
            variantStyle = "md:text-lg text-base text-day dark:text-night";
            break;
        case "body-lg":
            variantStyle = "md:text-base text-sm text-day dark:text-night";
            break;
        case "body-base":
            variantStyle = "md:text-sm text-xs text-day dark:text-night";
            break;
        case "body-sm":
            variantStyle = "md:text-xs text-2xs text-day dark:text-night";
            break;
        case "caption-lg":
            variantStyle = "md:text-sm text-xs text-gray-600 dark:text-gray-300";
            break;
        case "caption-base":
            variantStyle = "md:text-xs text-2xs text-gray-600 dark:text-gray-300";
            break;
        case "caption-sm":
            variantStyle = "md:text-2xs text-3xs text-gray-600 dark:text-gray-300";
            break;
        case "caption-xsm":
            variantStyle = "md:text-3xs text-4xs text-gray-600 dark:text-gray-300";
            break;
    }

    return (
        <Component
            className={twMerge(
                variantStyle,
                className,
            )}
        >
            {children}
        </Component>
    )
}