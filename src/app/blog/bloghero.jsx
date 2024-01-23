import "../herostyle.css";
import "./blogstyle.css";

export default function BlogHero({ children }) {
	return (
		<div className="color-div hero-color-div">
			<div className="hero-div">
				<div className="hero-desc">
					{" "}
					<h3 className="hero-desc-name">{children}</h3>
				</div>
			</div>
		</div>
	);
}
