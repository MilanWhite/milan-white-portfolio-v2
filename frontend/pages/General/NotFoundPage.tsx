import { Link } from "react-router-dom";
import GrainBackground from "../../components/GrainBackground";
import { URLS } from "../../src/config/navigation";
import { COLORS } from "../../src/config/theme";

export default function NotFoundPage() {
    return (
        <main
            className="relative min-h-[100vh] overflow-hidden px-4 sm:px-6"
            style={{ backgroundColor: COLORS.secondaryBlue }}
        >
            <GrainBackground
                gradientPrimary="rgba(133, 184, 255, 0.16)"
                gradientSecondary="rgba(255, 255, 255, 0.08)"
                gradientFade="rgba(0, 15, 37, 0)"
            />
            <div className="relative z-10 flex min-h-[100vh] items-center justify-center py-[clamp(3rem,8vw,6rem)]">
                <div className="w-full max-w-[960px]">
                    <div className="relative flex flex-col items-center gap-4 text-center text-white/85">
                        <h1 className="text-[clamp(24pt,6vw,48pt)] font-semibold tracking-tight text-white">
                            Page not found
                        </h1>
                        <p className="max-w-[560px] text-[clamp(11pt,2.2vw,14pt)] leading-relaxed text-white/70">
                            The page you're looking for doesn't exist or was
                            moved. Head back home to keep exploring the
                            portfolio.
                        </p>
                        <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
                            <Link
                                to={URLS.homePage}
                                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-medium text-white/90 shadow-[0_10px_30px_rgba(0,0,0,0.35)] transition duration-200 hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/15 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                            >
                                <span
                                    aria-hidden="true"
                                    className="mr-2 text-white/70"
                                >
                                    &larr;
                                </span>
                                Back to home
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
