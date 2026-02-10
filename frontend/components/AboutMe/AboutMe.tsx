import Badge from "../Badge";
import aboutMeImage from "../../src/assets/about_me.webp";

export default function AboutMe() {
    return (
        <section
            id="about-me"
            className="relative flex w-full justify-center px-4 sm:px-6"
        >
            <div className="relative w-full max-w-[1200px] py-[clamp(2.5rem,6vw,5rem)]">
                <div className="relative flex flex-col gap-[clamp(1.75rem,4vw,3rem)] p-[clamp(1.25rem,3vw,2.5rem)] md:flex-row md:items-center">
                    <div className="relative mx-auto w-[clamp(240px,80vw,400px)] shrink-0 md:mx-0 md:w-[400px]">
                        <img
                            src={aboutMeImage}
                            alt="Portrait of Milan White"
                            loading="lazy"
                            decoding="async"
                            className="h-[clamp(240px,80vw,400px)] w-[clamp(240px,80vw,400px)] object-cover shadow-[0_16px_40px_rgba(0,0,0,0.45)] md:h-[400px] md:w-[400px]"
                        />
                    </div>
                    <div className="flex min-w-0 flex-1 flex-col gap-3 text-white/85 md:pl-[clamp(0.5rem,2vw,1.5rem)]">
                        <h2 className="text-[clamp(20pt,8vw,34pt)] font-semibold tracking-tight text-white">
                            About Me
                        </h2>
                        <div className="flex flex-wrap gap-2">
                            <Badge text="CS & Stats" className="self-start" />
                            <Badge text="UofT" className="self-start" />
                            <Badge
                                text="President of TechFounders"
                                className="self-start"
                            />
                        </div>

                        <p className="max-w-[620px] text-[clamp(11pt,2.2vw,14pt)] leading-relaxed text-white/80">
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I am
                            a Computer Science Specialist and Statistics Major
                            at the{" "}
                            <a
                                href="https://www.utoronto.ca"
                                className="underline"
                                target="_blank"
                            >
                                University of Toronto
                            </a>
                            , focused on developing full-stack systems that
                            simplify complex operations into efficient, scalable
                            solutions.
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;With
                            experience in React, TypeScript, Flask, and
                            PostgreSQL, I build production-ready applications
                            that automate workflows and handle real business
                            data, not just academic projects.
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I am
                            driven to create software that operates with clarity
                            and precision—quietly improving reliability and
                            productivity.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
