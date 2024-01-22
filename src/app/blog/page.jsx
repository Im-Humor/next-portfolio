import "../globalstyle.css";
import "./blogstyle.css";
import Header from "../Header";
import Footer from "../footer";
import BlogHero from "./bloghero";
import PostSection from "./postsection";

export default function Blog() {
	return (
		<div className="blog-container">
			<Header />
			<BlogHero />
			<div className="white-div under-hero">
				<PostSection />
			</div>

			<div className="footer-div-black">
				<Footer />
			</div>
		</div>
	);
}
