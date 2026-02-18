import React from "react";
import clsx from "clsx";

interface Props {
    variant?:
        | "h1"
        | "h2"
        | "h3"
        | "h4"
        | "h5"
        | "body-lg"
        | "body-base"
        | "body-sm";
    component?: "h1" | "h2" | "h3" | "h4" | "h5" | "div" | "p" | "span"
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
        case "body-lg":
            variantStyle = "text-lg text-day dark:text-night";
            break;
        case "body-base":
            variantStyle = "text-base text-day dark:text-night";
            break;
        case "body-sm":
            variantStyle = "text-sm text-day dark:text-night";
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