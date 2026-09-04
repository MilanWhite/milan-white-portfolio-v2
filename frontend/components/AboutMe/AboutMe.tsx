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
                            {[
                                "Computer Science",
                                "Software Engineering",
                                "Statistics",
                                "Backend",
                                "ML",
                                "Systems",
                                "Security",
                            ].map((tag) => (
                                <Badge
                                    key={tag}
                                    text={tag}
                                    className="self-start"
                                />
                            ))}
                        </div>

                        <div className="flex max-w-[620px] flex-col gap-3 text-[clamp(11pt,2.2vw,14pt)] leading-relaxed text-white/80">
                            <p>
                                I&apos;m a Computer Science student at the{" "}
                                <a
                                    href="https://www.utoronto.ca"
                                    className="underline"
                                    target="_blank"
                                    rel="noreferrer noopener"
                                >
                                    University of Toronto
                                </a>{" "}
                                studying Software Engineering and Statistics.
                            </p>
                            <p>
                                I&apos;ve worked on low-latency speech ML and
                                backend systems, where I improved multilingual
                                language-routing accuracy by 22% and built
                                training and evaluation infrastructure for
                                roughly 1,600 hours of speech. At CIBC, I worked
                                on Android application security, including
                                tapjacking remediation and fraud-detection SDK
                                integration.
                            </p>
                            <p>
                                Outside of internships, I build projects across
                                backend systems, Linux/networking, mobile,
                                security, and ML.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
