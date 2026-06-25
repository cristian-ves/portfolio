import Image from "next/image";

interface CardMediaProps {
    src: string;
    title: string;
    video?: string;
    onPlayClick: () => void;
}

export const CardMedia = ({ src, title, video, onPlayClick }: CardMediaProps) => {
    return (
        <>
            {/* Desktop — hidden on mobile */}
            <div className="hidden md:block flex-shrink-0 relative w-[300px] rounded-md overflow-hidden">
                {video ? (
                    <div
                        className="relative cursor-pointer group rounded-md overflow-hidden"
                        onClick={onPlayClick}
                    >
                        <Image
                            src={`/portfolio/${src}.png`}
                            alt={title}
                            width={300}
                            height={200}
                            className="rounded-md object-cover transition-transform duration-300 group-hover:scale-105"
                            style={{ width: "300px", height: "auto" }}
                        />
                        <div
                            className="absolute inset-0 flex items-center justify-center transition-all duration-300"
                            style={{ background: "rgba(5,5,8,0.25)" }}
                        >
                            <div
                                className="w-13 h-13 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                                style={{
                                    background: "rgba(255,255,255,0.08)",
                                    backdropFilter: "blur(8px)",
                                    border: "1px solid rgba(var(--nebula-rgb), 0.5)",
                                    boxShadow: "0 0 20px rgba(var(--nebula-rgb), 0.4)",
                                }}
                            >
                                <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
                                    <path d="M4 2.5L15 9L4 15.5V2.5Z" fill="var(--nebula-light)" />
                                </svg>
                            </div>
                        </div>
                    </div>
                ) : (
                    <Image
                        src={`/portfolio/${src}.png`}
                        alt={title}
                        width={300}
                        height={200}
                        className="rounded-md object-cover"
                        style={{ width: "300px", height: "auto" }}
                    />
                )}
            </div>

            {/* Mobile — shown below content */}
            <div className="md:hidden w-full">
                <Image
                    src={`/portfolio/${src}.png`}
                    alt={title}
                    width={400}
                    height={250}
                    className="rounded-md object-cover"
                    style={{ width: "100%", height: "auto" }}
                />
            </div>
        </>
    );
};