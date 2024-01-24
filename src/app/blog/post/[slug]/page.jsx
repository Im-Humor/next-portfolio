"use client";

import "@/app/globalstyle.css";
import "@/app/blog/blogstyle.css";
import Header from "@/app/Header";
import Footer from "@/app/footer";
import BlogHero from "@/app/blog/bloghero";
import { useState, useEffect } from "react";

function Comments({ postComments }) {
	if (postComments && postComments.length > 0) {
		postComments.forEach((comment) => {
			comment.date = new Date(comment.date);
			comment.date = comment.date.toDateString();
		});
		const commentItems = postComments.map((comment) => {
			if (comment.author_account) {
				return (
					<li className="comment-container" key={comment._id}>
						<ul className="comment-list">
							<li className="comment-name">
								{comment.author_account.username}
							</li>
							<li className="comment-date">{comment.date}</li>
							<li className="comment-post">{comment.content}</li>
						</ul>
					</li>
				);
			} else {
				return (
					<li className="comment-container" key={comment._id}>
						<ul className="comment-list">
							<li className="comment-name">
								{comment.author_name}
							</li>
							<li className="comment-date">{comment.date}</li>
							<li className="comment-post">{comment.content}</li>
						</ul>
					</li>
				);
			}
		});
		return commentItems;
	} else {
		return null;
	}
}

function Post({ post, params }) {
	const [commentForm, setCommentForm] = useState(false);

	async function formSubmit(formData) {
		try {
			const response = await fetch(
				`http://localhost:5000/api/posts/${params.slug}`,
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
		} catch (err) {
			console.error(err);
		}
	}

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
					<Comments postComments={post.comments} />
					{commentForm ? (
						<li className="comment-form-item">
							<form action={formSubmit} className="comment-form">
								<label htmlFor="name">Name:</label>
								<input type="text" id="name" name="name" />
								<label htmlFor="content">Post:</label>
								<input
									type="text"
									id="content"
									name="content"
								/>
								<button>Submit</button>
							</form>
							<button
								onClick={() => setCommentForm(!commentForm)}
							>
								Comment
							</button>
						</li>
					) : (
						<button onClick={() => setCommentForm(!commentForm)}>
							Comment
						</button>
					)}
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
				<Post post={post} params={params} />
			</div>

			<div className="footer-div-black">
				<Footer />
			</div>
		</div>
	);
}
