export default function Loading() {
    return (
        <main className="w-full flex flex-col gap-8">
            <div
                className="sticky top-0 z-20 w-full py-4 flex items-center gap-5"
                style={{
                    backdropFilter: "blur(8px)",
                    WebkitBackdropFilter: "blur(8px)",
                    background: "linear-gradient(to bottom, rgba(13,13,13,0.6) 0%, rgba(13,13,13,0.15) 100%)",
                    borderBottom: "1px solid rgba(255,255,255,0.03)",
                    boxShadow: "0 1px 0 0 rgba(6,182,212,0.04)",
                }}
            >
                <div className="w-16 h-8 rounded bg-white/10 animate-pulse" />
                <div className="w-32 h-7 rounded bg-white/10 animate-pulse" />
            </div>
            <div className="flex flex-col gap-6 pb-16">
                {[1, 2, 3].map(i => (
                    <div
                        key={i}
                        className="relative p-5 rounded-lg border border-white/15 flex flex-col md:flex-row gap-6 animate-pulse"
                        style={{ background: "var(--glass-bg)" }}
                    >
                        <div className="flex flex-col gap-4 flex-1">
                            <div className="h-6 w-40 rounded bg-white/10" />
                            <div className="h-4 w-full rounded bg-white/10" />
                            <div className="h-4 w-3/4 rounded bg-white/10" />
                            <div className="flex gap-2">
                                <div className="h-6 w-16 rounded-full bg-white/10" />
                                <div className="h-6 w-16 rounded-full bg-white/10" />
                                <div className="h-6 w-16 rounded-full bg-white/10" />
                            </div>
                            <div className="flex gap-3">
                                <div className="h-8 w-24 rounded bg-white/10" />
                                <div className="h-8 w-24 rounded bg-white/10" />
                            </div>
                        </div>
                        <div className="hidden md:block w-75 h-50 rounded-md bg-white/10 flex-shrink-0" />
                    </div>
                ))}
            </div>
        </main>
    );
}