import type {Metadata} from "next";
import {K2D} from 'next/font/google'
import "@/style/globals.css";
import {Navigation} from "@/ui/components/navigation/navigation";
import {Footer} from "@/ui/components/navigation/footer";
import {Breadcrumbs} from "@/ui/components/breadcrumbs/breadcrumbs";

const k2d = K2D({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
    style: ['normal', 'italic'],
    variable: '--font-k2d',
})

export const metadata: Metadata = {
    title: "Louis Morel - Étudiant en informatique",
    description: "Portfolio de Louis Morel - Étudiant en informatique",
};

const isDisplayBreadCrumbs : boolean = false;

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fr" className={k2d.variable}>
            <body className="antialiased">
                <Navigation/>
                {isDisplayBreadCrumbs && <Breadcrumbs/>}
                {children}
                <Footer/>
            </body>
        </html>
    );
}