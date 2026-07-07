/**
 * Sends a lightweight HEAD/GET request to wake up free-tier backends
 * (e.g. Render) before the user actually navigates to a live demo.
 * Fire-and-forget — failures are silently ignored since this is just a warmup.
 */

interface PingTarget {
    name: string;
    url: string;
}

const PING_TARGETS: PingTarget[] = [
    {
        name: "hospital-backend",
        url: "https://hospital-backend-aehn.onrender.com/api/resources",
    },
    {
        name: "ecommerce-backend",
        url: "https://ecommerce-backend-f4f3.onrender.com/api/auth/ping",
    },
];

const pingTarget = async ({ name, url }: PingTarget): Promise<void> => {
    try {
        await fetch(url, { method: "GET", mode: "no-cors" });
    } catch {
        console.debug(`[ping] ${name} warmup request sent`);
    }
};

export const pingAllBackends = (): void => {
    PING_TARGETS.forEach(pingTarget);
};
