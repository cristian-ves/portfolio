export default function Loading() {
    return (
        <main className="w-full flex flex-col gap-8 py-12">
            <div className="h-8 w-48 rounded bg-white/10 animate-pulse" />
            {[1, 2, 3].map(i => (
                <div key={i} className="h-48 w-full rounded-lg bg-white/5 animate-pulse" />
            ))}
        </main>
    );
}