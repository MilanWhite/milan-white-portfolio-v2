import { useEffect, useRef, useState, type RefObject } from "react";
import Beams from "../../components/Beams/Beams";

import NavBar from "../NavBar";
import Hero from "./Hero";

import { COLORS } from "../../src/config/theme";

export default function Landing() {
    return (
        <div className="relative isolate h-[100dvh] overflow-hidden">
            <LandingWallpaper />
            <div className="relative flex h-full flex-col">
                <NavBar />
                <Hero />
            </div>
        </div>
    );
}

const useInView = (
  ref: RefObject<HTMLElement | null>,
  rootMargin = "0px",
) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const element = ref.current;
    if (!element || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { rootMargin, threshold: 0.1 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [ref, rootMargin]);

  return isVisible;
};

function LandingWallpaper() {
    const wallpaperRef = useRef<HTMLDivElement>(null);
    const isVisible = useInView(wallpaperRef, "100px");

    return (
        <div
            ref={wallpaperRef}
            className="absolute inset-0 h-[100dvh] pointer-events-none"
        >
            <Beams
                backgroundColor={COLORS.backgroundColor}
                accentColor={COLORS.beamsBlue}
                beamWidth={3}
                beamHeight={30}
                beamNumber={20}
                speed={4}
                noiseIntensity={2}
                scale={0.2}
                rotation={30}
                fps={30}
                active={isVisible}
            />
        </div>
    );
}
