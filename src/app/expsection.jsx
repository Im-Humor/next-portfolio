"use client";

import "./expsectionstyle.css";
import { useState } from "react";

const ExpItem = ({ date, org, title, location }) => {
	return (
		<div className="exp-item">
			<div className="exp-item-date">
				<h4>{date}</h4>
			</div>
			<div className="exp-item-desc">
				<div className="exp-item-org">
					<h5>{org}</h5>
				</div>
				<div className="exp-item-title">
					<p>{title}</p>
				</div>
				<div className="exp-item-location">
					<p>{location}</p>
				</div>
			</div>
		</div>
	);
};

const ExpFlex = ({ expToggle }) => {
	if (expToggle == false) {
		return (
			<div className="exp-flex">
				<ExpItem
					date="May 2022 - Aug 2023"
					org="COURTESY AUTOMOTIVE GROUP"
					title="IT Technician"
					location="Phoenix - Mesa, AZ"
				/>
				<ExpItem
					date="May 2021 - Aug 2021"
					org="ID TECH CAMPS"
					title="Manager - Paid Media"
					location="Remote - San Diego, CA"
				/>
				<ExpItem
					date="Jul 2019 - May 2021"
					org="INVESTIS DIGITAL"
					title="Sr. Paid Media Specialist"
					location="Scottsdale, AZ"
				/>
			</div>
		);
	} else {
		return (
			<div className="edu-flex">
				<ExpItem
					date="Mar 2023 - Present"
					org="THE ODIN PROJECT"
					title="Student"
					location="Remote - Online"
				/>
				<ExpItem
					date="Aug 2012 - Dec 2015"
					org="NORTHERN ARIZONA UNIVERSITY"
					title="B.S., Strategic Communications"
					location="Flagstaff, AZ"
				/>
			</div>
		);
	}
};

export default function ExpSection() {
	const [expToggle, setExpToggle] = useState(false);

	const handleClick = (event) => {
		if (event.target.id == "exp") {
			setExpToggle(false);
		} else {
			setExpToggle(true);
		}
	};

	if (expToggle == false) {
		return (
			<div className="exp-section">
				<div className="exp-button-section">
					<button
						className="exp-button selected"
						id="exp"
						onClick={handleClick}
					>
						Experience
					</button>
					<button
						className="exp-button"
						id="edu"
						onClick={handleClick}
					>
						Education
					</button>
				</div>
				<ExpFlex expToggle={expToggle} />
			</div>
		);
	} else {
		return (
			<div className="exp-section">
				<div className="exp-button-section">
					<button
						className="exp-button"
						id="exp"
						onClick={handleClick}
					>
						Experience
					</button>
					<button
						className="exp-button selected"
						id="edu"
						onClick={handleClick}
					>
						Education
					</button>
				</div>
				<ExpFlex expToggle={expToggle} />
			</div>
		);
	}
}
