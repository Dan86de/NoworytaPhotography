import type { Metadata } from "next";
import "./globals.css";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { TailwindIndicator } from "@/components/tailwind-indicator";

const baseUrl =
	process.env.NODE_ENV === "development"
		? "http://localhost.3000"
		: "https://noworytaphotography.com";

export const metadata: Metadata = {
	title: "Noworytaphotography - portfolio",
	description: "Katarzyna Noworyta - photographer.",
	openGraph: {
		title: "Noworytaphotography - portfolio",
		description: "Katarzyna Noworyta - photographer.",
		url: baseUrl,
		siteName: "Katarzyna Noworyta - photographer.",
		locale: "de",
		type: "website",
	},
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html className="h-full scroll-smooth antialiased" lang="de" suppressHydrationWarning>
			<body className="h-full">
				<Header />
				{children}
				<Footer />
				<TailwindIndicator />
			</body>
		</html>
	);
}
