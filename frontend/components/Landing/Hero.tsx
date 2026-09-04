import { URLS } from "../../src/config/navigation";
import Button from "../Button";
import heroImage from "../../src/assets/hero_image_cropped.webp";
import githubIcon from "../../src/assets/github_white.svg";
import linkedinIcon from "../../src/assets/linkedin_white.svg";
import emailIcon from "../../src/assets/email_white.webp";

export default function Hero() {
    return (
        <section className="flex h-full w-full items-center justify-center px-4 sm:px-6">
            <div className="relative -top-[var(--landing-hero-offset)] flex w-full max-w-[680px] items-center justify-center py-[clamp(3rem,8vw,6rem)] [@media(min-width:600px)_and_(max-height:800px)]:top-0 [@media(max-width:599px)_and_(max-height:550px)]:top-0">
                <div className="relative flex items-center justify-center [@media(min-width:600px)_and_(max-height:800px)]:flex-col [@media(min-width:600px)_and_(max-height:800px)]:items-center [@media(min-width:600px)_and_(max-height:800px)]:gap-[clamp(0.4rem,1.8vw,0.9rem)] [@media(max-width:599px)_and_(max-height:550px)]:flex-col [@media(max-width:599px)_and_(max-height:550px)]:items-center [@media(max-width:599px)_and_(max-height:550px)]:gap-[clamp(0.4rem,1.8vw,0.9rem)]">
                    <div className="pointer-events-none absolute bottom-full -left-[clamp(1rem,8vw,7.25rem)] mb-[clamp(0.5rem,1.5vw,0.875rem)] flex w-[clamp(14rem,80vw,37.5rem)] flex-col [@media(min-width:600px)_and_(max-height:800px)]:static [@media(min-width:600px)_and_(max-height:800px)]:mb-0 [@media(min-width:600px)_and_(max-height:800px)]:w-auto [@media(min-width:600px)_and_(max-height:800px)]:items-center [@media(max-width:599px)_and_(max-height:550px)]:static [@media(max-width:599px)_and_(max-height:550px)]:mb-0 [@media(max-width:599px)_and_(max-height:550px)]:w-auto [@media(max-width:599px)_and_(max-height:550px)]:items-center">
                        <span className="font-semibold text-[clamp(12pt,2.6vw,16pt)] text-white">
                            Hi, my name is
                        </span>
                        <span className="relative font-semibold text-[clamp(30pt,12vw,64pt)] leading-none tracking-tight whitespace-nowrap text-white">
                            <span className="mix-blend-difference">
                                Milan White
                            </span>
                            <span
                                aria-hidden="true"
                                className="absolute inset-0 text-white/40"
                            >
                                Milan White
                            </span>
                        </span>
                    </div>
                    <img
                        src={heroImage}
                        alt="Portrait of Milan White"
                        fetchPriority="high"
                        className="relative z-0 h-[clamp(220px,60vw,400px)] w-[clamp(220px,60vw,400px)] object-cover shadow-[0_20px_50px_rgba(0,0,0,0.4)] [@media(min-width:600px)_and_(max-height:800px)]:hidden [@media(max-width:599px)_and_(max-height:550px)]:hidden"
                    />
                    <span className="pointer-events-none absolute top-full mt-[clamp(0.75rem,2.5vw,1rem)] -right-[clamp(0.75rem,10vw,7.25rem)] w-[100vw] text-right text-white font-semibold text-[clamp(12pt,2.6vw,16pt)] [@media(min-width:600px)_and_(max-height:800px)]:static [@media(min-width:600px)_and_(max-height:800px)]:mt-0 [@media(min-width:600px)_and_(max-height:800px)]:w-auto [@media(min-width:600px)_and_(max-height:800px)]:text-center [@media(max-width:599px)_and_(max-height:550px)]:static [@media(max-width:599px)_and_(max-height:550px)]:mt-0 [@media(max-width:599px)_and_(max-height:550px)]:w-auto [@media(max-width:599px)_and_(max-height:550px)]:text-center">
                        and I am a Full Stack Software Engineer.
                    </span>
                    <div className="absolute top-full mt-[clamp(2rem,12vw,3.5rem)] w-[100vw] flex flex-wrap items-center justify-end gap-[clamp(0.5rem,2vw,1rem)] -right-[clamp(0.75rem,10vw,7.25rem)] [@media(min-width:600px)_and_(max-height:800px)]:static [@media(min-width:600px)_and_(max-height:800px)]:mt-[clamp(0.75rem,3vw,1.25rem)] [@media(min-width:600px)_and_(max-height:800px)]:w-full [@media(min-width:600px)_and_(max-height:800px)]:justify-center [@media(max-width:599px)_and_(max-height:550px)]:static [@media(max-width:599px)_and_(max-height:550px)]:mt-[clamp(0.75rem,3vw,1.25rem)] [@media(max-width:599px)_and_(max-height:550px)]:w-full [@media(max-width:599px)_and_(max-height:550px)]:justify-center">
                        <Button
                            text="Contact Me"
                            href={URLS.contact}
                            height="clamp(38px,8vw,44px)"
                            width="clamp(130px,40vw,160px)"
                            textColor="#000"
                            backgroundColor="#fff"
                        />
                        <div className="flex items-center gap-[clamp(0.5rem,2vw,0.75rem)] ">
                            <a
                                href={URLS.github}
                                aria-label="Github"
                                className="inline-flex h-[clamp(2rem,6vw,2.5rem)] w-[clamp(2rem,6vw,2.5rem)] items-center justify-center rounded-full text-white/80 transition-colors hover:text-white"
                                target="_blank"
                            >
                                <img src={githubIcon} alt="" />
                            </a>
                            <a
                                href={URLS.linkedin}
                                aria-label="LinkedIn"
                                className="inline-flex h-[clamp(2rem,6vw,2.5rem)] w-[clamp(2rem,6vw,2.5rem)] items-center justify-center rounded-full border border-white/20 text-white/80 transition-colors hover:text-white"
                                target="_blank"
                            >
                                <img src={linkedinIcon} alt="" />
                            </a>
                            <a
                                href={URLS.email}
                                aria-label="Email"
                                className="inline-flex h-[clamp(2rem,6vw,2.5rem)] w-[clamp(2rem,6vw,2.5rem)] items-center justify-center rounded-full border border-white/20 text-white/80 transition-colors hover:text-white"
                                target="_blank"
                            >
                                <img src={emailIcon} alt="" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
