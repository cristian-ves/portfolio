import { Navbar } from "@/components/Navbar";
import { Portfolio, Main } from "../sections";
import { Skills } from "@/sections/Skills";
import { AboutMe } from "@/sections/AboutMe";
import { Contact } from "@/sections/Contact";

export default function Home() {
    return (
        <>
            <Main />
            <Navbar />
            <Portfolio />
            <Skills />
            <AboutMe />
            <Contact />
        </>
    );
}
