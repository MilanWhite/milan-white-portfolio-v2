import { useEffect, useState } from "react";
import CircularText from "../../components/CircularText/CircularText";

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const leftLinks = [
        { label: "About Me", href: "#" },
        { label: "Education", href: "##" },
        { label: "Experience", href: "###" },
    ];
    const rightLinks = [
        { label: "Projects", href: "####" },
        { label: "Contact", href: "/helloworld" },
        { label: "Resume/CV", href: "######" },
    ];
    const mobileLinks = [...leftLinks, ...rightLinks];

    useEffect(() => {
        const originalOverflow = document.body.style.overflow;
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = originalOverflow || "";
        }

        return () => {
            document.body.style.overflow = originalOverflow || "";
        };
    }, [isOpen]);

    return (
        <div className="relative z-[2] flex justify-center px-8 py-[38px] max-[860px]:px-6 max-[860px]:py-8 max-[720px]:px-[18px] max-[720px]:py-7">
            <div className="relative w-full max-w-[960px]">
                <div className="relative z-[40] grid h-10 grid-cols-[1fr_96px_1fr] items-center rounded-[18px] border border-white/[0.16] bg-[linear-gradient(135deg,rgba(255,255,255,0.12),rgba(255,255,255,0.04))] shadow-[0_8px_20px_rgba(0,0,0,0.25),_inset_0_1px_0_rgba(255,255,255,0.15)] backdrop-blur-[16px] backdrop-saturate-[140%] font-['Space_Grotesk','Segoe_UI',system-ui,sans-serif] tracking-[0.2px] text-[#e8eef6] max-[860px]:h-[42px]">
                    <div className="flex h-full items-center pl-4">
                        <nav className="flex h-full items-center justify-start gap-5 text-sm font-medium leading-none max-[860px]:gap-4 max-[860px]:text-[13px] max-[720px]:hidden">
                            {leftLinks.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    className="cursor-pointer opacity-90 transition-colors transition-opacity transition-transform duration-200 hover:-translate-y-0.5 hover:opacity-100 hover:text-white"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </nav>
                    </div>
                    <div aria-hidden="true" />
                    <div className="flex h-full items-center justify-end gap-3 pr-4">
                        <nav className="flex h-full items-center justify-end gap-5 text-sm font-medium leading-none max-[860px]:gap-4 max-[860px]:text-[13px] max-[720px]:hidden">
                            {rightLinks.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    className="cursor-pointer opacity-90 transition-colors transition-opacity transition-transform duration-200 hover:-translate-y-0.5 hover:opacity-100 hover:text-white"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </nav>
                        <button
                            type="button"
                            className={`relative z-[50] hidden h-9 items-center gap-2 px-3 text-[13px] font-semibold uppercase tracking-[0.3px] text-[#e8eef6] transition-transform duration-200 hover:-translate-y-0.5 hover:text-white max-[720px]:inline-flex motion-reduce:transition-none ${
                                isOpen ? "border-white/[0.35]" : ""
                            }`}
                            aria-label={
                                isOpen
                                    ? "Close navigation menu"
                                    : "Open navigation menu"
                            }
                            aria-expanded={isOpen}
                            aria-controls="navbar-mobile-menu"
                            onClick={() => setIsOpen((prev) => !prev)}
                        >
                            <span>Menu</span>
                            <span
                                className="relative inline-flex h-4 w-4"
                                aria-hidden="true"
                            >
                                <span
                                    className={`absolute left-1/2 top-1/2 h-[2px] w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-current transition-transform duration-300 motion-reduce:transition-none ${
                                        isOpen ? "rotate-45" : ""
                                    }`}
                                />
                                <span
                                    className={`absolute left-1/2 top-1/2 h-[2px] w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-current transition-transform duration-300 motion-reduce:transition-none ${
                                        isOpen ? "-rotate-45" : "rotate-90"
                                    }`}
                                />
                            </span>
                        </button>
                    </div>
                </div>
                <a href="#">
                    <div className="pointer-events-auto absolute left-1/2 top-1/2 z-[45] -translate-x-1/2 -translate-y-1/2 max-[720px]:left-5 max-[720px]:translate-x-0">
                        <div className="group relative flex h-24 w-24 items-center justify-center overflow-hidden rounded-full border border-white/[0.22] bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.35),rgba(255,255,255,0.08)_45%,rgba(255,255,255,0.02)_70%)] shadow-[0_12px_26px_rgba(0,0,0,0.35),_inset_0_1px_0_rgba(255,255,255,0.2)] backdrop-blur-[18px] backdrop-saturate-[150%] transition-transform duration-300 ease-out motion-reduce:transition-none max-[720px]:h-[84px] max-[720px]:w-[84px]">
                            <span
                                aria-hidden="true"
                                className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.2),rgba(255,255,255,0.08)_45%,rgba(255,255,255,0.02)_70%)] opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100 motion-reduce:transition-none"
                            />
                            <CircularText
                                text="MILAN WHITE "
                                onHover="slowDown"
                                spinDuration={15}
                                className="custom-class"
                                w={72}
                            />
                        </div>
                    </div>
                </a>

                <div
                    className={`fixed inset-0 z-[20] hidden bg-[rgba(8,12,18,0.5)] backdrop-blur-[2px] transition-opacity duration-300 max-[720px]:block ${
                        isOpen
                            ? "pointer-events-auto opacity-100"
                            : "pointer-events-none opacity-0"
                    }`}
                    onClick={() => setIsOpen(false)}
                    aria-hidden={!isOpen}
                />
                <div
                    id="navbar-mobile-menu"
                    className={`fixed right-0 top-0 z-[30] hidden h-screen w-[78vw] max-w-[320px] overflow-y-auto rounded-l-[20px] border border-white/[0.14] bg-[linear-gradient(160deg,rgba(18,24,34,0.92),rgba(10,12,18,0.85))] px-5 pb-6 pt-20 shadow-[-20px_0_40px_rgba(0,0,0,0.45)] backdrop-blur-[20px] backdrop-saturate-[140%] transition-all duration-400 ease-in-out max-[720px]:block motion-reduce:transition-none ${
                        isOpen
                            ? "pointer-events-auto translate-x-0 opacity-100"
                            : "pointer-events-none translate-x-[110%] opacity-0"
                    }`}
                >
                    <div className="flex flex-col gap-2">
                        {mobileLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className="w-full px-3 py-2 text-left text-sm font-medium text-[#e8eef6] transition-transform transition-colors duration-200 hover:-translate-y-0.5 hover:text-white motion-reduce:transition-none"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
