/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
	images: {
		domains: [
			'via.placeholder.com',
			process.env.DOMAIN,
			'korpus-a.ru',
			'',
		], // Добавьте ваш хост
	},
}

module.exports = nextConfig
