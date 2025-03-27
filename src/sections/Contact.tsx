"use client";
import {
    faCopy,
    faEnvelope,
    faFileLines,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { ContactButton, ContactButtonProps } from "../components/ContactButton";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const buttons: ContactButtonProps[] = [
    {
        icon: faCopy,
        onClick: () => {
            navigator.clipboard.writeText("alejandrovasquezesc@gmail.com");
        },
        text: "alejandrovasquezesc@gmail.com",
    },
    {
        icon: faEnvelope,
        onClick: () => {},
        text: "Click to email me",
    },
    {
        icon: faFileLines,
        onClick: () => {},
        text: "Download CV",
    },
    {
        icon: faGithub,
        onClick: () => {},
        text: "Github",
    },
    {
        icon: faLinkedin,
        onClick: () => {},
        text: "Linkedin",
    },
];

export const Contact = () => {
    return (
        <section
            className="flex flex-col items-center w-80 my-5 gap-6"
            id="Contact"
        >
            <h2 className="text-2xl w-full font-bold mb-4">Contact</h2>
            <div className="flex flex-col items-center w-75 gap-7">
                {buttons.map(({ icon, onClick, text }, i) => (
                    <ContactButton
                        icon={icon}
                        onClick={onClick}
                        text={text}
                        key={i}
                    />
                ))}
            </div>
        </section>
    );
};
