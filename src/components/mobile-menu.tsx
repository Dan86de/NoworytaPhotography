import Link from "next/link";

import { type ILink } from "./header";

interface MobileMenuProps {
	showMenu: boolean;
	links: ILink[];
	closeMenu: () => void;
}

export const MobileMenu = ({ showMenu, links, closeMenu }: MobileMenuProps) => {
	return (
		<>
			{showMenu && (
				<div
					className={`absolute inset-0 bottom-0 left-0 right-0 top-14 h-screen w-screen items-center justify-center overflow-hidden bg-background shadow-md xl:hidden`}
				>
					<ul className="flex w-screen flex-col items-center space-y-2 divide-y">
						{links.map((link, index) => (
							<li key={index}>
								<Link
									onClick={closeMenu}
									href={link.url}
									className="block w-screen px-8 pt-2 text-xl font-medium text-foreground/75 transition hover:text-zinc-300"
								>
									{link.title}
								</Link>
							</li>
						))}
					</ul>
				</div>
			)}
		</>
	);
};
