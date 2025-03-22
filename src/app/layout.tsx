import type { Metadata } from "next";
import { Exo_2 } from "next/font/google";
import "./globals.css";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Image from "next/image";
config.autoAddCss = false;

const exo_2 = Exo_2({
    variable: "--font-exo-2",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Cristian's Portfolio",
    description:
        "I build modern, responsive web apps using React.js, Next.js, and Java. With a strong focus on UI/UX and performance, I craft seamless user experiences. I also work with Node.js and Golang to develop scalable full-stack solutions.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`relative flex flex-col items-center`}
                style={{
                    backgroundImage: "url('/background.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundAttachment: "fixed",
                }}
            >
                <div className="fixed inset-0 bg-black/60 -z-10"></div>

                <div className="relative min-h-screen w-full flex flex-col text-white items-center">
                    {children}
                </div>
            </body>
        </html>
    );
}
