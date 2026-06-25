"use client"

import { Portfolio, Main, Skills, AboutMe, Contact } from "../sections";
import { SectionDivider } from "@/components/ui";
import { RevealWrapper, Navbar } from "@/components/layout";
import { ScrollRestorer, BackendWarmup } from "@/components/system";

export default function Home() {
    return (
        <>
            <BackendWarmup />
            <ScrollRestorer />
            <Main />
            <Navbar />
            <SectionDivider />
            <RevealWrapper><Portfolio /></RevealWrapper>
            <SectionDivider />
            <RevealWrapper><Skills /></RevealWrapper>
            <SectionDivider />
            <RevealWrapper><AboutMe /></RevealWrapper>
            <SectionDivider />
            <RevealWrapper><Contact /></RevealWrapper>
        </>
    );
}
