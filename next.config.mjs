// next.config.js
const nextConfig = {
    // Specify the base path for GitHub Pages
    basePath: '/FrontEndApp',
    // Configure export behavior
    output: {
      // Set the export target to 'static'
      // This will generate a static version of your Next.js app
      // that can be deployed to static hosting platforms like GitHub Pages
      // For more options, you can refer to the Next.js documentation:
      // https://nextjs.org/docs/api-reference/cli#output
      target: 'static',
    },
  };
  
  module.exports = nextConfig;
  