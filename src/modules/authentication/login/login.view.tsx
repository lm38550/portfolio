import {Container} from "@/ui/components/container/container";
import Image from "next/image";
import {Box} from "@/ui/design-system/box/box";
import {Typography} from "@/ui/design-system/typography/typography";
import Link from "next/link";
import {SignupForm} from "@/modules/authentication/signup/signup.form";
import {LoginForm} from "@/modules/authentication/login/login.form";
import {FormsType} from "@/types/forms";

interface Props {
    form: FormsType;
}

export const LoginView = ({form}: Props) => {
    return (
        <Container className="grid grid-cols-2 gap-20 my-10">
            <div className="flex items-center">
                <div className="relative w-full h-[531px]">
                    <Image fill src="/svg/char2.svg" alt="person's face" className="object-scale-down"/>

                </div>
            </div>
            <div className="flex items-center">
                <Box padding_y="py-5">
                    <div className="flex items-center justify-between gap-2">
                        <Typography variant="h4" component="h2">
                            Connexion
                        </Typography>
                        <div className="flex items-center gap-1">
                            <Typography variant="caption-sm" component="p">
                                Pas encore de compte ?
                            </Typography>
                            <Typography variant="caption-sm" component="span" className="text-day dark:text-night">
                                <Link href="/formation/signup">Inscription</Link>
                            </Typography>
                        </div>
                    </div>
                    <LoginForm form={form}/>
                    <Typography variant="caption-xsm" component="p" className="text-center">
                        <Link href="/formation/forgot-password">
                            Mot de passe perdu ?
                        </Link>
                    </Typography>
                </Box>
            </div>
        </Container>
    );
}