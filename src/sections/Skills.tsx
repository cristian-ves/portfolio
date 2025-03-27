import { backendIcons, frontendIcons, toolsIcons } from "@/helpers";
import { SkillsStack } from "../components/SkillsStack";

export const Skills = () => {
    return (
        <section
            className="flex flex-col items-center w-80 my-5 gap-6"
            id="Skills"
        >
            <h2 className="text-2xl w-full font-bold">Skills</h2>
            <SkillsStack icons={frontendIcons} title="Frontend" />
            <SkillsStack icons={backendIcons} title="Backend" />
            <SkillsStack icons={toolsIcons} title="Tools" />
            <h2 className="text-2xl w-full font-bold">Soft skills</h2>
            <p>
                <strong>Problem-solving:</strong> Tackles challenges with
                critical thinking and efficient solutions.
            </p>
            <p>
                <strong>Communication:</strong> Conveys ideas clearly and
                collaborates effectively.
            </p>
            <p>
                <strong>Adaptability:</strong> Quickly adjusts to changing
                environments and technologies.
            </p>
        </section>
    );
};
