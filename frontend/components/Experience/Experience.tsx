import { useEffect, useRef, useState } from "react";
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

type RevealOptions = {
    rootMargin?: string;
    threshold?: number;
};

const useScrollReveal = (
    { rootMargin = "0px 0px -12% 0px", threshold = 0.2 }: RevealOptions = {},
) => {
    const ref = useRef<HTMLDivElement | null>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const element = ref.current;

        if (!element || typeof IntersectionObserver === "undefined") {
            setIsVisible(true);
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { rootMargin, threshold },
        );

        observer.observe(element);
        return () => observer.disconnect();
    }, [rootMargin, threshold]);

    return { ref, isVisible };
};

const getMonthsBetweenInclusive = (
    start: ExperienceDate,
    end: ExperienceDate,
) => {
    const months = (end.year - start.year) * 12 + (end.month - start.month) + 1;

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
            "Working on implementing BioCatch SDK into the mobile application, supporting behavior-based security and fraud detection.",
    },
    {
        title: "OST Service Ltd. - Full Stack Software Developer",
        range: "Jun 2025 - Sep 2025 (4 mos)",
        logoText: "OST",
        logoSrc: "../../src/assets/ost_service_icon.webp",
        logoAlt: "OST Service logo",
        description:
            "Built and shipped full-stack web features end-to-end, from React UI to Python APIs and database-backed services.",
    },
    {
        title: "White Finances & Consulting Inc. - Software Developer & IT Administrator",
        range: "Nov 2024 - Sep 2025",
        logoText: "WFC",
        logoSrc: "../../src/assets/WFC_icon.webp",
        logoAlt: "White Finances & Consulting logo",
        description:
            "Developed internal software and managed IT systems, supporting secure, reliable day-to-day operations.",
    },
];

type ExperienceCardProps = {
    item: ExperienceItem;
    index: number;
};

const ExperienceCard = ({ item, index }: ExperienceCardProps) => {
    const isRight = index % 2 === 0;
    const rangeLabel = getRangeLabel(item);
    const { ref, isVisible } = useScrollReveal();
    const delay = `${Math.min(index, 6) * 120}ms`;
    const hiddenOffset = isRight ? "md:translate-x-6" : "md:-translate-x-6";

    return (
        <li className="relative">
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
                <div
                    ref={ref}
                    style={{ transitionDelay: delay }}
                    className={`rounded-2xl border border-white/10 bg-[linear-gradient(140deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] p-[clamp(1rem,2vw,1.5rem)] shadow-[0_16px_40px_rgba(0,0,0,0.25)] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:translate-y-0 motion-reduce:translate-x-0 motion-reduce:scale-100 motion-reduce:blur-0 ${
                        isVisible
                            ? "opacity-100 translate-y-0 md:translate-x-0 scale-100 blur-0"
                            : `opacity-0 translate-y-6 ${hiddenOffset} scale-[0.98] blur-[2px]`
                    }`}
                >
                    <Badge text={rangeLabel} className="self-start" />
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
};

export default function Experience() {
    return (
        <section
            id="experience"
            className="relative flex w-full justify-center px-4 sm:px-6"
        >
            <div className="relative w-full max-w-[1200px] py-[clamp(2.5rem,6vw,5rem)]">
                <div className="relative flex flex-col gap-[clamp(1.75rem,4vw,3rem)] p-[clamp(1.25rem,3vw,2.5rem)]">
                    <div className="flex flex-col items-center gap-2 text-center text-white/85">
                        <h2 className="text-[clamp(20pt,8vw,34pt)] font-semibold tracking-tight text-white">
                            Experience
                        </h2>
                        <p className="text-[clamp(11pt,2.2vw,14pt)] leading-relaxed text-white/70">
                            A timeline of my professional experience.
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
                        {experiences.map((item, index) => (
                            <ExperienceCard
                                key={item.title}
                                item={item}
                                index={index}
                            />
                        ))}
                    </ol>
                </div>
            </div>
        </section>
    );
}
