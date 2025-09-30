import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faLink } from "@fortawesome/free-solid-svg-icons";

import { portfolioApps } from "@/helpers";
import { PortfolioApp } from "@/components/PortfolioApp";

export const Portfolio = () => {
    return (
        <section
            className="flex flex-col items-center w-80 my-5 gap-11 relative md:w-5/6 2xl:flex-row 2xl:flex-wrap 2xl:w-11/12 2xl:justify-center 2xl:gap-x-16"
            id="Portfolio"
        >
            <h2 className="text-2xl w-full font-bold lg:text-center">Portfolio</h2>
            {/* TODO: Load 4 projects */}
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
