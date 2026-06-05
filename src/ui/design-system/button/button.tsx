"use client";

import clsx from "clsx";
import React from "react";

interface Props {
    size?: "small" | "medium" | "large";
    variant?: "primary" | "secondary" | "outline" | "disabled" | "ico";
    icon?: any;
    iconTheme?: "primary" | "secondary" | "gray";
    iconPosition?: "left" | "right";
    disabled?: boolean;
    isLoading?: boolean;
    children?: React.ReactNode;
    className?: string;
}

export const Button = ({
    size = "medium",
    variant = "primary",
    icon,
    iconTheme = "primary",
    iconPosition = "right",
    disabled,
    isLoading,
    children,
    className,
}: Props) => {

    let variantStyles: string = "",
        sizeStyles: string = "",
        icoSize: number = 0;

    switch (variant) {
        case "primary":
            variantStyles = "bg-day dark:bg-night hover:bg-day-500 hover:dark:bg-night-750 text-day-200 dark:text-night-200 dark:border-night border-day border-solid border-1 rounded";
            break;
        case "secondary":
            variantStyles = "bg-day-300 dark:bg-night-500 hover:bg-day-200 hover:dark:bg-night-600 text-day-800 dark:text-night-800 dark:border-night-500 border-day-300 border-solid border-1 rounded";
            break;
        case "outline":
            variantStyles = "bg-day-100 dark:bg-night-100 hover:bg-gray-900/5 hover:dark:bg-gray-100/5 border-gray-500 border-solid border-1 rounded text-gray-900 dark:text-gray-100";
            break;
        case "disabled":
            variantStyles = "bg-gray-400/20 dark:bg-gray-100/10 border-gray-500 border-solid border-1 rounded text-gray-500 dark:text-gray-500 cursor-not-allowed";
            break;
        case "ico":
            if (iconTheme === "primary") {
                variantStyles = "bg-day dark:bg-night hover:bg-day-500 hover:dark:bg-night-800 text-day-200 dark:text-night-200 rounded-full"
            }
            if (iconTheme === "secondary") {
                variantStyles = "bg-day-300 dark:bg-night-500 hover:bg-day-200 hover:dark:bg-night-600 text-day-800 dark:text-night-800 rounded-full"
            }
            if (iconTheme === "gray") {
                variantStyles = "bg-day-100 dark:bg-night-100 hover:bg-gray-900/5 hover:dark:bg-gray-100/5 border-gray-500 border-solid border-1 rounded-full text-gray-900 dark:text-gray-100";
            }
            break;
    }

    switch (size) {
        case "small":
            sizeStyles = `text-sm ${
                variant === "ico" ? "flex items-center justify-center w-[37px] h-[37px]" : "px-3 py-2"
            }`;
            icoSize = 13;
            break;
        case "medium":
            sizeStyles = `text-base ${
                variant === "ico" ? "flex items-center justify-center w-[56px] h-[56px]" : "px-5 py-3"
            }`;
            icoSize = 16;
            break;
        case "large":
            sizeStyles = `text-lg ${
                variant === "ico" ? "flex items-center justify-center w-[74px] h-[74px]" : "px-7 py-4"
            }`;
            icoSize = 20;
            break;
    }

    return (
        <>
            <button
                type="button"
                className={clsx(variantStyles, sizeStyles, className, icoSize)}
                onClick={() => console.log("click")}
                disabled={disabled}
            >
                {icon && variant === "ico" ? React.cloneElement(
                        icon , {size: 6}
                ) : (
                        <div className={clsx("flex items-center gap-1")}>
                            {icon && iconPosition === "left" && (
                                React.cloneElement(icon , {size: 6})
                            )}
                            {children}
                            {icon && iconPosition === "right" && (
                                React.cloneElement(icon , {size: 6})
                            )}
                        </div>
                )}
            </button>
        </>
    )
}