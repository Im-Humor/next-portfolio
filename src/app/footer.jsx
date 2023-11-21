import "./footerstyle.css";

export default function Footer() {
	return (
		<div className="footer-container">
			<div className="footer-about">
				<div className="footer-about-header">
					<h4>About Me</h4>
				</div>
				<div className="footer-about-desc">
					<p>
						I am a a passionate web developer dedicated to creating
						high-quality websites that meet the needs of businesses
						and users alike.
					</p>
				</div>
			</div>
			<div className="footer-contact">
				<div className="footer-contact-header">
					<h4>Contact Me</h4>
				</div>
				<div className="footer-contact-desc">
					<p>
						<a
							href="mailto: daniel@danielmorris.me"
							id="contact-link"
						>
							{" "}
							daniel@danielmorris.me
						</a>
					</p>
				</div>
			</div>
			<div className="footer-social">
				<div className="footer-social-header">
					<h4>Follow Me</h4>
				</div>
				<div className="footer-social-desc">
					<p>Let&apos;s connect!</p>
					<a
						href="https://www.linkedin.com/in/mrdanielrmorris/"
						target="_blank"
					>
						<img src="/static/linkedin-icon.svg" alt="LinkedIn" />
					</a>
				</div>
			</div>
		</div>
	);
}
