
import { portfolioApps } from "@/data";
import { PortfolioAppCard } from "@/components/PortfolioAppCard";
import { Container } from "@/components/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { getFeaturedApps } from "@/app/helpers/helpers";

export const Portfolio = () => {
    return (
        <Container id="Portfolio">
            <h2 className="section-title">Portfolio</h2>
            <div className="flex flex-col gap-6">
                {getFeaturedApps().map((app, i) => (
                    <PortfolioAppCard app={app} key={i} />
                ))}
            </div>
            <Link href='/projects'>
                <div className="flex flex-col items-center cursor-pointer">
                    <p className="text-sm text-white/70">See more</p>
                    <FontAwesomeIcon
                        icon={faAngleDown}
                        className="fa-fw text-4xl text-white/70"
                    />
                </div>
            </Link>
        </Container>
    );
};