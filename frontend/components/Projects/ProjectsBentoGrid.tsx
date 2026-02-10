import Badge from "../Badge";
import meshStat from "../../src/assets/meshstat.webp";
import skyLock from "../../src/assets/skylock.webp";
import hireMatch from "../../src/assets/hirematch.webp";
import thePasskeyToolkit from "../../src/assets/the_passkey_toolkit.webp";
import chess from "../../src/assets/ai_cv_for_chess.webp";

type Project = {
    id: string;
    badges: string[];
    title: string;
    description: string;
    link: string;
    image?: string;
    imageAlt?: string;
    accent: string;
    accentSoft: string;
    outerClassName: string;
    roundingClassName?: string;
};

const PROJECTS: Project[] = [
    {
        id: "meshstat",
        badges: [
            "IoT Sensors",
            "AWS Cognito",
            "Webhooks",
            "OpenAI API",
            "Full Stack + Data Pipeline",
        ],
        title: "MeshStat",
        description:
            "Built during KingHacks, MeshStat is a privacy-first smart-city sensing platform proven viable with four battery nodes streaming temperature and decibel metrics to a SQL database, powering a live React heatmap and dashboards with replay, per-sensor trends, hotspot/exceedance detection, and grounded AI briefs for decision-ready city planning.",
        link: "https://github.com/MilanWhite/MeshStat",
        image: meshStat,
        imageAlt: "Product interface preview",
        accent: "rgba(255, 255, 255, 0.16)",
        accentSoft: "rgba(255, 255, 255, 0.07)",
        outerClassName: "relative lg:col-span-3",
        roundingClassName: "max-lg:rounded-t-4xl lg:rounded-tl-4xl",
    },
    {
        id: "skylock",
        badges: [
            "Satellite-tracking",
            "GPS",
            "Geospatial Data",
            "SQLite",
            "Full Stack + Data Pipeline",
        ],
        title: "Skylock",
        description:
            "Made during BramHacks, Skylock is a Raspberry Pi touchscreen satellite-tracking device that predicts the nearest satellite from prior snapshots, guides real-time triangulation to help you align to the target, and then publishes a live “ping” and location status to a FastAPI backend, powering a React + Tailwind web map for remote monitoring and tracking in emergency situations.",
        link: "https://github.com/MilanWhite/skylock-v2",
        image: skyLock,
        imageAlt: "Mobile security experience preview",
        accent: "rgba(255, 255, 255, 0.16)",
        accentSoft: "rgba(255, 255, 255, 0.07)",
        outerClassName: "relative lg:col-span-3",
        roundingClassName: "lg:rounded-tr-4xl",
    },
    {
        id: "hirematch",
        badges: [
            "Java",
            "MongoDB",
            "Clean Architecture",
            "Vector Embeddings",
            "Pinecone",
        ],
        title: "HireMatch",
        description:
            "HireMatch is a Java, Clean-Architecture HR matching app where employers and candidates create profiles and get recommendations via Pinecone vector-embedding similarity search. Mutual likes create matches, and matches are shown for fast follow-ups.",
        link: "https://github.com/TheAmazingDokir/hirematch",
        image: hireMatch,
        imageAlt: "Analytics dashboard preview",
        accent: "rgba(255, 255, 255, 0.16)",
        accentSoft: "rgba(255, 255, 255, 0.07)",
        outerClassName: "relative lg:col-span-2",
        roundingClassName: "lg:rounded-bl-4xl",
    },
    {
        id: "the-passkey-toolkit",
        badges: ["TypeScript", "npm", "Node.js"],
        title: "The Passkey Toolkit",
        description:
            "A modular, framework-agnostic TypeScript WebAuthn (passkey) SDK that simplifies registration/auth flows, cutting ~200+ lines per integration and supporting challenge/verification with clear documentation.",
        link: "https://github.com/MilanWhite/the-passkey-toolkit",
        image: thePasskeyToolkit,
        imageAlt: "Community platform preview",
        accent: "rgba(255, 255, 255, 0.16)",
        accentSoft: "rgba(255, 255, 255, 0.07)",
        outerClassName: "relative lg:col-span-2",
    },
    {
        id: "ai_cv_for_chess",
        badges: ["Python", "OpenCV", "TensorFlow", "NumPy"],
        title: "AI & CV for Chess",
        description:
            "An end-to-end computer-vision pipeline that detects and segments a chessboard from images using OpenCV, classifies each piece with a TensorFlow CNN, and reconstructs the full position as FEN - enabling reliable analysis and engine integration for online chess.",
        link: "https://github.com/MilanWhite/chess-piece-recognition-tensorflow",
        image: chess,
        imageAlt: "Interface system preview",
        accent: "rgba(255, 255, 255, 0.16)",
        accentSoft: "rgba(255, 255, 255, 0.07)",
        outerClassName: "relative lg:col-span-2",
        roundingClassName: "max-lg:rounded-b-4xl lg:rounded-br-4xl",
    },
];

