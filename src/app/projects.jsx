"use client";

import "./projectsstyle.css";
import { useState } from "react";

export const ProjectCard = ({ imgsrc, title, subtext, tags }) => {
	const [expandState, setExpandState] = useState(false);

	const handleExpandClick = () => {
		setExpandState(true);
	};

	const handleCloseClick = () => {
		setExpandState(false);
	};

	return (
		<div className="project-card">
			<img src={imgsrc} alt="test image" onClick={handleExpandClick} />
			<div className="project-card-header">{title}</div>
			<div className="project-card-subtext">{subtext}</div>

			{expandState == true && (
				<div className="grey-overlay" onClick={handleCloseClick}>
					<button className="overlay-close-button">CLOSE</button>
					<img src={imgsrc} alt="text" />
				</div>
			)}
		</div>
	);
};

export default function Projects() {
	return (
		<div className="projects-container">
			<div className="projects-header">
				<h3>RECENT PROJECTS</h3>
				<h4>
					Recently completed works and their underlying technologies
				</h4>
			</div>
			<div className="project-cards">
				<ProjectCard
					imgsrc="/test_img.png"
					title="test image"
					subtext="CSS | HTML | JavaScript"
				/>
				<ProjectCard
					imgsrc="test_img2.png"
					title="test image 2"
					subtext="CSS | HTML | Bootstrap"
				/>
			</div>
		</div>
	);
}
