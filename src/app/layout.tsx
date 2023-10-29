import type { Metadata } from "next";
import "./globals.css";

import { Header } from "@/components/header";
import { TailwindIndicator } from "@/components/tailwind-indicator";

export const metadata: Metadata = {
	title: "Noworytaphotography - portfolio",
	description: "Katarzyna Noworyta - photographer.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html className="h-full scroll-smooth antialiased" lang="de" suppressHydrationWarning>
			<body className="h-full">
				<Header />
				{children}
				<TailwindIndicator />
			</body>
		</html>
	);
}