const buildGlow = (project: Project) => ({
    backgroundImage: `radial-gradient(80% 65% at 15% 20%, ${project.accent} 0%, rgba(0,0,0,0) 65%), radial-gradient(80% 60% at 85% 90%, ${project.accentSoft} 0%, rgba(0,0,0,0) 60%)`,
});

export default function BentoGrid() {
    return (
        <div className="mx-auto w-full">
            <div className="grid grid-cols-1 gap-[clamp(1rem,2vw,1.5rem)] lg:grid-cols-6 lg:grid-rows-2">
                {PROJECTS.map((project) => (
                    <div key={project.id} className={project.outerClassName}>
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noreferrer noopener"
                            aria-label={`${project.title} project link`}
                            className={`group project-card relative block h-full cursor-[inherit] overflow-hidden rounded-2xl border border-white/10 bg-[linear-gradient(140deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] p-[clamp(1rem,2vw,1.5rem)] shadow-[0_16px_40px_rgba(0,0,0,0.35)] transition duration-300 ease-out motion-safe:hover:-translate-y-1 motion-safe:hover:border-white/20 motion-safe:hover:shadow-[0_24px_60px_rgba(0,0,0,0.45)] lg:motion-safe:hover:scale-[1.01] ${project.roundingClassName ?? ""}`}
                        >
                            <div
                                aria-hidden="true"
                                className="pointer-events-none absolute inset-0 opacity-70 transition-opacity duration-300 group-hover:opacity-100"
                                style={buildGlow(project)}
                            />
                            <div
                                aria-hidden="true"
                                className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_80%_at_50%_0%,rgba(255,255,255,0.16)_0%,transparent_55%)] opacity-0 transition-opacity duration-500 group-hover:opacity-60"
                            />
                            <div className="relative flex h-full flex-col">
                                <div className="relative mb-5 h-[clamp(250px,35vw,300px)] w-full overflow-hidden rounded-xl border border-white/10 bg-[linear-gradient(160deg,rgba(255,255,255,0.12),rgba(255,255,255,0.02))] transition duration-500 ease-out group-hover:-translate-y-1 group-hover:border-white/20">
                                    {project.image ? (
                                        <>
                                            <img
                                                src={project.image}
                                                alt={project.imageAlt ?? ""}
                                                loading="lazy"
                                                decoding="async"
                                                className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.06] group-hover:brightness-110"
                                            />
                                            <div
                                                aria-hidden="true"
                                                className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.18)_0%,transparent_50%)] opacity-0 transition-opacity duration-500 group-hover:opacity-70"
                                            />
                                        </>
                                    ) : (
                                        <>
                                            <div
                                                aria-hidden="true"
                                                className="absolute inset-0 opacity-80 transition-opacity duration-300 group-hover:opacity-100"
                                                style={buildGlow(project)}
                                            />
                                            <div
                                                aria-hidden="true"
                                                className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.12)_0%,transparent_55%)] opacity-50 transition-opacity duration-300 group-hover:opacity-70"
                                            />
                                            <div
                                                aria-hidden="true"
                                                className="absolute -right-8 top-5 h-16 w-16 rounded-full border border-white/15 bg-white/5 transition-transform duration-500 group-hover:translate-x-2"
                                            />
                                            <div
                                                aria-hidden="true"
                                                className="absolute bottom-5 left-5 h-8 w-24 rounded-full border border-white/15 bg-white/5 transition-transform duration-500 group-hover:-translate-x-2"
                                            />
                                        </>
                                    )}
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {project.badges.map((badge) => (
                                        <Badge
                                            key={badge}
                                            text={badge}
                                            className="self-start"
                                        />
                                    ))}
                                </div>
                                <h3 className="mt-3 text-[clamp(13pt,3.2vw,20pt)] font-semibold text-white transition-colors duration-300 group-hover:text-white">
                                    {project.title}
                                </h3>
                                <p className="mt-2 text-[clamp(11pt,2.2vw,14pt)] leading-relaxed text-white/70 transition-colors duration-300 group-hover:text-white/80">
                                    {project.description}
                                </p>
                            </div>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}
