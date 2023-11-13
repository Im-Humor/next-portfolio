"use client";

import "./specialtiesstyle.css";

const SpecialtyCard = ({ title, children }) => {
	return (
		<div
			className="specialty-card"
			onMouseEnter={(event) => {
				event.target.style.animation = "hover-over 0.5s forwards";
			}}
			onMouseLeave={(event) => {
				event.target.style.animation = "hover-off 1s forwards";
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
					<h3>Other Specialties</h3>
				</div>
				<div className="specialty-header-desc">
					Alongside my web development skills, I also have experience
					in these additional fields:
				</div>
			</div>
			<div className="specialty-cards">
				<SpecialtyCard title="test">
					<p>This is a test</p>
				</SpecialtyCard>
			</div>
		</div>
	);
}
