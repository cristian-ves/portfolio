import type { Metadata, Viewport } from "next";
import { Exo_2 } from "next/font/google";
import "./globals.css";
import "animate.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { ShootingStars } from "@/components/ShootingStars";
import { NavigationProvider } from "@/context/NavigationContext";
config.autoAddCss = false;

const exo_2 = Exo_2({
    variable: "--font-exo-2",
    subsets: ["latin"],
    display: "swap",
});

export const metadata: Metadata = {
    title: "Cristian's Portfolio",
    description:
        "I build modern, responsive web apps using React.js, Next.js, and Java. With a strong focus on UI/UX and performance, I craft seamless user experiences. I also work with Node.js and Golang to develop scalable full-stack solutions.",
};

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={exo_2.variable}>
            <body
                className="relative flex flex-col items-center"
                style={{
                    backgroundImage: "url('/background.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundAttachment: "fixed",
                }}
            >
                {/* Dark overlay */}
                <div className="fixed inset-0 bg-black/80 -z-10" />

                {/* Nebula glow — above overlay, below content */}
                <div
                    className="fixed inset-0 pointer-events-none z-0"
                    style={{
                        background: `
                            radial-gradient(ellipse 100% 35% at 50% 0%, rgba(6, 182, 212, 0.03) 0%, transparent 100%),
                            radial-gradient(ellipse 60% 25% at 15% 50%, rgba(6, 182, 212, 0.015) 0%, transparent 100%)
                        `
                    }}
                />

                {/* Main content container */}
                <NavigationProvider>
                    <div className="relative w-full max-w-5xl mx-auto flex flex-col text-white items-center overflow-x-clip gap-16 px-4 md:px-8 pb-32">
                        {children}
                    </div>
                </NavigationProvider>

                <ShootingStars />
            </body>
        </html>
    );
}