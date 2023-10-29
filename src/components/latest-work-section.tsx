"use client";

import Image from "next/image";
import { Suspense } from "react";

import image1 from "@/latest-images/example1.webp";
import image10 from "@/latest-images/example10.webp";
import image11 from "@/latest-images/example11.webp";
import image12 from "@/latest-images/example12.webp";
import image13 from "@/latest-images/example13.webp";
import image14 from "@/latest-images/example14.webp";
import image15 from "@/latest-images/example15.webp";
import image16 from "@/latest-images/example16.webp";
import image17 from "@/latest-images/example17.webp";
import image18 from "@/latest-images/example18.webp";
import image2 from "@/latest-images/example2.webp";
import image3 from "@/latest-images/example3.webp";
import image4 from "@/latest-images/example4.webp";
import image5 from "@/latest-images/example5.webp";
import image6 from "@/latest-images/example6.webp";
import image7 from "@/latest-images/example7.webp";
import image8 from "@/latest-images/example8.webp";
import image9 from "@/latest-images/example9.webp";

import { GridPattern, generateGridPattern } from "./grid-pattern";
import { SectionTitle, SectionWrapper, SectionWrapperRounded } from "./section";

const blocks = generateGridPattern(40, 10, 80);

export const LatestWorkSection = () => {
	return (
		<div className="relative inset-0 overflow-hidden bg-background">
			<GridPattern
				offsetX={0}
				offsetY={0}
				size={64}
				className="absolute -inset-x-0.5 top-0 h-[150%]  w-full skew-y-12 stroke-primary/10 stroke-[2] [mask-image:radial-gradient(#274e32,transparent_70%)]"
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
			<SectionWrapperRounded className="z-10 bg-white">
				<SectionTitle>Letztes arbeit</SectionTitle>
			</SectionWrapperRounded>
			<Suspense fallback={<p>Laden...</p>}>
				<SectionWrapper>
					<div className=" grid gap-2 md:grid-cols-2 2xl:grid-cols-3">
						<div className="relative h-96">
							<Image
								alt="Some text"
								src={image8}
								fill
								sizes="500px"
								className=" object-cover"
							></Image>
						</div>
						<div className="relative h-96">
							<Image
								alt="Some text"
								src={image2}
								fill
								sizes="500px"
								className=" object-cover"
							></Image>
						</div>
						<div className="relative h-96">
							<Image
								alt="Some text"
								src={image3}
								fill
								sizes="500px"
								className=" object-cover"
							></Image>
						</div>
						<div className="relative h-96">
							<Image
								alt="Some text"
								src={image4}
								fill
								sizes="500px"
								className=" object-cover"
							></Image>
						</div>
						<div className="relative h-96">
							<Image
								alt="Some text"
								src={image5}
								fill
								sizes="500px"
								className=" object-cover"
							></Image>
						</div>
						<div className="relative h-96">
							<Image
								alt="Some text"
								src={image6}
								fill
								sizes="500px"
								className=" object-cover"
							></Image>
						</div>
						<div className="relative h-96">
							<Image
								alt="Some text"
								src={image7}
								fill
								sizes="500px"
								className=" object-cover"
							></Image>
						</div>

						<div className="relative h-96">
							<Image
								alt="Some text"
								src={image1}
								fill
								sizes="500px"
								className=" object-cover"
							></Image>
						</div>
						<div className="relative h-96">
							<Image
								alt="Some text"
								src={image9}
								fill
								sizes="500px"
								className=" object-cover"
							></Image>
						</div>
						<div className="relative h-96">
							<Image
								alt="Some text"
								src={image10}
								fill
								sizes="500px"
								className=" object-cover"
							></Image>
						</div>
						<div className="relative h-96">
							<Image
								alt="Some text"
								src={image11}
								fill
								sizes="500px"
								className=" object-cover"
							></Image>
						</div>
						<div className="relative h-96">
							<Image
								alt="Some text"
								src={image12}
								fill
								sizes="500px"
								className=" object-cover"
							></Image>
						</div>
						<div className="relative h-96">
							<Image
								alt="Some text"
								src={image13}
								fill
								sizes="500px"
								className=" object-cover"
							></Image>
						</div>
						<div className="relative h-96">
							<Image
								alt="Some text"
								src={image14}
								fill
								sizes="500px"
								className=" object-cover"
							></Image>
						</div>
						<div className="relative h-96">
							<Image
								alt="Some text"
								src={image15}
								fill
								sizes="500px"
								className=" object-cover"
							></Image>
						</div>
						<div className="relative h-96">
							<Image
								alt="Some text"
								src={image16}
								fill
								sizes="500px"
								className=" object-cover"
							></Image>
						</div>
						<div className="relative h-96">
							<Image
								alt="Some text"
								src={image17}
								fill
								sizes="500px"
								className=" object-cover"
							></Image>
						</div>
						<div className="relative h-96">
							<Image
								alt="Some text"
								src={image18}
								fill
								sizes="500px"
								className=" object-cover"
							></Image>
						</div>
					</div>
				</SectionWrapper>
			</Suspense>
		</div>
	);
};
