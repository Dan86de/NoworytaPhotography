import { type UrlObject } from "url";

import Link from "next/link";

export type Link = {
	title: string;
	url: UrlObject;
};

export const links: Link[] = [
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

export const Navbar = () => {
	return (
		<nav className="relative hidden gap-4 text-xl font-normal lg:block">
			<div className="flex gap-2">
				{links.map((link) => (
					<Link
						key={link.title}
						href={link.url}
						className="rounded-md px-1 text-foreground/70 outline-none ring-foreground ring-offset-1 hover:text-foreground focus:ring-1 dark:text-foreground/50 dark:hover:text-foreground"
					>
						{link.title}
					</Link>
				))}
			</div>
		</nav>
	);
};
