import { URLS } from "../../src/config/navigation";
import { COLORS } from "../../src/config/theme";
import Badge from "../Badge";
import GrainBackground from "../GrainBackground";

export default function Education() {
    return (
        <section
            style={{
                backgroundColor: COLORS.secondaryBlue,
            }}
            className="relative flex w-full justify-center overflow-hidden px-4 sm:px-6"
        >
            <GrainBackground />
            <div className="relative z-10 w-full max-w-[1200px] py-[clamp(2.5rem,6vw,5rem)]">
                <div className="relative flex flex-col gap-[clamp(1.75rem,4vw,3rem)] p-[clamp(1.25rem,3vw,2.5rem)] md:flex-row md:items-center">
                    <div className="order-2 flex min-w-0 flex-1 flex-col gap-3 text-white/80 md:order-1 md:pr-[clamp(0.5rem,2vw,1.5rem)]">
                        <h2 className="text-[clamp(20pt,8vw,34pt)] font-semibold tracking-tight text-white">
                            Education
                        </h2>
                        <div className="flex flex-col gap-2">
                            <h3 className="text-[clamp(13pt,3.2vw,20pt)] font-semibold text-white/90">
                                Specialist in Computer Science & Statistics
                                Major
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                <Badge
                                    text="UNIVERSITY OF TORONTO"
                                    className="self-start"
                                />
                            </div>
                        </div>
                        <ul className="mt-1 flex max-w-[620px] flex-col gap-2 text-[clamp(11pt,2.2vw,14pt)] leading-relaxed text-white/70">
                            <li className="flex gap-3">
                                <span className="mt-[0.55rem] h-2.5 w-2.5 shrink-0 rounded-full border border-white/30" />
                                <span>
                                    <span className="font-semibold text-white/90">
                                        2024
                                    </span>{" "}
                                    University of Toronto Scholar Scholarship
                                    Recipient
                                </span>
                            </li>
                            <li className="flex gap-3">
                                <span className="mt-[0.55rem] h-2.5 w-2.5 shrink-0 rounded-full border border-white/30" />
                                <span>
                                    Relevant coursework includes Artificial
                                    Intelligence, Data Structures, Machine
                                    Learning, and Human-Computer Interaction
                                </span>
                            </li>
                            <li className="flex gap-3">
                                <span className="mt-[0.55rem] h-2.5 w-2.5 shrink-0 rounded-full border border-white/30" />
                                <span>
                                    Co-President of The Tech Founders Club
                                    (Podcasts, Hackathons, and Events)
                                </span>
                            </li>
                        </ul>
                        <div className="flex flex-col gap-1 text-[clamp(10pt,2vw,12.5pt)] text-white/70">
                            <span>
                                UofT Computer Science:{" "}
                                <a
                                    href={URLS.utscCS}
                                    className="underline"
                                    target="_blank"
                                >
                                    Program Info
                                </a>
                            </span>
                            <span className="">
                                UofT Statistics:{" "}
                                <a
                                    href={URLS.utscStats}
                                    className="underline"
                                    target="_blank"
                                >
                                    Program Info
                                </a>
                            </span>
                        </div>
                    </div>
                    <div className="relative order-1 mx-auto block w-[clamp(240px,80vw,400px)] shrink-0 md:order-2 md:mx-0 md:w-[400px]">
                        <img
                            src="../../src/assets/education.webp"
                            alt="University of Toronto campus"
                            loading="lazy"
                            decoding="async"
                            className="h-[clamp(240px,80vw,400px)] w-[clamp(240px,80vw,400px)] object-cover md:h-[400px] md:w-[400px]"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
