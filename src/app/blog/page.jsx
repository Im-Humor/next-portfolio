"use client";

import "@/app/globalstyle.css";
import "@/app/aboutbarstyle.css";
import "@/app/blog/blogstyle.css";
import Header from "@/app/Header";
import Footer from "@/app/footer";
import BlogHero from "@/app/blog/bloghero";
import PostSection from "@/app/blog/postsection";
import { useState, useEffect } from "react";
import { getCookie, getCookies } from "cookies-next";

export default function Blog() {
	const [loggedIn, setLoggedIn] = useState(false);

	useEffect(() => {
		console.log(getCookies());
		const access_cookie = getCookie("access_token");
		console.log(access_cookie);
		if (access_cookie) {
			setLoggedIn(true);
		}
	}, []);

	if (loggedIn) {
		window.location.href = "/blog/admin";
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
