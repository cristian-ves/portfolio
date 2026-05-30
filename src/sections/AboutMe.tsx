import { Container } from "@/components/Container";

export const AboutMe = () => {
    return (
        <Container id="About me" as="article">
            <h2 className="section-title">About me</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-white/75 leading-relaxed">
                <p>
                    I'm a <strong className="text-cyan-400 font-semibold">Software Developer</strong> focused on{" "}
                    <strong className="text-cyan-400 font-semibold">frontend development</strong> with{" "}
                    <strong className="text-cyan-400 font-semibold">React.js</strong> and <strong className="text-cyan-400 font-semibold">Next.js</strong>, with
                    additional experience in <strong className="text-cyan-400 font-semibold">backend technologies</strong>{" "}
                    like <strong className="text-cyan-400 font-semibold">Node.js</strong>, <strong className="text-cyan-400 font-semibold">Golang</strong>, and{" "}
                    <strong className="text-cyan-400 font-semibold">SQL</strong>. I also have strong{" "}
                    <strong className="text-cyan-400 font-semibold">Java proficiency</strong>, having developed complex
                    projects that sharpened my problem-solving skills.
                </p>
                <p>
                    I'm in my <strong className="text-cyan-400 font-semibold">4th year of Systems Engineering</strong> at
                    the <strong className="text-cyan-400 font-semibold">University of San Carlos of Guatemala</strong> and
                    have expanded my knowledge through platforms like{" "}
                    <strong className="text-cyan-400 font-semibold">Udemy</strong>, <strong className="text-cyan-400 font-semibold">Codecademy</strong>, and{" "}
                    <strong className="text-cyan-400 font-semibold">freeCodeCamp</strong> — starting my journey back in 2021.
                </p>
                <p>
                    Professionally, I've worked for over{" "}
                    <strong className="text-cyan-400 font-semibold">2.5 years</strong> at <a href="https://www.telusdigital.com" target="_blank"><strong className="text-cyan-400 font-semibold">TELUS Digital</strong></a>,
                    growing into a <strong className="text-cyan-400 font-semibold">Senior Customer Service Representative</strong>, which
                    strengthened my communication, adaptability, and understanding of customer experience.
                </p>
                <p>
                    I value <strong className="text-cyan-400 font-semibold">continuous learning, teamwork</strong>, and{" "}
                    <strong className="text-cyan-400 font-semibold">responsibility</strong>, always looking for
                    opportunities to grow and contribute to impactful projects.
                </p>
            </div>
        </Container>
    );
};