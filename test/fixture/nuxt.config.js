const resolve = require('path').resolve;

module.exports = {
  rootDir: resolve(__dirname, '../..'),
  srcDir: __dirname,
  modules: ['../../lib/module'],
  shopify: {
    domain: 'graphql.myshopify.com',
    storefrontAccessToken: 'dd4d4dc146542ba7763305d71d1b3d38',
    unoptimized: false,
  },
  dev: process.env.NODE_ENV !== 'test' && process.env.NODE_ENV === 'production',
};
