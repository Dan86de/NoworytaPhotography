"use client";

import Link from "next/link";

import { GridPattern, generateGridPattern } from "@/components/grid-pattern";
import { SectionWrapper } from "@/components/section";
import { Button } from "@/components/ui/button";

const blocks = generateGridPattern(40, 10, 80);

export default function NotFound() {
	return (
		<div className="relative inset-0 h-[calc(100vh_-_104px)] overflow-hidden bg-background">
			<GridPattern
				offsetX={0}
				offsetY={0}
				size={64}
				className="absolute -inset-x-0.5 -top-1/4 h-[150%] w-full skew-y-12 stroke-primary/10 stroke-[2] [mask-image:radial-gradient(#274e32,transparent_70%)]"
			>
				{blocks.map(([row, column], index) => (
					<GridPattern.Block
						v-for="([row, column], index) in blocks"
						key={index}
						row={row}
						column={column}
						className="fill-primary/5 transition duration-500 hover:fill-primary"
					/>
				))}
			</GridPattern>
			<div className="flex h-full flex-col items-center justify-center pt-12 md:items-center xl:pt-40">
				<SectionWrapper>
					<div className="mx-auto">
						<h2 className="font-headings text-5xl">404</h2>
						<span className="text-2xl font-semibold md:text-4xl ">Seite nicht gefunden</span>
						<p>Angeforderte Ressource konnte nicht gefunden werden</p>
						<Link href="/" className="block pt-4">
							<Button>Zur Startseite zurückkehren</Button>
						</Link>
					</div>
				</SectionWrapper>
			</div>
		</div>
	);
}
