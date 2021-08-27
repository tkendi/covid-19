module.exports = {
    poweredByHeader: false,
    // /sitemap.xml 생성시 주석 제거
    // webpack: (config, { isServer }) => {
    //   if (isServer) {
    //     require('./scripts/generate-sitemap-json');
    //   }
    //   return config;
    // },
    // async rewrites() {
    //   return [
    //     {
    //       source: '/sitemap.xml',
    //       destination: '/api/sitemap',
    //     },
    //   ];
    // },
};