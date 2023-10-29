const withMDX = require("@next/mdx")();

/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "dsc.cloud",
				port: "",
				pathname: "/88160a/**",
			},
		],
		remotePatterns: [
			{
				protocol: "https",
				hostname: "images.generated.photos",
				port: "",
				pathname: "/**",
			},
		],
	},
	pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
	experimental: {
		typedRoutes: true,
	},
};

module.exports = withMDX(nextConfig);
