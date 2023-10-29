import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Head from "next/head";

import { Header } from "@/components/header";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
	title: "Noworytaphotography - portfolio",
	description: "Katarzyna Noworyta - photographer.",
};

const montserrat = Montserrat({
	subsets: ["latin"],
	variable: "--font-montserrat",
	weight: ["300", "400", "500"],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html className="h-full scroll-smooth antialiased" lang="pl" suppressHydrationWarning>
			<Head>
				<link rel="stylesheet" href="https://use.typekit.net/xws6uis.css"></link>
			</Head>
			<body className={cn("h-full font-sans", montserrat.variable)}>
				<Header />
				{children}
			</body>
		</html>
	);
}
