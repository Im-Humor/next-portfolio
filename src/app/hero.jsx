import "./herostyle.css";

export default function Hero() {
	return (
		<div className="color-div hero-color-div">
			<div className="hero-div">
				<div className="hero-image">
					<img src="/static/danielmorris_headshot.jpg" alt="" />
				</div>
				<div className="hero-desc">
					{" "}
					<p className="hero-desc-greeting">HELLO! MY NAME IS</p>
					<h3 className="hero-desc-name">DANIEL MORRIS</h3>
					<h4 className="hero-desc-title">JUNIOR WEB DEVELOPER</h4>
					<p className="hero-desc-desc">
						I'm glad you found me! I am always looking for new
						opportunities so please reach out if you think I'd be a
						good fit!
					</p>
					<div className="hero-icons">
						<div className="hero-icon-line">
							{" "}
							<img src="/static/phone-svgrepo-com.svg" alt="" />
							623-810-4117
						</div>
						<div className="hero-icon-line">
							{" "}
							<img src="/static/mail-svgrepo-com.svg" alt="" />
							daniel@danielmorris.me
						</div>
						<div className="hero-icon-line">
							{" "}
							<img src="/static/house.svg" alt="" />
							Phoenix, Arizona
						</div>
					</div>
					<div className="hero-buttons">
						<a
							href="https://linkedin.com/in/mrdanielrmorris"
							className="hero-button"
							target="_blank"
						>
							<img src="/static/linkedin-icon.svg" alt="" />
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
