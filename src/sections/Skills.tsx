"use client"
import { backendIcons, frontendIcons, toolsIcons } from "@/data";
import { SkillsStack } from "../components/SkillsStack";
import { Container } from "@/components/Container";
import { useReveal } from "@/hooks/useReveal";

export const Skills = () => {
    const ref = useReveal();
    return (
        <Container id="Skills" ref={ref}>
            <h2 className="section-title">Skills</h2>
            <div className="flex flex-col gap-8 w-full">
                <SkillsStack icons={frontendIcons} title="Frontend" />
                <SkillsStack icons={backendIcons} title="Backend" />
                <SkillsStack icons={toolsIcons} title="Tools" />
            </div>

            <h2 className="section-title mt-4">Soft Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                    { label: "Problem-solving", desc: "Tackles challenges with critical thinking and efficient solutions." },
                    { label: "Communication", desc: "Conveys ideas clearly and collaborates effectively." },
                    { label: "Adaptability", desc: "Quickly adjusts to changing environments and technologies." },
                ].map(({ label, desc }) => (
                    <div key={label} className="glass-card p-4 flex flex-col gap-1">
                        <p className="font-semibold text-sm text-cyan-400">{label}</p>
                        <p className="text-white/75 text-sm">{desc}</p>
                    </div>
                ))}
            </div>
        </Container>
    );
};