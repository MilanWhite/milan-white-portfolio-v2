import Badge from "../Badge";
import { COLORS } from "../../src/config/theme";

type ExperienceDate = {
    year: number;
    month: number;
};

type ExperienceItem = {
    title: string;
    range: string;
    logoText: string;
    logoSrc?: string;
    logoAlt?: string;
    description: string;
    start?: ExperienceDate;
    end?: "Present";
};

const getMonthsBetweenInclusive = (
    start: ExperienceDate,
    end: ExperienceDate,
) => {
    const months =
        (end.year - start.year) * 12 + (end.month - start.month) + 1;

    return Math.max(0, months);
};

const formatMonths = (months: number) =>
    months === 1 ? "1 mo" : `${months} mos`;

const getRangeLabel = (item: ExperienceItem) => {
    if (item.end !== "Present" || !item.start) {
        return item.range;
    }

    const now = new Date();
    const months = getMonthsBetweenInclusive(item.start, {
        year: now.getFullYear(),
        month: now.getMonth(),
    });

    return `${item.range} (${formatMonths(months)})`;
};

const experiences: ExperienceItem[] = [
    {
        title: "CIBC - Mobile Developer",
        range: "Jan, 2026 - Present",
        start: {
            year: 2026,
            month: 0,
        },
        end: "Present",
        logoText: "CIBC",
        logoSrc: "../../src/assets/cibc_icon.webp",
        logoAlt: "CIBC logo",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        title: "OST Service Ltd. - Full Stack Software Developer",
        range: "Jun 2025 - Sep 2025 (4 mos)",
        logoText: "OST",
        logoSrc: "../../src/assets/ost_service_icon.webp",
        logoAlt: "OST Service logo",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        title: "White Finances & Consulting Inc. - Software Developer & IT Administrator",
        range: "Nov 2024 - Sep 2025",
        logoText: "WFC",
        logoSrc: "../../src/assets/WFC_icon.webp",
        logoAlt: "White Finances & Consulting logo",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
];

export default function Experience() {
    return (
        <section
            id="experience"
            className="relative flex w-full justify-center px-4 sm:px-6"
        >
            <div className="relative w-full max-w-[1200px] py-[clamp(2.5rem,6vw,5rem)]">
                <div className="relative flex flex-col gap-[clamp(1.75rem,4vw,3rem)] p-[clamp(1.25rem,3vw,2.5rem)]">
                    <div className="flex flex-col gap-2 text-white/85">
                        <h2 className="text-[clamp(20pt,8vw,34pt)] font-semibold tracking-tight text-white">
                            Experience
                        </h2>
                        <p className="text-[clamp(11pt,2.2vw,14pt)] leading-relaxed text-white/70">
                            A timeline of my proffessional experience.
                        </p>
                    </div>
                    <ol className="relative flex flex-col gap-[clamp(1.5rem,3vw,2.5rem)]">
                        <span
                            aria-hidden="true"
                            className="absolute left-3 top-0 h-full w-px bg-white/10 md:hidden"
                        />
                        <span
                            aria-hidden="true"
                            className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-white/10 md:block"
                        />
                        {experiences.map((item, index) => {
                            const isRight = index % 2 === 0;
                            const rangeLabel = getRangeLabel(item);

                            return (
                                <li key={item.title} className="relative">
                                    <span
                                        aria-hidden="true"
                                        className="absolute left-3 top-[1.1rem] flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border border-white/20 bg-[linear-gradient(140deg,rgba(255,255,255,0.12),rgba(255,255,255,0.04))] shadow-[0_0_0_10px_rgba(18,18,18,0.95)] md:left-1/2"
                                    >
                                        {item.logoSrc ? (
                                            <img
                                                src={item.logoSrc}
                                                alt={item.logoAlt}
                                                loading="lazy"
                                                decoding="async"
                                                className="h-full w-full object-contain"
                                            />
                                        ) : (
                                            <span
                                                className="text-[10px] font-semibold tracking-[0.12em] text-white/80"
                                                style={{
                                                    color: COLORS.badgeColor,
                                                }}
                                            >
                                                {item.logoText}
                                            </span>
                                        )}
                                    </span>
                                    <div
                                        className={`relative w-full pl-10 md:w-1/2 md:pl-0 ${isRight ? "md:ml-auto md:pl-12" : "md:mr-auto md:pr-12"}`}
                                    >
                                        <div className="rounded-2xl border border-white/10 bg-[linear-gradient(140deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] p-[clamp(1rem,2vw,1.5rem)] shadow-[0_16px_40px_rgba(0,0,0,0.25)]">
                                            <Badge
                                                text={rangeLabel}
                                                className="self-start"
                                            />
                                            <h3 className="mt-3 text-[clamp(13pt,3.2vw,20pt)] font-semibold text-white">
                                                {item.title}
                                            </h3>
                                            <p className="mt-2 text-[clamp(11pt,2.2vw,14pt)] leading-relaxed text-white/70">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                </li>
                            );
                        })}
                    </ol>
                </div>
            </div>
        </section>
    );
}
