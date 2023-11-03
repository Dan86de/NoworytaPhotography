import * as NextLink from "next/link";

import { type ILink } from "./header";

export const Navbar = ({ links }: { links: ILink[] }) => {
	return (
		<nav className="relative hidden gap-4 text-xl font-normal lg:block">
			<div className="flex gap-2">
				{links
					.filter((link) => !link.mobileOnly)
					.map((link) => (
						<NextLink.default
							key={link.title}
							href={link.url}
							className="rounded-md px-1 text-foreground/70 outline-none ring-foreground ring-offset-1 hover:text-foreground focus:ring-1 dark:text-foreground/50 dark:hover:text-foreground"
						>
							{link.title}
						</NextLink.default>
					))}
			</div>
		</nav>
	);
};
