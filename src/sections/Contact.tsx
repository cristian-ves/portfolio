"use client";
import { faCopy, faEnvelope, faFileLines } from "@fortawesome/free-solid-svg-icons";
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
        href: "mailto:alejandrovasquezesc@gmail.com",
        text: "Send me an email",
    },
    {
        icon: faFileLines,
        href: "/cristian-vasquez-cv.pdf",
        download: true,
        text: "Download CV",
    },
    {
        icon: faGithub,
        href: "https://github.com/cristian-ves",
        text: "GitHub",
    },
    {
        icon: faLinkedin,
        href: "https://linkedin.com/in/cristian-vasquez-web-developer",
        text: "LinkedIn",
    },
];

export const Contact = () => {
    return (
        <Container id="Contact">
            <h2 className="section-title">Contact</h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                {buttons.map(({ icon, onClick, text, href, download }, i) => (
                    <ContactButton
                        icon={icon}
                        onClick={onClick}
                        text={text}
                        href={href}
                        download={download}
                        key={i}
                    />
                ))}
            </div>
        </Container>
    );
};