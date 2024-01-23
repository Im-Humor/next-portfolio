"use client";

import "@/app/globalstyle.css";
import "@/app/blog/blogstyle.css";
import Header from "@/app/Header";
import Footer from "@/app/footer";
import BlogHero from "@/app/blog/bloghero";
import { useState, useEffect } from "react";

function Post({ post }) {
	return (
		<div className="post-content-container">
			<div className="post-container">
				{" "}
				<ul className="post-list">
					<li className="post-title">
						<h4>{post.title}</h4>
					</li>
					<li className="post-date">{post.date}</li>
					<li className="post-content">{post.content}</li>
				</ul>
			</div>
		</div>
	);
}

export default function PostPage({ params }) {
	const [post, setPost] = useState({});

	useEffect(() => {
		(async () => {
			try {
				const response = await fetch(
					`http://localhost:5000/api/posts/${params.slug}`,
					{
						cache: "no-store",
						method: "GET",
						headers: {
							"Content-Type": "application/json",
						},
						credentials: "include",
					}
				);

				if (!response.ok) {
					window.location.href = "http://localhost:3000/blog/";
				} else {
					const data = await response.json();
					console.log(data);
					setPost(data);
				}
			} catch (err) {
				console.error(err);
			}
		})();
	}, []);

	return (
		<div className="post-info-container">
			<Header />
			<BlogHero>BLOG</BlogHero>
			<div className="white-div under-hero">
				<Post post={post} />
			</div>

			<div className="footer-div-black">
				<Footer />
			</div>
		</div>
	);
}
