import Beams from "../../components/Beams/Beams";

import NavBar from "../NavBar";

export default function Landing() {
    return (
        <>
            <LandingWallpaper />
            <NavBar />
        </>
    );
}

function LandingWallpaper() {
    return (
        <>
            <div
                style={{ width: "100%", height: "100vh", position: "absolute" }}
            >
                <Beams
                    beamWidth={3}
                    beamHeight={30}
                    beamNumber={20}
                    lightColor="#7cb2ff"
                    speed={3}
                    noiseIntensity={2}
                    scale={0.2}
                    rotation={30}
                />
            </div>
        </>
    );
}
