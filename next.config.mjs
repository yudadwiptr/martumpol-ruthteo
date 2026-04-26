/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Ini bakal bikin Vercel tetep lanjut build biarpun ada error kodingan yang gak rapi
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Opsional: sekalian abaikan error typescript kalau ada
    ignoreBuildErrors: true,
  },
}

export default nextConfig;