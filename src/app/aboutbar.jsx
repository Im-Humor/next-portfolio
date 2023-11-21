"use client";

import "./aboutbarstyle.css";
import { useEffect } from "react";

export default function AboutBar() {
	useEffect(() => {
		let barsToLoad = document.querySelectorAll(".bar-load");

		let loadingObserver = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.intersectionRatio > 0) {
					entry.target.classList.add("bar-load");
				} else {
					entry.target.classList.remove("bar-load");
				}
			});
		});

		barsToLoad.forEach((element) => {
			loadingObserver.observe(element);
		});
	});

	return (
		<div className="about-bars-section">
			{" "}
			<div className="about-desc-container">
				{" "}
				<div className="about-desc-header">
					{" "}
					<h3>ABOUT MYSELF</h3>
				</div>
				<div className="about-desc-content">
					{" "}
					<p>
						Since graduating from Northern Arizona University in
						2015, I have worked as an advertising professional, real
						estate agent, and in IT support; but I'm thankful to
						finally be pursuing my passion for web development!
					</p>
				</div>
			</div>
			<div className="about-bars-container">
				<div className="about-bar-container">
					{" "}
					<h4>HTML 85%</h4>
					<div className="about-bar-outer">
						<div
							className="about-bar-inner bar-load"
							id="html"
						></div>
					</div>
				</div>

				<div className="about-bar-container">
					{" "}
					<h4>Javascript 80%</h4>
					<div className="about-bar-outer">
						<div
							className="about-bar-inner bar-load"
							id="javascript"
						></div>
					</div>
				</div>

				<div className="about-bar-container">
					{" "}
					<h4>CSS 75%</h4>
					<div className="about-bar-outer">
						<div
							className="about-bar-inner bar-load"
							id="css"
						></div>
					</div>
				</div>

				<div className="about-bar-container">
					{" "}
					<h4>React / Next.JS 65%</h4>
					<div className="about-bar-outer">
						<div
							className="about-bar-inner bar-load"
							id="react"
						></div>
					</div>
				</div>
			</div>
		</div>
	);
}
