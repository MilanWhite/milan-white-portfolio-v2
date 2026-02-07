import Landing from "../../components/Landing";
import AboutMe from "../../components/AboutMe";
import Education from "../../components/Education";
import GradualBlur from "../../components/GradualBlur/GradualBlur";

export default function HomePage() {
    return (
        <>
            <Landing />
            <AboutMe />
            <Education />
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
