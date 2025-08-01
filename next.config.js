/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ["commondatastorage.googleapis.com"],
	},
	experimental: {
		reactCompiler: true,
	},
}

module.exports = nextConfig
