"use client";
import {
    faCopy,
    faEnvelope,
    faFileLines,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { ContactButton, ContactButtonProps } from "../components/ContactButton";
import { Container } from "@/components/Container";

const buttons: ContactButtonProps[] = [
    {
        icon: faCopy,
        onClick: () => navigator.clipboard.writeText("alejandrovasquezesc@gmail.com"),
        text: "alejandrovasquezesc@gmail.com",
    },
    {
        icon: faEnvelope,
        onClick: () => { },
        text: "Click to email me",
    },
    {
        icon: faFileLines,
        onClick: () => { },
        text: "Download CV",
    },
    {
        icon: faGithub,
        onClick: () => { },
        text: "GitHub",
    },
    {
        icon: faLinkedin,
        onClick: () => { },
        text: "LinkedIn",
    },
];

export const Contact = () => {
    return (
        <Container id="Contact">
            <h2 className="section-title">Contact</h2>
            {/* grid-cols-1 mobile, 2 on md, 3 on lg — no orphan issues */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                {buttons.map(({ icon, onClick, text }, i) => (
                    <ContactButton icon={icon} onClick={onClick} text={text} key={i} />
                ))}
            </div>
        </Container>
    );
};