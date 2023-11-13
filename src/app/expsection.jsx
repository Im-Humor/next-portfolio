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
					date="test date"
					org="test org"
					title="test title"
					location="test location"
				/>
				<ExpItem
					date="test date"
					org="test org"
					title="test title"
					location="test location"
				/>
			</div>
		);
	} else {
		return (
			<div className="edu-flex">
				<ExpItem
					date="test date2"
					org="test org2"
					title="test title2"
					location="test location2"
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

	return (
		<div className="exp-section">
			<div className="exp-button-section">
				<button className="exp-button" id="exp" onClick={handleClick}>
					Experience
				</button>
				<button className="exp-button" id="edu" onClick={handleClick}>
					Education
				</button>
			</div>
			<ExpFlex expToggle={expToggle} />
		</div>
	);
}
