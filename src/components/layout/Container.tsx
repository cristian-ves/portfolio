
import { forwardRef, ReactNode } from "react";

interface ContainerProps {
    children: ReactNode;
    id?: string;
    className?: string;
    as?: "section" | "article" | "main";
}

export const Container = forwardRef<HTMLElement, ContainerProps>(
    ({ children, id, className = "", as: Tag = "section" }, ref) => {
        return (
            <Tag
                id={id}
                ref={ref as React.Ref<HTMLElement>}
                className={`w-full flex flex-col gap-6 ${className}`}
            >
                {children}
            </Tag>
        );
    }
);

Container.displayName = "Container";