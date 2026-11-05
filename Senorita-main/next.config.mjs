/** @type {import('next').NextConfig} */
const nextConfig = {
images: {
remotePatterns: [
{ protocol: "https", hostname: "randomuser.me" },
],
},
// Move this to the top level
serverExternalPackages: ['@prisma/client'],
reactCompiler: true,
};

export default nextConfig;
