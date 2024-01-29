"use client";

import "@/app/aboutbarstyle.css";
import "@/app/blog/blogstyle.css";
import { useEffect, useState } from "react";

function BlogPosts({ posts }) {
	const postList = posts.map((post) => (
		<div className="post-container" key={post._id}>
			<ul className="post-list">
				<li className="post-title">
					<h4>
						<a href={`http://localhost:3000/blog/post/${post._id}`}>
							{" "}
							{post.title}
						</a>
					</h4>
				</li>
				<li className="post-date">{post.date}</li>
				<li className="post-content">{post.content}</li>
			</ul>
		</div>
	));
	return postList;
}

export default function PostSection() {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		(async () => {
			try {
				const response = await fetch(
					"http://localhost:5000/api/posts",
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
					window.location.href = "http://localhost:3000/";
				} else {
					const data = await response.json();
					data.forEach((post) => {
						post.date = new Date(post.date);
						post.date = post.date.toDateString();
					});
					setPosts(data);
				}
			} catch (err) {
				console.error(err);
			}
		})();
	}, []);
	return (
		<div className="posts-container">
			<BlogPosts posts={posts} />
		</div>
	);
}
