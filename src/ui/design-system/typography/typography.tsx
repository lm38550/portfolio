import React from "react";
import clsx from "clsx";

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
            variantStyle = "text-5xl text-day-800 dark:text-night-800";
            break;
        case "h2":
            variantStyle = "text-4xl text-day-800 dark:text-night-800";
            break;
        case "h3":
            variantStyle = "text-3xl text-day-800 dark:text-night-800";
            break;
        case "h4":
            variantStyle = "text-2xl text-day-800 dark:text-night-800";
            break;
        case "h5":
            variantStyle = "text-xl text-day-800 dark:text-night-800";
            break;
        case "body-xlg":
            variantStyle = "text-lg text-day dark:text-night";
            break;
        case "body-lg":
            variantStyle = "text-base text-day dark:text-night";
            break;
        case "body-base":
            variantStyle = "text-sm text-day dark:text-night";
            break;
        case "body-sm":
            variantStyle = "text-xs text-day dark:text-night";
            break;
        case "caption-lg":
            variantStyle = "text-sm text-gray-600 dark:text-night-800";
            break;
        case "caption-base":
            variantStyle = "text-xs text-gray-600 dark:text-night-800";
            break;
        case "caption-sm":
            variantStyle = "text-2xs text-gray-600 dark:text-night-800";
            break;
        case "caption-xsm":
            variantStyle = "text-3xs text-gray-600 dark:text-night-800";
            break;
    }

    return (
        <Component
            className={clsx(
                variantStyle,
                className,
            )}
        >
            {children}
        </Component>
    )
}