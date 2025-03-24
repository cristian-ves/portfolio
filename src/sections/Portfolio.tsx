import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faLink } from "@fortawesome/free-solid-svg-icons";

import { portfolioApps } from "@/helpers";
import { PortfolioApp } from "@/components/PortfolioApp";

export const Portfolio = () => {
    return (
        <section
            className="flex flex-col items-center w-80 my-5 gap-11"
            id="Portfolio"
        >
            <h2 className="text-2xl w-full font-bold">Portfolio</h2>
            {portfolioApps.map((app, i) => (
                <PortfolioApp app={app} key={i} />
            ))}
            <div className="flex flex-col items-center cursor-pointer">
                <p className="text-sm text-white/70">See more</p>
                <FontAwesomeIcon
                    icon={faAngleDown}
                    className="fa-fw text-4xl text-white/70"
                />
            </div>
        </section>
    );
};
