import { URLS } from "../../src/config/navigation";
import { leftLinks, rightLinks } from "../NavBar/navLinks";

const footerLinks = [...leftLinks, ...rightLinks];
const socialLinks = [
    {
        name: "Github",
        href: URLS.github,
        icon: "../../src/assets/github_white.svg",
        className:
            "inline-flex h-[clamp(2rem,6vw,2.5rem)] w-[clamp(2rem,6vw,2.5rem)] items-center justify-center rounded-full text-white/80 transition-colors hover:text-white",
    },
    {
        name: "LinkedIn",
        href: URLS.linkedin,
        icon: "../../src/assets/linkedin_white.svg",
        className:
            "inline-flex h-[clamp(2rem,6vw,2.5rem)] w-[clamp(2rem,6vw,2.5rem)] items-center justify-center rounded-full border border-white/20 text-white/80 transition-colors hover:text-white",
    },
    {
        name: "Email",
        href: URLS.email,
        icon: "../../src/assets/email_white.png",
        className:
            "inline-flex h-[clamp(2rem,6vw,2.5rem)] w-[clamp(2rem,6vw,2.5rem)] items-center justify-center rounded-full border border-white/20 text-white/80 transition-colors hover:text-white",
    },
];

export default function Footer() {
    return (
        <footer className="relative flex justify-center px-4 sm:px-6">
            <div className="w-full max-w-[1200px] py-[clamp(2.5rem,6vw,4.5rem)]">
                <div className="flex flex-col items-center gap-[clamp(1.5rem,4vw,2.5rem)] border-t border-white/10 pt-[clamp(1.5rem,4vw,2.5rem)]">
                    <nav
                        aria-label="Footer"
                        className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm font-medium leading-none tracking-[0.2px] text-white/70 [@media(max-width:520px)]:gap-x-4 max-[860px]:text-[13px] font-['Space_Grotesk','Segoe_UI',system-ui,sans-serif]"
                    >
                        {footerLinks.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                className="cursor-pointer opacity-90 transition-colors transition-opacity transition-transform duration-200 hover:-translate-y-0.5 hover:opacity-100 hover:text-white"
                            >
                                {item.label}
                            </a>
                        ))}
                    </nav>
                    <div className="flex items-center gap-[clamp(0.5rem,2vw,0.75rem)]">
                        {socialLinks.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                aria-label={item.name}
                                className={item.className}
                                target="_blank"
                            >
                                <img src={item.icon} alt="" />
                            </a>
                        ))}
                    </div>
                    <p className="text-center text-xs text-white/50 sm:text-sm">
                        Milan White {new Date().getFullYear()}
                    </p>
                </div>
            </div>
        </footer>
    );
}
