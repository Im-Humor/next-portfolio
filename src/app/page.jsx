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
				<div className="about-desc">
					{" "}
					<h3>About Myself</h3>
					<p>
						Graduated from NAU, worked in marketing, now I develop!
					</p>
				</div>
				<AboutBar />
			</div>
			<div className="color-div under-exp">
				<ExpSection />
			</div>
			<div className="white-div">
				<SpecialtySection />
			</div>
			<div className="color-div-large">
				<Projects />
			</div>
		</div>
	);
}
