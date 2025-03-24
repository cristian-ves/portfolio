import { Navbar } from "@/components/Navbar";
import { Portfolio, Main } from "../sections";
import { Skills } from "@/sections/Skills";

export default function Home() {
    return (
        <>
            <Main />
            <Navbar />
            <Portfolio />
            <Skills />
        </>
    );
}
