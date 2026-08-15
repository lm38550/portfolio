"use client"

import {Container} from "@/ui/components/container/container";
import {Logo} from "@/ui/design-system/logo/logo";
import {Typography} from "@/ui/design-system/typography/typography";
import {Button} from "@/ui/design-system/button/button";
import {RiSunLine, RiMoonLine} from "react-icons/ri";
import Link from "next/link";
import {ActiveLink} from "@/ui/components/navigation/active-link";
import {useEffect, useState} from "react";

interface Props {
}

export const Navigation = ({}: Props) => {
    const [theme, setTheme] = useState("default");

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        document.documentElement.classList.toggle("dark", newTheme === 'dark');
        localStorage.setItem("theme", newTheme);
    }

    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const storedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
        const systemTheme = mediaQuery.matches ? 'dark' : 'light';
        const initialTheme = storedTheme ?? systemTheme;

        setTheme(initialTheme);
        document.documentElement.classList.toggle('dark', initialTheme === 'dark');

        const handleSystemThemeChange = (event: MediaQueryListEvent) => {
            const newSystemTheme = event.matches ? 'dark' : 'light';

            localStorage.removeItem('theme');
            setTheme(newSystemTheme);
            document.documentElement.classList.toggle('dark', newSystemTheme === 'dark');
        };

        mediaQuery.addEventListener('change', handleSystemThemeChange);
        return () => mediaQuery.removeEventListener('change', handleSystemThemeChange);
    }, []);

    return (
        <div className="bg-day-300 dark:bg-night-300">
            <div className="w-full max-w-[90rem] mx-auto px-5 lg:px-10 flex items-center justify-between py-1.5 gap-7">
                <Link href="/">
                    <div className="flex items-center py-3 gap-3">
                        <Logo size="small"/>
                        <Typography variant="h3" component="h3">Louis Morel</Typography>
                    </div>
                </Link>
                <div className="flex items-center py-3 gap-3">
                    <Typography variant="h5" component="h5" className="flex items-center gap-3">
                        <ActiveLink href="/">
                            ACCUEIL
                        </ActiveLink>
                        <ActiveLink href="/projects">
                            PROJETS
                        </ActiveLink>
                        <ActiveLink href="/about">
                            À PROPOS
                        </ActiveLink>
                        <ActiveLink href="/contact">
                            CONTACT
                        </ActiveLink>
                    </Typography>

                    <Button action={toggleTheme} variant="ico" size="medium" iconTheme="primary" icon={theme === 'light' ? <RiMoonLine/> : <RiSunLine/>} className="animate"></Button>
                </div>
            </div>
        </div>
    )
}