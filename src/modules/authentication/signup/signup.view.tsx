import {Container} from "@/ui/components/container/container";
import Image from "next/image";
import {Box} from "@/ui/design-system/box/box";
import {Typography} from "@/ui/design-system/typography/typography";
import Link from "next/link";
import {SignupForm} from "@/modules/authentication/signup/signup.form";

export const SignupView = () => {
    return (
        <Container className="grid grid-cols-2 gap-20 my-10">
            <div className="flex items-center">
                <div className="relative w-full h-[531px]">
                    <Image fill src="/svg/char1.svg" alt="person's face" className="object-scale-down"/>

                </div>
            </div>
            <div className="flex items-center">
                <Box padding_y="py-5">
                    <div className="flex items-center justify-between gap-2">
                        <Typography variant="h4" component="h2">
                            Inscription
                        </Typography>
                        <div className="flex items-center gap-1">
                            <Typography variant="caption-sm" component="p">
                                Tu as déjà un compte ?
                            </Typography>
                            <Typography variant="caption-sm" component="span" className="text-day dark:text-night">
                                <Link href="/formation/login">Connexion</Link>
                            </Typography>
                        </div>
                    </div>
                    <SignupForm />
                </Box>
            </div>
        </Container>
    );
}