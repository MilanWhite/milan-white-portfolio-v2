import CircularText from "../CircularText/CircularText";

type LogoBadgeProps = {
    href?: string;
    text?: string;
};

export default function LogoBadge({
    href = "#",
    text = "MILAN WHITE ",
}: LogoBadgeProps) {
    return (
        <a href={href}>
            <div
                className={
                    "pointer-events-auto absolute left-1/2 top-1/2 z-[45] -translate-x-1/2 -translate-y-1/2 max-[720px]:left-5 max-[720px]:translate-x-0"
                }
            >
                <div
                    className={
                        "group relative flex h-24 w-24 items-center justify-center overflow-hidden rounded-full border border-white/[0.22] bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.35),rgba(255,255,255,0.08)_45%,rgba(255,255,255,0.02)_70%)] shadow-[0_12px_26px_rgba(0,0,0,0.35),_inset_0_1px_0_rgba(255,255,255,0.2)] backdrop-blur-[18px] backdrop-saturate-[150%] transition-transform duration-300 ease-out motion-reduce:transition-none max-[720px]:h-[84px] max-[720px]:w-[84px]"
                    }
                >
                    <span
                        aria-hidden="true"
                        className={
                            "pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.2),rgba(255,255,255,0.08)_45%,rgba(255,255,255,0.02)_70%)] opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100 motion-reduce:transition-none"
                        }
                    />
                    <CircularText
                        text={text}
                        onHover="slowDown"
                        spinDuration={15}
                        className="custom-class"
                        w={72}
                    />
                </div>
            </div>
        </a>
    );
}
