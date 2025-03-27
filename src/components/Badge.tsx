import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";

interface BadgeProps {
    icon: IconDefinition | string;
    text: string;
    big?: boolean;
}

export const Badge = ({ icon, text, big = false }: BadgeProps) => {
    const size = big ? 20 : 16;
    return (
        <div className="bg-cyan-700 rounded-3xl px-2 py-0.5 flex gap-1 items-center justify-center">
            {typeof icon == "string" ? (
                <Image
                    src={`/svgs/${icon}.svg`}
                    width={size}
                    height={size}
                    alt={text}
                />
            ) : (
                <FontAwesomeIcon
                    icon={icon}
                    className={`fa-fw ${big && "text-xl"}`}
                />
            )}
            <p className={big ? "" : "text-sm"}>{text}</p>
        </div>
    );
};
