"use client";

import "@/app/globalstyle.css";
import "@/app/blog/blogstyle.css";
import Header from "@/app/Header";
import Footer from "@/app/footer";
import BlogHero from "@/app/blog/bloghero";
import { useState, useEffect } from "react";

function Comment({ comment, loggedIn, params }) {
	async function deleteComment(id) {
		try {
			const response = await fetch(
				`https://fish-berry-health.glitch.me/api/posts/${params.slug}/comments/${id}`,
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
		} catch (err) {
			console.error(err);
		}
	}

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
				{loggedIn ? (
					<button onClick={() => deleteComment(comment._id)}>
						Delete
					</button>
				) : null}
			</li>
		);
	} else {
		return (
			<li className="comment-container" key={comment._id}>
				<ul className="comment-list">
					<li className="comment-name">{comment.author_name}</li>
					<li className="comment-date">{comment.date}</li>
					<li className="comment-post">{comment.content}</li>
				</ul>
				{loggedIn ? (
					<button onClick={() => deleteComment(comment._id)}>
						Delete
					</button>
				) : null}
			</li>
		);
	}
}

function Comments({ postComments, loggedIn, params }) {
	if (postComments && postComments.length > 0) {
		postComments.forEach((comment) => {
			comment.date = new Date(comment.date);
			comment.date = comment.date.toDateString();
		});
		const commentItems = postComments.map((comment) => (
			<Comment
				comment={comment}
				key={comment._id}
				loggedIn={loggedIn}
				params={params}
			/>
		));
		return commentItems;
	} else {
		return null;
	}
}

function Post({ post, loggedIn, params }) {
	const [commentForm, setCommentForm] = useState(false);

	async function formSubmit(formData) {
		try {
			const response = await fetch(
				`https://fish-berry-health.glitch.me/api/posts/${params.slug}/comments`,
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
					<li className="comment-header">
						<h4>Comments:</h4>
					</li>
					<Comments
						postComments={post.comments}
						loggedIn={loggedIn}
						params={params}
					/>
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
	const [loggedIn, setLoggedIn] = useState(false);

	useEffect(() => {
		(async () => {
			try {
				const response = await fetch(
					`https://fish-berry-health.glitch.me/api/posts/${params.slug}`,
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
					data.date = new Date(data.date);
					data.date = data.date.toDateString();
					setPost(data);
				}
			} catch (err) {
				console.error(err);
			}
			try {
				const response = await fetch(
					`https://fish-berry-health.glitch.me/api/users/authuser`,
					{
						cache: "no-store",
						method: "GET",
						headers: {
							"Content-Type": "application/json",
						},
						credentials: "include",
					}
				);

				if (response.ok) {
					setLoggedIn(true);
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
			<div className="white-div-blog under-hero">
				<Post post={post} loggedIn={loggedIn} params={params} />
			</div>

			<div className="footer-div-black">
				<Footer />
			</div>
		</div>
	);
}
