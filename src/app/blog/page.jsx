import "../globalstyle.css";
import Header from "../Header";
import Footer from "../footer";

export default function Blog() {
	return (
		<div className="blog-container">
			<Header />
			<div className="color-div">
				<h2>Welcome to my blog</h2>
			</div>

			<div className="footer-div-black">
				<Footer />
			</div>
		</div>
	);
}
