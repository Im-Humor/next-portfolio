import "../../globalstyle.css";
import Header from "../../Header";
import Footer from "../../footer";
import { cookies } from "next/headers";
require("dotenv").config();
import setCookie from "set-cookie-parser";
import { redirect } from "next/navigation";

export default function BlogLogin() {
	//function for logging in user and generating token
	async function loginUser(formData) {
		"use server";
		try {
			console.log("fetching");
			const response = await fetch(
				`${process.env.DOMAIN_API}/users/login`,
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
					httpOnly: true,
					path: "/",
				}
			);
			console.log("fetched");
		} catch (err) {
			console.log(err);
		}
		redirect("http://localhost:3000/blog/admin");
	}

	//function for creating new user in database and hashing password
	async function createUser(formData) {
		"use server";

		console.log(formData);
		console.log(Object.fromEntries(formData));

		try {
			console.log(`${process.env.DOMAIN_API}/users/create`);
			const result = await fetch(
				`${process.env.DOMAIN_API}/users/create`,
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
		<div className="blog-login-container">
			<Header />
			<div className="color-div">
				<h2>Please login to blog</h2>
				<form action={loginUser}>
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
				<form action={createUser}>
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

				<h3>Login form</h3>
			</div>

			<div className="footer-div-black">
				<Footer />
			</div>
		</div>
	);
}