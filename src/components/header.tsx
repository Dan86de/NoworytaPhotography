"use client";
import { type UrlObject } from "url";

import { MenuIcon, XIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { Navbar } from "@/components/navbar";
import { BrandLogo } from "@/lib/icons";

import { MobileMenu } from "./mobile-menu";
import { Button } from "./ui/button";

export type ILink = {
	title: string;
	url: UrlObject;
};

export const links: ILink[] = [
	{
		title: "Home",
		url: { pathname: "/" },
	},
	{
		title: "Über mich",
		url: { pathname: "/about" },
	},
	{
		title: "Portfolio",
		url: { pathname: "/portfolio" },
	},
	{
		title: "Kontakt",
		url: { pathname: "/contact" },
	},
];

export const Header = () => {
	const [showMenu, setShowMenu] = useState(false);

	const closeMenu = () => setShowMenu(false);
	return (
		<header className="fixed inset-x-0 z-10 flex w-screen flex-1 items-center bg-background shadow">
			<div className="container relative flex items-center justify-between">
				<div>
					<Link
						href={"/"}
						className="focus:ring-0.5 flex h-12 w-12 items-center justify-center rounded-md bg-transparent outline-none ring-foreground ring-offset-1 transition-all focus:ring-primary focus-visible:outline-primary md:h-16 md:w-16 lg:h-20 lg:w-20"
					>
						<BrandLogo />
					</Link>
				</div>
				<Navbar links={links} />
				<Button
					onClick={() => setShowMenu(!showMenu)}
					size={"icon"}
					className="relative ml-auto inline-flex lg:hidden"
				>
					<MenuIcon
						className={`h-6 w-6 transition duration-500 ${showMenu ? "rotate-180 opacity-0" : ""}`}
					/>
					<XIcon
						className={`absolute top-2 h-6 w-6 transition duration-500 ${
							showMenu ? "" : "-rotate-180 opacity-0"
						}`}
					/>
				</Button>
				<MobileMenu links={links} closeMenu={closeMenu} showMenu={showMenu} />
			</div>
		</header>
	);
};
