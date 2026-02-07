import { COLORS } from "../../src/config/theme";

interface BadgeProps {
    text: string;
    badgeColor?: string;
    className?: string;
}

function withAlpha(hex: string, alpha: number) {
    const h = hex.replace("#", "").trim();
    if (h.length !== 6) return hex;
    const r = parseInt(h.slice(0, 2), 16);
    const g = parseInt(h.slice(2, 4), 16);
    const b = parseInt(h.slice(4, 6), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

export default function Badge({
    text,
    badgeColor = COLORS.badgeColor,
    className,
}: BadgeProps) {
    const ringColor = withAlpha(badgeColor, 0.2);

    return (
        <span
            style={{
                backgroundColor: withAlpha(badgeColor, 0.1),
                color: badgeColor,
                ["--tw-ring-color" as any]: ringColor,
            }}
            className={`inline-flex text-center items-center rounded-md px-1.5 py-0.5 text-xs font-medium ring-1 ring-inset ${className ?? ""}`}
        >
            {text}
        </span>
    );
}
