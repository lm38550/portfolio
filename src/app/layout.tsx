import type { Metadata } from "next";
import { K2D } from 'next/font/google'
import "@/style/globals.css";

const k2d = K2D({
    subsets: ['latin'],
    weight: ['100','200','300','400','500','600','700','800'],
    style: ['normal', 'italic'],
    variable: '--font-k2d',
})

export const metadata: Metadata = {
    title: "Louis Morel",
    description: "Portfolio de Louis Morel - Étudiant en informatique",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fr" className={k2d.variable}>
            <body className="antialiased">
                {children}
            </body>
        </html>
    );
}