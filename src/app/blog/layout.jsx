import { Inter } from "next/font/google";
import "../globalstyle.css";

const inter = Inter({
	subsets: ["latin"],
	display: "swap",
});

export const metadata = {
	title: "Daniel Morris",
	description: "Welcome to my website!",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" className={inter.className}>
			<body>{children}</body>
		</html>
	);
}
