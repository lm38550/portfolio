"use client"

import {Container} from "@/ui/components/container/container";
import {Typography} from "@/ui/design-system/typography/typography";
import {Button} from "@/ui/design-system/button/button";
import Link from "next/link";
import {RiGithubFill, RiHome9Fill} from "react-icons/ri";
import {useEffect, useRef} from "react";
import ReactCanvasConfetti from "react-canvas-confetti";

export const MailSent = () => {
    const canvasStyles = {
        position: "fixed",
        pointerEvents: "none",
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
    } as React.CSSProperties;

    const refAnimationInstance = useRef<any>(null);

    const getInstance = (instance: any) => {

        refAnimationInstance.current = instance;

    };

    const makeShot = () => {
        if (refAnimationInstance.current) {
            refAnimationInstance.current({
                particleCount: 150,
                spread: 90,
                origin: {
                    y: 0.6,
                },
            });
        }
    };

    useEffect(() => {
        makeShot();
    }, []);

    return (
        <div className="bg-day-100 dark:bg-night-100">
            <ReactCanvasConfetti refConfetti={getInstance} style={canvasStyles}/>
            <Container className="flex flex-col items-center gap-2">
                <Typography variant="h2" component="h2" className="pt-30 pb-12 text-center">Merci de m'avoir contacté</Typography>
                <Link href="/">
                    <Button size="large" iconPosition="right" icon={<RiHome9Fill/>}>
                        Retourner au menu
                    </Button>
                </Link>
                <Link href="/contact">
                    <Typography variant="caption-sm">Me contacter à nouveau</Typography>
                </Link>
            </Container>
        </div>
    )
}