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
					<h3>Hi, I'm Daniel Morris</h3>
					<h4>Junior Web Developer</h4>
					<p>Welcome to my site</p>
				</div>
			</div>
		</div>
	);
}
