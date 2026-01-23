import React from "react";
import clsx from "clsx";

interface Props {
    variant?:
        | "h1"
        | "h2"
        | "h3"
        | "h4"
        | "h5"
        | "display"
        | "lead"
        | "body-lg"
        | "body-base"
        | "body-sm"
        | "caption1"
        | "caption2"
        | "caption3"
        | "caption4";
    component?: "h1" | "h2" | "h3" | "h4" | "h5" | "div" | "p" | "span"
    children: React.ReactNode;
}

export const Typography = ({
    variant = "body-sm",
    component: Component = "p",
    children
}: Props) => {

    let variantStyle: string ="";

    switch (variant) {
        case "h1":
            variantStyle = "text-red-500";
            break;
        case "h2":
            variantStyle = "h2";
            break;
    }

    return (
        <Component className={clsx(variantStyle)}>{children}</Component>
    )
}