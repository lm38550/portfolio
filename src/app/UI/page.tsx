"use client";

import "@/style/globals.css"
import {Button} from "@/ui/design-system/button/button";
import {RiUser6Fill, RiArrowRightLine, RiArrowLeftLine} from "react-icons/ri"
import {Spinner} from "@/ui/design-system/spinner/spinner";
import {Logo} from "@/ui/design-system/logo/logo";
import {Container} from "@/ui/components/container/container";
import {Navigation} from "@/ui/components/navigation/navigation";
import {Typography} from "@/ui/design-system/typography/typography";
import {Footer} from "@/ui/components/navigation/footer";
import {FooterVideo} from "@/ui/components/navigation/footer-video";


export default function Home() {
    console.log({Button, Spinner, Logo, Container});
    return (
        <>
            <Container>
                {/*---- TEXTES ----*/}

                <div className="p-5 border-b-2 border-day-300 dark:border-night-300">
                    <Typography variant="caption-sm" className="p-3 font-bold">Typography</Typography>
                    <div className="flex p-5 border-2 border-day-300 dark:border-night-300">
                        <Typography variant="caption-sm">H1</Typography>
                        <div className="flex p-5 items-center">
                            <Typography variant="h1">Ceci est un texte en H1. <br/> Voici un exemple de texte s'étallant sur plusieurs lignes.</Typography>
                        </div>
                    </div>
                    <div className="flex p-5 border-2 border-day-300 dark:border-night-300">
                        <Typography variant="caption-sm">H2</Typography>
                        <div className="flex p-5 items-center">
                            <Typography variant="h2">Ceci est un texte en H2. <br/> Voici un exemple de texte s'étallant sur plusieurs lignes.</Typography>
                        </div>
                    </div>
                    <div className="flex p-5 border-2 border-day-300 dark:border-night-300">
                        <Typography variant="caption-sm">H3</Typography>
                        <div className="flex p-5 items-center">
                            <Typography variant="h3">Ceci est un texte en H3. <br/> Voici un exemple de texte s'étallant sur plusieurs lignes.</Typography>
                        </div>
                    </div>
                    <div className="flex p-5 border-2 border-day-300 dark:border-night-300">
                        <Typography variant="caption-sm">H4</Typography>
                        <div className="flex p-5 items-center">
                            <Typography variant="h4">Ceci est un texte en H4. <br/> Voici un exemple de texte s'étallant sur plusieurs lignes.</Typography>
                        </div>
                    </div>
                    <div className="flex p-5 border-2 border-day-300 dark:border-night-300">
                        <Typography variant="caption-sm">H5</Typography>
                        <div className="flex p-5 items-center">
                            <Typography variant="h5">Ceci est un texte en H5. <br/> Voici un exemple de texte s'étallant sur plusieurs lignes.</Typography>
                        </div>
                    </div>
                    <div className="flex">
                        <div className="w-[50%] p-5 border-2 border-day-300 dark:border-night-300 space-y-2">
                            <Typography variant="caption-sm">BODY</Typography>
                            <div className="pb-5 space-y-2">
                                <Typography variant="body-xlg">Ceci est un texte en body XLARGE. <br/> Voici un exemple de texte s'étallant sur plusieurs lignes.</Typography>
                                <Typography variant="body-lg">Ceci est un texte en body LARGE. <br/> Voici un exemple de texte s'étallant sur plusieurs lignes.</Typography>
                                <Typography variant="body-base">Ceci est un texte en body BASE. <br/> Voici un exemple de texte s'étallant sur plusieurs lignes.</Typography>
                                <Typography variant="body-sm">Ceci est un texte en body SMALL. <br/> Voici un exemple de texte s'étallant sur plusieurs lignes.</Typography>
                            </div>
                        </div>
                        <div className="w-[50%] p-5 border-2 border-day-300 dark:border-night-300 space-y-2">
                            <Typography variant="caption-sm">CAPTION</Typography>
                            <div className="pb-5 space-y-2">
                                <Typography variant="caption-lg">Ceci est un texte en caption LARGE. <br/> Voici un exemple de texte s'étallant sur plusieurs lignes.</Typography>
                                <Typography variant="caption-base">Ceci est un texte en caption BASE. <br/> Voici un exemple de texte s'étallant sur plusieurs lignes.</Typography>
                                <Typography variant="caption-sm">Ceci est un texte en caption SMALL. <br/> Voici un exemple de texte s'étallant sur plusieurs lignes.</Typography>
                                <Typography variant="caption-xsm">Ceci est un texte en caption XSMALL. <br/> Voici un exemple de texte s'étallant sur plusieurs lignes.</Typography>
                            </div>
                        </div>
                    </div>
                </div>

                {/*---- BOUTONS ----*/}


                <div className="p-5 border-b-2 border-day-300 dark:border-night-300">
                    <Typography variant="caption-sm" className="p-3 font-bold">Button</Typography>

                    <div className="p-5 space-y-2 border-2 border-day-300 dark:border-night-300">
                        <Typography variant="caption-sm">Small</Typography>
                        <div className="flex items-center gap-2">
                            <Button isLoading size="small">Primary</Button>
                            <Button isLoading size="small" variant="secondary">Secondary</Button>
                            <Button isLoading size="small" variant="outline">Outline</Button>
                            <Button isLoading size="small" variant="disabled">Disabled</Button>
                            <Button isLoading size="small" variant="ico" iconTheme="primary" icon={<RiUser6Fill/>}>Test</Button>
                            <Button isLoading size="small" variant="ico" iconTheme="secondary" icon={<RiUser6Fill/>}>Test</Button>
                            <Button isLoading size="small" variant="ico" iconTheme="gray" icon={<RiUser6Fill/>}>Test</Button>
                            <Button isLoading size="small" icon={<RiArrowRightLine/>}>Primary</Button>
                        </div>
                        <div className="flex items-center gap-2">
                            <Button size="small">Primary</Button>
                            <Button size="small" variant="secondary">Secondary</Button>
                            <Button size="small" variant="outline">Outline</Button>
                            <Button size="small" variant="disabled">Disabled</Button>
                            <Button size="small" variant="ico" iconTheme="primary" icon={<RiUser6Fill/>}>Test</Button>
                            <Button size="small" variant="ico" iconTheme="secondary" icon={<RiUser6Fill/>}>Test</Button>
                            <Button size="small" variant="ico" iconTheme="gray" icon={<RiUser6Fill/>}>Test</Button>
                            <Button size="small" icon={<RiArrowRightLine/>}>Primary</Button>
                            <Button size="small" icon={<RiArrowLeftLine/>} iconPosition="left">Primary</Button>
                        </div>
                    </div>

                    <div className="p-5 space-y-2 border-2 border-day-300 dark:border-night-300">
                        <Typography variant="caption-sm">Medium</Typography>
                        <div className="flex items-center gap-2">
                            <Button isLoading>Primary</Button>
                            <Button isLoading variant="secondary">Secondary</Button>
                            <Button isLoading variant="outline">Outline</Button>
                            <Button isLoading variant="disabled">Disabled</Button>
                            <Button isLoading variant="ico" iconTheme="primary" icon={<RiUser6Fill/>}>Test</Button>
                            <Button isLoading variant="ico" iconTheme="secondary" icon={<RiUser6Fill/>}>Test</Button>
                            <Button isLoading variant="ico" iconTheme="gray" icon={<RiUser6Fill/>}>Test</Button>
                            <Button isLoading icon={<RiArrowRightLine/>}>Primary</Button>
                        </div>
                        <div className="flex items-center gap-2">
                            <Button>Primary</Button>
                            <Button variant="secondary">Secondary</Button>
                            <Button variant="outline">Outline</Button>
                            <Button variant="disabled">Disabled</Button>
                            <Button variant="ico" iconTheme="primary" icon={<RiUser6Fill/>}>Test</Button>
                            <Button variant="ico" iconTheme="secondary" icon={<RiUser6Fill/>}>Test</Button>
                            <Button variant="ico" iconTheme="gray" icon={<RiUser6Fill/>}>Test</Button>
                            <Button icon={<RiArrowRightLine/>}>Primary</Button>
                            <Button icon={<RiArrowLeftLine/>} iconPosition="left">Primary</Button>
                        </div>
                    </div>

                    <div className="p-5 space-y-2 border-2 border-day-300 dark:border-night-300">
                        <Typography variant="caption-sm">Large</Typography>
                        <div className="flex items-center gap-2">
                            <Button isLoading size="large">Primary</Button>
                            <Button isLoading size="large" variant="secondary">Secondary</Button>
                            <Button isLoading size="large" variant="outline">Outline</Button>
                            <Button isLoading size="large" variant="disabled">Disabled</Button>
                            <Button isLoading size="large" variant="ico" iconTheme="primary" icon={<RiUser6Fill/>}>Test</Button>
                            <Button isLoading size="large" variant="ico" iconTheme="secondary" icon={<RiUser6Fill/>}>Test</Button>
                            <Button isLoading size="large" variant="ico" iconTheme="gray" icon={<RiUser6Fill/>}>Test</Button>
                            <Button isLoading size="large" icon={<RiArrowRightLine/>}>Primary</Button>
                        </div>
                        <div className="flex items-center gap-2">
                            <Button size="large">Primary</Button>
                            <Button size="large" variant="secondary">Secondary</Button>
                            <Button size="large" variant="outline">Outline</Button>
                            <Button size="large" variant="disabled">Disabled</Button>
                            <Button size="large" variant="ico" iconTheme="primary" icon={<RiUser6Fill/>}>Test</Button>
                            <Button size="large" variant="ico" iconTheme="secondary" icon={<RiUser6Fill/>}>Test</Button>
                            <Button size="large" variant="ico" iconTheme="gray" icon={<RiUser6Fill/>}>Test</Button>
                            <Button size="large" icon={<RiArrowRightLine/>}>Primary</Button>
                            <Button size="large" icon={<RiArrowLeftLine/>} iconPosition="left">Primary</Button>
                        </div>
                    </div>
                </div>

                {/*---- OTHER ----*/}

                <div className="p-5 border-day-300 dark:border-night-300">
                    <Typography variant="caption-sm" className="p-3 font-bold">Others</Typography>
                    <div className="flex">
                        <div className="w-[50%] p-5 border-2 border-day-300 dark:border-night-300 space-y-2">
                            <Typography variant="caption-sm">Logo</Typography>
                            <div className="flex items-center pb-5 space-x-2">
                                <Logo size="very-small"/>
                                <Logo size="small"/>
                                <Logo/>
                                <Logo size="large"/>
                            </div>
                        </div>
                        <div className="w-[50%] p-5 border-2 border-day-300 dark:border-night-300 space-y-2">
                            <Typography variant="caption-sm">Spinner</Typography>
                            <div className="flex items-center pb-5 space-x-2">
                                <Spinner size="small"/>
                                <Spinner/>
                                <Spinner size="large"/>
                                <Spinner size="x-large"/>
                            </div>
                            <div className="flex items-center pb-5 space-x-2 bg-day-300 dark:bg-night-300">
                                <Spinner size="small" variant="outline"/>
                                <Spinner variant="outline"/>
                                <Spinner size="large" variant="outline"/>
                                <Spinner size="x-large" variant="outline"/>
                            </div>
                            <div className="flex items-center pb-5 space-x-2">
                                <Spinner size="small" variant="negative"/>
                                <Spinner variant="negative"/>
                                <Spinner size="large" variant="negative"/>
                                <Spinner size="x-large" variant="negative"/>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <FooterVideo/>
            <br/>
        </>
    )
}