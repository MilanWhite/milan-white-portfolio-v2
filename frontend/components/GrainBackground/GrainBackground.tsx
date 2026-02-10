const GRAIN_SVG =
    "<svg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 120 120'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='1.1' numOctaves='2' stitchTiles='stitch'/></filter><rect width='120' height='120' filter='url(#n)' opacity='0.45'/></svg>";

const GRAIN_URL = `data:image/svg+xml;utf8,${encodeURIComponent(GRAIN_SVG)}`;
const GRADIENT_DEFAULTS = {
    primary: "rgba(133, 184, 255, 0.18)",
    secondary: "rgba(255, 255, 255, 0.08)",
    fade: "rgba(9, 42, 88, 0)",
} as const;
const GRAIN_FINE_STYLE = {
    backgroundImage: `url("${GRAIN_URL}")`,
    backgroundSize: "120px 120px",
    opacity: 0.28,
    mixBlendMode: "soft-light",
} as const;
const GRAIN_COARSE_STYLE = {
    backgroundImage: `url("${GRAIN_URL}")`,
    backgroundSize: "260px 260px",
    opacity: 0.18,
    mixBlendMode: "soft-light",
} as const;

type GrainBackgroundProps = {
    gradientPrimary?: string;
    gradientSecondary?: string;
    gradientFade?: string;
};

export default function GrainBackground({
    gradientPrimary = GRADIENT_DEFAULTS.primary,
    gradientSecondary = GRADIENT_DEFAULTS.secondary,
    gradientFade = GRADIENT_DEFAULTS.fade,
}: GrainBackgroundProps) {
    const gradientStyle = {
        backgroundImage: `radial-gradient(70% 60% at 85% 20%, ${gradientPrimary} 0%, ${gradientFade} 60%), radial-gradient(80% 70% at 10% 85%, ${gradientSecondary} 0%, ${gradientFade} 55%)`,
    };

    return (
        <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
        >
            <div className="absolute inset-0" style={gradientStyle} />
            <div className="absolute inset-0" style={GRAIN_FINE_STYLE} />
            <div className="absolute inset-0" style={GRAIN_COARSE_STYLE} />
        </div>
    );
}
