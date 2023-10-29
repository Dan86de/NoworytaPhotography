import Link from "next/link";

import { SectionWrapper } from "./section";

export const Footer = () => {
	return (
		<footer className="bg-background text-primary shadow-primary drop-shadow">
			<SectionWrapper>
				<div className="flex flex-col justify-between p-10 xl:flex-row">
					<ul className="flex flex-col gap-2 pb-4 pt-4 md:flex-row md:pt-0 xl:pb-0">
						<li>
							<Link href={"/agb"}>Allgemeine Geschäftsbedingungen</Link>
						</li>
						<li>
							<Link href={"/impressum"}>Impressum</Link>
						</li>
						<li>
							<Link href={"/datenschutz"}>Datenschutzerklärung</Link>
						</li>
					</ul>
					<strong className="text-sm">copyright @2023 noworytaphotography.com</strong>
				</div>
			</SectionWrapper>
		</footer>
	);
};
