"use client";

import { PortfolioAppInterface } from "@/data";
import { useVideoModal } from "@/hooks/useVideoModal";
import { Badge } from "../ui";
import { GithubButton, LiveSiteButton, CardMedia, VideoModal } from './';

export const PortfolioAppCard = ({ app }: { app: PortfolioAppInterface }) => {
    const { title, src, badges, desc, deploy, github, coldStart } = app;
    const { modalOpen, isPlaying, videoRef, openModal, closeModal, togglePlay } = useVideoModal();

    return (
        <div className="relative flex flex-col gap-4 w-full md:flex-row md:items-center md:justify-between md:gap-8 p-5">

            {/* Glass background — separate layer so backdrop-filter never clips dropdown */}
            <div
                className="absolute inset-0 rounded-lg border border-white/15 backdrop-blur-md -z-10"
                style={{ background: "var(--glass-bg)" }}
            />

            {/* Left: text content */}
            <div className="flex flex-col gap-4 md:flex-1">
                <h3 className="font-bold text-xl">{title}</h3>
                <p className="text-white/80 text-[15px] leading-relaxed">{desc}</p>

                <div className="flex gap-2 flex-wrap">
                    {badges.map((badge, i) => (
                        <Badge icon={badge.icon} text={badge.text} key={i} />
                    ))}
                </div>

                <div className="flex items-start gap-3">
                    <GithubButton github={github} />
                    {deploy !== "" && (
                        <LiveSiteButton deploy={deploy} coldStart={coldStart} />
                    )}
                </div>
            </div>

            {/* Right: media */}
            <CardMedia
                src={src}
                title={title}
                video={app.video}
                onPlayClick={openModal}
            />

            {/* Video modal — renders into document.body via portal */}
            {modalOpen && app.video && (
                <VideoModal
                    src={`/portfolio/demos/${app.video}.mp4`}
                    isPlaying={isPlaying}
                    videoRef={videoRef}
                    onClose={closeModal}
                    togglePlay={togglePlay}
                />
            )}
        </div>
    );
};