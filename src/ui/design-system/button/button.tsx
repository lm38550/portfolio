"use client";

import clsx from "clsx";
import React from "react";
import {Spinner} from "@/ui/design-system/spinner/spinner";
import {LinkType, LinkTypes} from "@/lib/link-type";
import Link from "next/link";

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
    baseUrl?: string;
    linkType?: LinkType;
    action?: Function;
    type?: "button" | "submit";
    fullWidth?: boolean;
}

export const Button = ({
                           size = "medium",
                           variant = "primary",
                           icon,
                           iconTheme,
                           iconPosition = "right",
                           disabled,
                           isLoading,
                           children,
                           className,
                           baseUrl,
                           linkType = "internal",
                           type = "button",
                           fullWidth = false,
                           action = () => {
                           },
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
            variantStyles = "bg-day-100 dark:bg-night-100 hover:bg-gray-900/5 hover:dark:bg-gray-100/5 border-gray-300 border-solid border-1 rounded text-gray-900 dark:text-gray-100";
            break;
        case "disabled":
            variantStyles = "bg-gray-400/20 dark:bg-gray-100/10 border-gray-300 border-solid border-1 rounded text-gray-500 dark:text-gray-500 cursor-not-allowed";
            break;
        case "ico":
            if (iconTheme === "primary") {
                variantStyles = "bg-day dark:bg-night hover:bg-day-500 hover:dark:bg-night-800 text-day-200 dark:text-night-200 rounded-full"
            }
            if (iconTheme === "secondary") {
                variantStyles = "bg-day-300 dark:bg-night-500 hover:bg-day-200 hover:dark:bg-night-600 text-day-800 dark:text-night-800 rounded-full"
            }
            if (iconTheme === "gray") {
                variantStyles = "bg-day-100 dark:bg-night-100 hover:bg-gray-900/5 hover:dark:bg-gray-100/5 border-gray-300 dark:border-gray-600 border-solid border-1 rounded-full text-gray-900 dark:text-gray-100";
            }
            break;
    }

    switch (size) {
        case "small":
            sizeStyles = `text-[0.9rem] ${
                variant === "ico" ? "flex shrink-0 items-center justify-center w-[36px] h-[36px]" : "shrink-0 px-3 py-1.5"
            }`;
            icoSize = 20;
            break;
        case "medium":
            sizeStyles = `text-[1.2rem] ${
                variant === "ico" ? "flex shrink-0 items-center justify-center w-[47px] h-[47px]" : "shrink-0 px-4 py-2"
            }`;
            icoSize = 28;
            break;
        case "large":
            sizeStyles = `text-[1.5rem] ${
                variant === "ico" ? "flex shrink-0 items-center justify-center w-[62px] h-[62px]" : "shrink-0 px-7 py-3"
            }`;
            icoSize = 36;
            break;
    }

    const content =
        <>
            {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center">
                    {(variant === "primary" || iconTheme === "primary") ? (
                        <Spinner size="small" variant="outline"/>
                    ) : (variant === "outline" || variant === "disabled" || iconTheme === "gray") ? (
                        <Spinner size="small" variant="negative"/>
                    ) : (
                        <Spinner size="small"/>
                    )}
                </div>
            )}

            <div className={clsx(isLoading && "invisible")}>
                {icon && variant === "ico" ?
                    React.cloneElement(icon, {size: icoSize}
                    ) : (
                        <div className={clsx("flex items-center justify-center gap-1")}>
                            {icon && iconPosition === "left" && (
                                React.cloneElement(icon, {size: icoSize})
                            )}
                            {children}
                            {icon && iconPosition === "right" && (
                                React.cloneElement(icon, {size: icoSize})
                            )}
                        </div>
                    )}
            </div>
        </>

    const handleClick = () => {
        if (action) {
            action();
        }
    }

    const element =
        <button
            type={type}
            className={clsx(variantStyles, sizeStyles, className, isLoading && "cursor-wait", fullWidth && "w-full justify-center", "relative animate")}
            onClick={handleClick}
            disabled={!!(disabled || isLoading)}
        >
            {content}
        </button>


    if (baseUrl) {
        if (linkType === LinkTypes.EXTERNAL) {
            return (
                <a href={baseUrl} target="_blank">{element}</a>
            );
        } else {
            return (
                <Link href={baseUrl}>{element}</Link>
            )
        }
    }

    return element;
}