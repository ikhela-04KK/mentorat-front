/** @type {import('next').NextConfig} */
const nextConfig = {


    // // for winston
    // future: {
    //     webpack5: false,
    //   },
    // webpack: (config) => {
    //   config.resolve.fallback = { path: false,fs: false };
  
    //   return config;
    // },
    images:{
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'avatars.githubusercontent.com',
              port: '',
            },
            {
                protocol:'https',
                hostname:'cloudflare-ipfs.com',
                port:'',
            }
          ],
        },
    async headers() {
        return [
            {
                // matching all API routes
                source: "/api/:path*",
                headers: [
                    { key: "Access-Control-Allow-Credentials", value: "true" },
                    { key: "Access-Control-Allow-Origin", value: "*" }, // replace this your actual origin
                    { key: "Access-Control-Allow-Methods", value: "GET,DELETE,PATCH,POST,PUT" },
                    { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
                ]
            }
        ]
    },
    // // config for debugging
    // webpack(config) {
    //     config.output = config.output || {};
    //     config.output.devtoolModuleFilenameTemplate = function (info) {
    //         return "file:///" + encodeURI(info.absoluteResourcePath);
    //     };
    //     return config;
    // },
}


module.exports = nextConfig
