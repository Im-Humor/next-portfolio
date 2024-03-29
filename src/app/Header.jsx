"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
	const [scrollPos, setScrollPos] = useState(0);

	const handleScroll = () => {
		setScrollPos(window.scrollY);
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
	});

	if (scrollPos == 0) {
		return (
			<div className="header" onScroll={handleScroll}>
				<div className="header-name">DANIEL MORRIS</div>
				<ul className="header-links">
					<li className="header-link">
						<a href="/" className="header-link-text">
							HOME
						</a>
					</li>
					<li className="header-link">
						<a href="/blog" className="header-link-text">
							BLOG
						</a>
					</li>
				</ul>
			</div>
		);
	} else {
		return (
			<div className="header-scrolling" onScroll={handleScroll}>
				<div className="header-name">DANIEL MORRIS</div>
				<ul className="header-links">
					<li className="header-link">
						<Link href="/" className="header-link-text">
							HOME
						</Link>
					</li>
					<li className="header-link">
						<Link href="/blog" className="header-link-text">
							BLOG
						</Link>
					</li>
				</ul>
			</div>
		);
	}
}
