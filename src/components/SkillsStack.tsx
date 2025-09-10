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
        <div className="md:w-full">
            <h3 className="text-center font-bold text-xl md:text-left">{title}</h3>
            <div className="flex flex-wrap gap-3 items-center justify-center mt-5 mb-3 md:justify-start md:gap-5">
                {icons.map(({ icon, text }, i) => (
                    <Badge icon={icon} text={text} big key={i} />
                ))}
            </div>
        </div>
    );
};
