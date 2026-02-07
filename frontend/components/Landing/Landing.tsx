import Beams from "../../components/Beams/Beams";

import NavBar from "../NavBar";
import Hero from "./Hero";

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

function LandingWallpaper() {
    return (
        <div className="absolute inset-0 h-[100dvh] pointer-events-none">
            <Beams
                beamWidth={3}
                beamHeight={30}
                beamNumber={20}
                lightColor="#85b8ff"
                // lightColor="#7cb2ff"
                speed={3}
                noiseIntensity={2}
                scale={0.2}
                rotation={30}
            />
        </div>
    );
}
