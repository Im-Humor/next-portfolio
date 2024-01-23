import "@/app/globalstyle.css";
import "@/app/aboutbarstyle.css";
import "@/app/blog/blogstyle.css";
import Header from "@/app/Header";
import Footer from "@/app/footer";
import BlogHero from "@/app/blog/bloghero";
import PostSection from "@/app/blog/postsection";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default function Blog() {
	const cookieStore = cookies();
	const access_token = cookieStore.get("access_token");
	if (access_token) {
		redirect("/blog/admin");
	} else {
		return (
			<div className="blog-container">
				<Header />
				<BlogHero>BLOG</BlogHero>
				<div className="white-div under-hero">
					<PostSection />
				</div>
				<div className="footer-div-black">
					<Footer />
				</div>
			</div>
		);
	}
}
