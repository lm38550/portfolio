import type { Metadata } from "next";
import "@/style/globals.css";

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
        <html lang="fr">
            <body className="antialiased">
                {children}
            </body>
        </html>
    );
}