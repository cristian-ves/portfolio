import { backendIcons, frontendIcons, toolsIcons } from "@/helpers";
import { SkillsStack } from "../components/SkillsStack";
import Image from "next/image";

export const Skills = () => {
    return (
        <section
            className="flex flex-col items-center w-80 my-5 gap-8 md:w-5/6 md:relative"
            id="Skills"
            >

            <h2 className="text-2xl w-full font-bold">Skills</h2>

            <div className="flex flex-col gap-6 w-full">
                <SkillsStack icons={frontendIcons} title="Frontend" />
                <SkillsStack icons={backendIcons} title="Backend" />
                <SkillsStack icons={toolsIcons} title="Tools" />
            </div>

            <h2 className="text-2xl w-full font-bold">Soft skills</h2>

            <div className="flex flex-col gap-6 w-full">

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

            </div>

            <Image
                src="/skills/saturn.webp"
                objectFit="cover"
                alt="Saturn"
                quality={90}
                width={450}
                height={196}
                className="rounded-lg absolute bottom-0 -right-65 -z-10 hidden md:block"
            />
                
        </section>
    );
};
