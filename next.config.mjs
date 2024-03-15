/** @type {import('next').NextConfig} */
const nextConfig = {
    // Specify the base path for GitHub Pages
    basePath: '/FrontEndApp',
    // Configure export path
    trailingSlash: true, // If your pages have trailing slashes
    generateStaticParams: async () => {
      // Return the list of paths to export
      return {
        '/': { page: '/' },
        // Add other pages if necessary
      };
    },
  };
  
  export default nextConfig;
  