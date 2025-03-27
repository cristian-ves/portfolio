import { Badge } from "./Badge";
import { BadgeInterface } from "@/helpers";

export const SkillsStack = ({
    icons,
    title,
}: {
    icons: BadgeInterface[];
    title: string;
}) => {
    return (
        <div>
            <h3 className="text-center font-bold text-xl">{title}</h3>
            <div className="flex flex-wrap gap-3 items-center justify-center mt-5 mb-3">
                {icons.map(({ icon, text }, i) => (
                    <Badge icon={icon} text={text} big key={i} />
                ))}
            </div>
        </div>
    );
};
