import "../../globalstyle.css";
import "../blogstyle.css";
import Header from "../../Header";
import Footer from "../../footer";
import { cookies } from "next/headers";
require("dotenv").config();
import setCookie from "set-cookie-parser";
import { redirect } from "next/navigation";
import BlogHero from "../bloghero";

export default function BlogLogin() {
	//function for logging in user and generating token
	async function loginUser(formData) {
		"use server";
		try {
			console.log("fetching");
			const response = await fetch(
				`https://fish-berry-health.glitch.me/api/users/login`,
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
			const newCookies = setCookie.parse(response, { map: true });
			cookies().set(
				newCookies.access_token.name,
				newCookies.access_token.value,
				{
					domain: "https://fish-berry-health.glitch.me",
					secure: true,
					httpOnly: true,
					path: "/",
				}
			);
			console.log("fetched");
		} catch (err) {
			console.log(err);
		}
		redirect("https://www.danielmorris.me/blog/admin");
	}

	//function for creating new user in database and hashing password
	async function createUser(formData) {
		"use server";

		console.log(formData);
		console.log(Object.fromEntries(formData));

		try {
			console.log(`https://fish-berry-health.glitch.me/api/users/create`);
			const result = await fetch(
				`https://fish-berry-health.glitch.me/api/users/create`,
				{
					cache: "no-store",
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(Object.fromEntries(formData)),
				}
			);
			console.log("Success:");
		} catch (err) {
			console.log("Error", err);
		}
	}
	return (
		<div className="blog-container">
			<Header />
			<BlogHero>BLOG</BlogHero>
			<div className="white-div under-hero">
				<div className="blog-login-container">
					<div className="blog-login-hover">
						<h3>Login form</h3>
						<form action={loginUser} className="blog-login-form">
							<label htmlFor="username">Username:</label>
							<input
								type="text"
								id="username"
								name="username"
								required="true"
								max="100"
							/>
							<label htmlFor="password">Password:</label>
							<input
								type="text"
								id="password"
								name="password"
								required="true"
								max="100"
							/>
							<button>Submit</button>
						</form>

						<h3>Create user</h3>
						<form
							action={createUser}
							className="blog-create-user-form"
						>
							<label htmlFor="first_name">First name:</label>
							<input
								type="text"
								id="first_name"
								name="first_name"
								required="true"
								max="100"
							/>
							<label htmlFor="last_name">Last name:</label>
							<input
								type="text"
								id="last_name"
								name="last_name"
								required="true"
								max="100"
							/>
							<label htmlFor="email">Email:</label>
							<input
								type="email"
								id="email"
								name="email"
								required="true"
								max="320"
							/>
							<label htmlFor="username">Username:</label>
							<input
								type="text"
								id="username"
								name="username"
								required="true"
								max="100"
							/>
							<label htmlFor="password">Password:</label>
							<input
								type="text"
								id="password"
								name="password"
								required="true"
								max="1000"
							/>
							<button type="submit">Submit</button>
						</form>
					</div>
				</div>
			</div>

			<div className="footer-div-black">
				<Footer />
			</div>
		</div>
	);
}
