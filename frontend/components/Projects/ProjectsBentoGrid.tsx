import Badge from "../Badge";
import eventDrivenTcpServer from "../../src/assets/event_driven_tcp_server.webp";
import meshStat from "../../src/assets/meshstat.webp";
import restaurantCallAssistant from "../../src/assets/restaurant_call_assistant.webp";
import thePasskeyToolkit from "../../src/assets/the_passkey_toolkit.webp";
import vehicleAuctionLogistics from "../../src/assets/vehicle_auction_logistics_ost_service.webp";

type Project = {
    id: string;
    badges: string[];
    title: string;
    description: string;
    link: string;
    image: string;
    imageAlt: string;
    accent: string;
    accentSoft: string;
    outerClassName: string;
    roundingClassName?: string;
};

const PROJECTS: Project[] = [
    {
        id: "vehicle-auction-logistics-platform",
        badges: ["React", "TypeScript", "Flask", "PostgreSQL", "AWS"],
        title: "Vehicle Auction Logistics Platform",
        description:
            "Production vehicle-auction logistics platform managing 200+ cars for 10+ enterprise buyers and $2.5M+ in inventory. Built the Flask/PostgreSQL API and AWS Cognito/Lambda/S3 infrastructure, including a WebP media pipeline that reduced gallery thumbnail payload sizes by 95% across 7,400+ images.",
        link: "https://www.ostservice.ca/",
        image: vehicleAuctionLogistics,
        imageAlt: "Connected vehicle inventory and logistics platform",
        accent: "rgba(0, 145, 255, 0.22)",
        accentSoft: "rgba(239, 68, 68, 0.09)",
        outerClassName: "relative lg:col-span-3",
        roundingClassName: "max-lg:rounded-t-4xl lg:rounded-tl-4xl",
    },
    {
        id: "event-driven-tcp-server",
        badges: ["C", "Linux", "POSIX Sockets", "epoll", "Systems"],
        title: "Event-Driven TCP Server",
        description:
            "Single-threaded event-driven TCP server in C using Linux epoll. Implements per-client state, TCP stream framing, bounded buffering, malformed-input handling, and fault-tolerant connection management; validated with 40 end-to-end tests using real connections and system-call fault injection.",
        link: "https://github.com/MilanWhite/event-driven-tcp-server",
        image: eventDrivenTcpServer,
        imageAlt: "Event-driven server routing concurrent network connections",
        accent: "rgba(0, 196, 255, 0.24)",
        accentSoft: "rgba(74, 222, 128, 0.1)",
        outerClassName: "relative lg:col-span-3",
        roundingClassName: "lg:rounded-tr-4xl",
    },
    {
        id: "restaurant-call-assistant",
        badges: ["Kotlin", "Android", "Jetpack Compose", "Google API"],
        title: "Restaurant Call Assistant",
        description:
            "Production Android reservation assistant used during incoming calls, syncing bookings to Google Calendar and handling roughly 90% of reservations. Built the foreground-service and overlay workflow to handle caller ID delays, duplicate events, call waiting, and reservation recovery.",
        link: "https://github.com/MilanWhite/restaurant-call-assistant",
        image: restaurantCallAssistant,
        imageAlt: "Android call overlay and restaurant reservation calendar",
        accent: "rgba(255, 177, 64, 0.2)",
        accentSoft: "rgba(255, 99, 86, 0.1)",
        outerClassName: "relative lg:col-span-2",
        roundingClassName: "lg:rounded-bl-4xl",
    },
    {
        id: "the-passkey-toolkit",
        badges: ["TypeScript", "WebAuthn/FIDO2", "Passkeys", "npm"],
        title: "The Passkey Toolkit",
        description:
            "Framework-agnostic TypeScript SDK for WebAuthn/passkey registration and authentication, published to npm. Replaces 200+ lines of integration code with typed challenge and verification helpers and has reached 75+ downloads.",
        link: "https://github.com/MilanWhite/the-passkey-toolkit",
        image: thePasskeyToolkit,
        imageAlt: "The Passkey Toolkit package preview",
        accent: "rgba(145, 106, 255, 0.2)",
        accentSoft: "rgba(255, 255, 255, 0.07)",
        outerClassName: "relative lg:col-span-2",
    },
    {
        id: "meshstat",
        badges: ["ESP32", "ESP-NOW", "FastAPI", "Supabase", "ML"],
        title: "MeshStat",
        description:
            "Privacy-preserving environmental sensor network built with ESP32/ESP-NOW, FastAPI, Supabase, and XGBoost. Streams geospatial noise and temperature data to a live dashboard and forecasts trends from historical time-series features without storing or transmitting raw microphone audio.",
        link: "https://github.com/MilanWhite/MeshStat",
        image: meshStat,
        imageAlt: "MeshStat environmental sensor dashboard",
        accent: "rgba(76, 206, 146, 0.2)",
        accentSoft: "rgba(78, 140, 255, 0.1)",
        outerClassName: "relative lg:col-span-2",
        roundingClassName: "max-lg:rounded-b-4xl lg:rounded-br-4xl",
    },
];

const buildGlow = (project: Project) => ({
    backgroundImage: `radial-gradient(80% 65% at 15% 20%, ${project.accent} 0%, rgba(0,0,0,0) 65%), radial-gradient(80% 60% at 85% 90%, ${project.accentSoft} 0%, rgba(0,0,0,0) 60%)`,
});

export default function ProjectsBentoGrid() {
    return (
        <div className="mx-auto w-full">
            <div className="grid grid-cols-1 gap-[clamp(1rem,2vw,1.5rem)] lg:grid-cols-6">
                {PROJECTS.map((project) => (
                    <div key={project.id} className={project.outerClassName}>
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label={`Open ${project.title} project`}
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
                            <div className="relative mb-5 h-[clamp(250px,35vw,300px)] w-full overflow-hidden rounded-xl border border-white/10 bg-white/5 transition duration-500 ease-out group-hover:-translate-y-1 group-hover:border-white/20">
                                <img
                                    src={project.image}
                                    alt={project.imageAlt}
                                    loading="lazy"
                                    decoding="async"
                                    className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.06] group-hover:brightness-110"
                                />
                                <div
                                    aria-hidden="true"
                                    className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.18)_0%,transparent_50%)] opacity-0 transition-opacity duration-500 group-hover:opacity-70"
                                />
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {project.badges.map((badge) => (
                                    <Badge key={badge} text={badge} className="self-start" />
                                ))}
                            </div>
                            <h3 className="mt-3 text-[clamp(13pt,3.2vw,20pt)] font-semibold text-white">
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
