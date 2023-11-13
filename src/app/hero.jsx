import "./herostyle.css";

export default function Hero() {
	return (
		<div className="color-div hero-color-div">
			<div className="hero-div">
				<div className="hero-image">
					<img src="/test_img.png" alt="" />
				</div>
				<div className="hero-desc">
					{" "}
					<p className="hero-desc-greeting">HELLO! MY NAME IS</p>
					<h3 className="hero-desc-name">DANIEL MORRIS</h3>
					<h4 className="hero-desc-title">JUNIOR WEB DEVELOPER</h4>
					<p className="hero-desc-desc">Welcome to my site</p>
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
				</div>
			</div>
		</div>
	);
}
