import { COLORS } from "../../src/config/theme";
import GrainBackground from "../GrainBackground";
import TargetCursor from "../TargetCursor";

import ProjectsBentoGrid from "./ProjectsBentoGrid";

export default function Projects() {
    return (
        <section
            id="projects"
            className="relative flex w-full justify-center px-4 sm:px-6"
            style={{ background: COLORS.tertiaryBlue }}
        >
            <TargetCursor
                targetSelector=".project-card"
                scopeSelector="#projects"
                spinDuration={2}
                hideDefaultCursor
                hoverDuration={0.2}
                parallaxOn
            />
            <GrainBackground
                gradientPrimary="rgba(255, 255, 255, 0.04)"
                gradientSecondary="rgba(255, 255, 255, 0.03)"
            />

            <div className="relative w-full max-w-[1200px] py-[clamp(2.5rem,6vw,5rem)]">
                <div className="relative flex flex-col gap-[clamp(1.75rem,4vw,3rem)] p-[clamp(1.25rem,3vw,2.5rem)]">
                    <div className="flex flex-col items-center gap-2 text-center text-white/85">
                        <h2 className="text-[clamp(20pt,8vw,34pt)] font-semibold tracking-tight text-white">
                            Projects
                        </h2>
                        <p className="text-[clamp(11pt,2.2vw,14pt)] leading-relaxed text-white/70">
                            Pick a project, any project.
                        </p>
                    </div>
                    <ol className="relative flex flex-col gap-[clamp(1.5rem,3vw,2.5rem)]">
                        <ProjectsBentoGrid />
                    </ol>
                </div>
            </div>
        </section>
    );
}
