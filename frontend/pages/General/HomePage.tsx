import Landing from "../../components/Landing";
import AboutMe from "../../components/AboutMe";
import Education from "../../components/Education";
import Experience from "../../components/Experience";
import GradualBlur from "../../components/GradualBlur/GradualBlur";
import Projects from "../../components/Projects";
import Footer from "../../components/Footer";

export default function HomePage() {
    return (
        <>
            <Landing />
            <AboutMe />
            <Education />
            <Experience />
            <Projects />
            <Footer />

            {/* Spacer */}
            <div className="h-5 sm:h-0"></div>

            <GradualBlur
                target="page"
                position="bottom"
                height="4rem"
                strength={2}
                divCount={5}
                curve="bezier"
                exponential
                opacity={1}
            />
        </>
    );
}
