"use client";

import "./specialtiesstyle.css";

const SpecialtyCard = ({ title, children }) => {
	return (
		<div
			className="specialty-card"
			onMouseEnter={(event) => {
				if (event.target.classList.contains("specialty-card")) {
					event.target.style.animation = "hover-over 0.5s forwards";
				}
			}}
			onMouseLeave={(event) => {
				if (event.target.classList.contains("specialty-card")) {
					event.target.style.animation = "hover-off 1s forwards";
				}
			}}
		>
			<div className="specialty-card-header">
				<h4>{title}</h4>
			</div>
			<div className="specialty-card-desc">{children}</div>
		</div>
	);
};

export default function SpecialtySection() {
	return (
		<div className="specialty-section">
			<div className="specialty-header">
				<div className="specialty-header-title">
					<h3>OTHER SPECIALTIES</h3>
				</div>
				<div className="specialty-header-desc">
					Alongside my web development skills, I also have experience
					in these additional fields:
				</div>
			</div>
			<div className="specialty-cards">
				<SpecialtyCard title="Digital Paid Advertising">
					<p>
						Using paid media spend on social media platforms and
						search engines, I can drive user engagement to meet
						advertising goals and increase site revenues.
					</p>
				</SpecialtyCard>
				<SpecialtyCard title="Site Analytics">
					Using Google Analytics and Google&apos;s available suite of
					analytics tools, I can craft explanations of user behavior
					and provide insight into testing strategies that can
					increase user engagement and improve site useability.
				</SpecialtyCard>
			</div>
		</div>
	);
}
