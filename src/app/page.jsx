import "./globalstyle.css";
import AboutBar from "./aboutbar";
import ExpSection from "./expsection";
import SpecialtySection from "./specialties";
import Projects from "./projects";
import Hero from "./hero";

export default function Home() {
	return (
		<div className="home-container">
			<Hero />
			<div className="white-div under-hero">
				<AboutBar />
			</div>
			<div className="color-div under-exp">
				<ExpSection />
			</div>
			<div className="white-div specialty-div">
				<SpecialtySection />
			</div>
			<div className="projects-div">
				<Projects />
			</div>
		</div>
	);
}
