interface LiveSiteButtonProps {
    deploy: string;
    coldStart?: boolean;
}

export const LiveSiteButton = ({ deploy, coldStart }: LiveSiteButtonProps) => {
    return (
        <div className="flex flex-col lg:flex-row gap-1 items-start lg:items-center">
            <a
                className="flex items-center gap-2 py-1.5 px-3 text-sm text-white rounded-sm"
                style={{
                    background: "linear-gradient(135deg, rgba(var(--nebula-rgb), 0.25), rgba(var(--nebula-rgb), 0.08))",
                    border: "1px solid rgba(var(--nebula-rgb), 0.35)",
                    backdropFilter: "blur(10px)",
                    WebkitBackdropFilter: "blur(10px)",
                    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.1)",
                }}
                href={deploy}
                target="_blank"
                rel="noopener noreferrer"
            >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="shrink-0">
                    <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>Live site</span>
            </a>
            {coldStart && (
                <span className="text-xs text-white/40 px-1">
                    First load ~50s — free-tier server
                </span>
            )}
        </div>
    );
};