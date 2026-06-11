import { PortfolioAppCard } from "@/components/PortfolioAppCard";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { getAllApps } from "../helpers/helpers";
import { RevealWrapper } from "@/components/RevealWrapper";

export default function ProjectsPage() {
  const apps = getAllApps();
  return (
    <main className="w-full flex flex-col gap-8">
      <div
        className="sticky top-0 z-20 w-full py-4 flex items-center gap-5"
        style={{
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
          background:
            "linear-gradient(to bottom, rgba(13,13,13,0.6) 0%, rgba(13,13,13,0.15) 100%)",
          borderBottom: "1px solid rgba(255,255,255,0.03)",
          boxShadow: "0 1px 0 0 rgba(6,182,212,0.04)",
        }}
      >
        <Link
          href="/"
          className="glass-btn flex items-center gap-2 px-3 py-1.5 text-sm text-white/70 hover:text-white"
        >
          <FontAwesomeIcon icon={faAngleLeft} className="fa-fw" />
          <span>Back</span>
        </Link>
        <h1 className="section-title mb-0!">All Projects</h1>
      </div>
      <RevealWrapper className="flex flex-col gap-6 pb-16">
        {apps.map((app, i) => (
          <PortfolioAppCard app={app} key={i} />
        ))}
      </RevealWrapper>
    </main>
  );
}
