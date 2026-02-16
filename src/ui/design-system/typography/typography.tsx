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
    children: React.ReactNode;
}

export const Typography = ({
    variant = "body-base",
    component: Component = "p",
    children
}: Props) => {

    let variantStyle: string ="";

    switch (variant) {
        case "h1":
            variantStyle = "text-5xl text-day-800 dark:text-night-800";
            break;
        case "h2":
            variantStyle = "text-4xl";
            break;
        case "h3":
            variantStyle = "text-3xl";
            break;
        case "h4":
            variantStyle = "text-2xl";
            break;
        case "h5":
            variantStyle = "text-xl";
            break;
        case "body-lg":
            variantStyle = "text-lg";
            break;
        case "body-base":
            variantStyle = "text-base";
            break;
        case "body-sm":
            variantStyle = "text-sm";
            break;
    }

    return (
        <Component className={clsx(variantStyle)}>{children}</Component>
    )
}