import { Container } from "@/components/Container";

export const AboutMe = () => {
    return (
        <Container id="About me" as="article">
            <h2 className="section-title">About me</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-white/75 leading-relaxed">
                <p>
                    I'm a <strong className="text-cyan-400 font-semibold">Software Developer</strong> focused on{" "}
                    <strong className="text-cyan-400 font-semibold">frontend development</strong> with{" "}
                    <strong className="text-cyan-400 font-semibold">React.js</strong> and{" "}
                    <strong className="text-cyan-400 font-semibold">Next.js</strong>, with backend experience in{" "}
                    <strong className="text-cyan-400 font-semibold">Spring Boot</strong>,{" "}
                    <strong className="text-cyan-400 font-semibold">Node.js</strong>, and{" "}
                    <strong className="text-cyan-400 font-semibold">REST APIs</strong>. I apply clean architecture
                    principles and work comfortably with <strong className="text-cyan-400 font-semibold">SQL databases</strong> across the full stack.
                </p>
                <p>
                    I'm in my <strong className="text-cyan-400 font-semibold">4th year of Systems Engineering</strong> at
                    the <strong className="text-cyan-400 font-semibold">University of San Carlos of Guatemala</strong> and
                    have expanded my knowledge through{" "}
                    <strong className="text-cyan-400 font-semibold">Udemy</strong>,{" "}
                    <strong className="text-cyan-400 font-semibold">Codecademy</strong>, and{" "}
                    <strong className="text-cyan-400 font-semibold">freeCodeCamp</strong> — starting my journey back in 2021.
                </p>
                <p>
                    Professionally, I spent <strong className="text-cyan-400 font-semibold">2.5 years at{" "}
                    </strong><a href="https://www.telusdigital.com" target="_blank" className="text-purple-400 font-semibold hover:text-purple-300 transition-colors">
                        TELUS Digital
                    </a> as a <strong className="text-cyan-400 font-semibold">Senior Customer Service Specialist</strong>, supporting
                    international clients and developing practical understanding of{" "}
                    <strong className="text-cyan-400 font-semibold">user behavior and UX pain points</strong> through
                    real-world application support.
                </p>
                <p>
                    I value <strong className="text-cyan-400 font-semibold">continuous learning, teamwork</strong>, and{" "}
                    <strong className="text-cyan-400 font-semibold">clean, maintainable code</strong> — always looking for
                    opportunities to grow and contribute to impactful projects.
                </p>
            </div>
        </Container>
    );
};