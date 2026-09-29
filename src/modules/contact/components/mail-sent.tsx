"use client"

import {Container} from "@/ui/components/container/container";
import {Typography} from "@/ui/design-system/typography/typography";
import {Button} from "@/ui/design-system/button/button";
import Link from "next/link";
import {RiHome9Fill} from "react-icons/ri";
import {useCallback, useEffect, useRef} from "react";
import ReactCanvasConfetti from "react-canvas-confetti";

export const MailSent = () => {

    const refAnimationInstance = useRef<((opts: any) => void) | null>(null);

    const getInstance = useCallback(
        ({confetti}: {confetti: (opts: any) => void}) => {
            refAnimationInstance.current = confetti;
            console.log("Confetti instance:", confetti);
        },
        []
    );

    const canvasStyles = {
        zIndex: "9999999",
        position: "fixed",
        pointerEvents: "none",
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
    } as React.CSSProperties;

    const makeShot = useCallback((particleRatio: number, opts: any) => {
        if (!refAnimationInstance.current) {
            console.warn("Confetti instance not ready");
            return;
        }

        refAnimationInstance.current({
            ...opts,
            particleCount: Math.floor(150 * particleRatio),
            spread: 90,
            origin: {
                y: 0.6,
            },
        });
    }, []);

    const fire = useCallback(() => {
        makeShot(1, {
            spread: 100,
            startVelocity: 45,
            scalar: 1.1,
        });
    }, [makeShot]);

    useEffect(() => {
        fire();
    }, [fire]);

    return (
        <div className="bg-day-100 dark:bg-night-100">
            <ReactCanvasConfetti onInit={getInstance} style={canvasStyles}/>
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