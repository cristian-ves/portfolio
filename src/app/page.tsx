"use client"

import { Navbar } from "@/components/Navbar";
import { Portfolio, Main } from "../sections";
import { Skills } from "@/sections/Skills";
import { AboutMe } from "@/sections/AboutMe";
import { Contact } from "@/sections/Contact";
import { SectionDivider } from "@/components/SectionDivider";
import { RevealWrapper } from "@/components/RevealWrapper";
import { ScrollRestorer } from "@/components/ScrollRestorer";

export default function Home() {
    return (
        <>
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
