/** @type {import('next').NextConfig} */
const nextConfig = {
  // Tells Next.js to build static HTML files
  output: "export",
  
  // Replace "CivicDesk" with your exact GitHub repository name
  // This ensures your CSS and images load correctly on GitHub Pages
  basePath: "/civic-desk.github.io", 
};

export default nextConfig;
