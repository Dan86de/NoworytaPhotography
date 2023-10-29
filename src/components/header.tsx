import Link from "next/link";

import { Navbar } from "@/components/navbar";
import { BrandLogo } from "@/lib/icons";

export const Header = () => {
	return (
		<header className="fixed inset-x-0 z-10 flex w-screen flex-1 items-center bg-background shadow">
			<div className="container relative flex items-center justify-between">
				<div>
					<Link
						href={"/"}
						className="focus:ring-0.5 flex h-20 w-20 items-center justify-center rounded-md bg-transparent outline-none ring-foreground ring-offset-1 transition-all focus:ring-primary focus-visible:outline-primary"
					>
						<BrandLogo />
					</Link>
				</div>
				<Navbar />
			</div>
		</header>
	);
};
