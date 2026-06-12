
import { PortfolioAppCard } from "@/components/PortfolioAppCard";
import { Container } from "@/components/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { getFeaturedApps } from "@/app/helpers/helpers";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export const Portfolio = () => {

    const router = useRouter();

    useEffect(() => {
        router.prefetch("/projects");
    }, [router])

    const handleSeeMore = () => {
        sessionStorage.setItem("scroll:/", window.scrollY.toString());
        router.push("/projects");
    }

    return (
        <Container id="Portfolio">
            <h2 className="section-title">Portfolio</h2>
            <div className="flex flex-col gap-6">
                {getFeaturedApps().map((app, i) => (
                    <PortfolioAppCard app={app} key={i} />
                ))}
            </div>
            <button className="flex flex-col items-center cursor-pointer" onClick={handleSeeMore}>
                <p className="text-sm text-white/70">See more</p>
                <FontAwesomeIcon
                    icon={faAngleDown}
                    className="fa-fw text-4xl text-white/70"
                />
            </button>
        </Container>
    );
};