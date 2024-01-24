"use client";

import "../../globalstyle.css";
import "../blogstyle.css";
import Header from "../../Header";
import Footer from "../../footer";
import BlogHero from "../bloghero";

import { useEffect, useState } from "react";

function BlogPosts({ posts }) {
	const postList = posts.map((post) => (
		<div className="post-container" key={post._id}>
			<ul className="post-list">
				<li className="post-title">
					<a href={`/blog/post/${post._id}`}>{post.title}</a>
				</li>
				<li className="post-content">{post.content}</li>
				<li className="post-date">{post.date}</li>
			</ul>
		</div>
	));
	return postList;
}

export default function AdminPage() {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		(async () => {
			try {
				const response = await fetch(
					"http://localhost:5000/api/users/posts",
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
					window.location.href = "http://localhost:3000/blog/login";
				} else {
					const data = await response.json();
					setPosts(data);
				}
			} catch (err) {
				console.error(err);
			}
		})();
	}, []);

	async function newPost(formData) {
		const response = await fetch("http://localhost:5000/api/posts", {
			cache: "no-store",
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			credentials: "include",
			body: JSON.stringify(Object.fromEntries(formData)),
		});
		if (response.ok) {
			window.location.reload();
		}
	}

	return (
		<div className="admin-container">
			<Header />
			<BlogHero>BLOG</BlogHero>
			<div className="white-div under-hero">
				<div className="admin-content-container">
					<form action={newPost} className="admin-post-form">
						<label htmlFor="title">Title:</label>
						<input type="text" id="title" name="title" />
						<label htmlFor="content">Content:</label>
						<input type="text" id="content" name="content" />
						<label htmlFor="published">Published:</label>
						<input
							type="checkbox"
							id="published"
							name="published"
							value="true"
						/>
						<button>Submit</button>
					</form>
					<BlogPosts posts={posts} />
				</div>
			</div>
			<div className="footer-div-black">
				<Footer />
			</div>
		</div>
	);
}
