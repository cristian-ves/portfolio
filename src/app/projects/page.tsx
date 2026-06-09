import { PortfolioAppCard } from "@/components/PortfolioAppCard";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { getAllApps } from "../helpers/helpers";

export default function ProjectsPage() {
    const apps = getAllApps();
    return (
        <main className="w-full flex flex-col gap-8 py-12">
            <div className="flex items-center gap-3">
                <Link
                    href="/"
                    className="glass-btn flex items-center gap-2 px-3 py-1.5 text-sm text-white/70 hover:text-white"
                >
                    <FontAwesomeIcon icon={faAngleLeft} className="fa-fw" />
                    <span>Back</span>
                </Link>
                <h1 className="section-title mb-0">All Projects</h1>
            </div>
            <div className="flex flex-col gap-6">
                {apps.map((app, i) => (
                    <PortfolioAppCard app={app} key={i} />
                ))}
            </div>
        </main>
    );
}