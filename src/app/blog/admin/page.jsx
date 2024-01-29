"use client";

import "@/app/globalstyle.css";
import "@/app/blog/blogstyle.css";
import Header from "@/app/Header";
import Footer from "@/app/footer";
import BlogHero from "@/app/blog/bloghero";

import { useEffect, useState } from "react";

function Post({ post }) {
	const [editing, setEditing] = useState(false);

	async function updatePost(formData) {
		if (formData.get("published") == null) {
			formData.append("published", "false");
		}
		const response = await fetch(
			`https://fish-berry-health.glitch.me/api/posts/${post._id}`,
			{
				cache: "no-store",
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				credentials: "include",
				body: JSON.stringify(Object.fromEntries(formData)),
			}
		);
		if (response.ok) {
			window.location.reload();
		}
	}

	async function deletePost(id) {
		const response = await fetch(
			`https://fish-berry-health.glitch.me/api/posts/${post._id}`,
			{
				cache: "no-store",
				method: "DELETE",
				headers: {
					"Content-Type": "application/json",
				},
				credentials: "include",
			}
		);
		if (response.ok) {
			window.location.reload();
		}
	}

	return (
		<div className="post-container" key={post._id}>
			{editing ? (
				<div className="edit-form-container">
					{" "}
					<form action={updatePost}>
						<input
							type="text"
							id="title"
							name="title"
							defaultValue={post.title}
						/>
						<input
							type="text"
							id="content"
							name="content"
							defaultValue={post.content}
						/>
						<input
							type="checkbox"
							id="published"
							name="published"
							value="true"
						/>
						<button>Submit</button>
					</form>
					<button
						onClick={() => {
							deletePost(post._id);
						}}
					>
						Delete
					</button>
				</div>
			) : (
				<ul className="post-list">
					<li className="post-title">
						<a href={`/blog/post/${post._id}`}>{post.title}</a>
					</li>
					<li>Published: {post.published.toString()}</li>
					<li className="post-content">{post.content}</li>
					<li className="post-date">{post.date}</li>
					<li>
						<button
							onClick={() => {
								setEditing(true);
							}}
						>
							Edit
						</button>
					</li>
				</ul>
			)}
		</div>
	);
}

function BlogPosts({ posts }) {
	const postList = posts.map((post) => <Post post={post} key={post._id} />);
	return postList;
}

export default function AdminPage() {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		(async () => {
			try {
				const response = await fetch(
					"https://fish-berry-health.glitch.me/api/users/posts",
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
					window.location.href =
						"https://www.danielmorris.me/blog/login";
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
		const response = await fetch(
			"https://fish-berry-health.glitch.me/api/posts",
			{
				cache: "no-store",
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				credentials: "include",
				body: JSON.stringify(Object.fromEntries(formData)),
			}
		);
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
						<textarea
							id="content"
							name="content"
							rows="10"
							cols="100"
						/>
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
