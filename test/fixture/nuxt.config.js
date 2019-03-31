const resolve = require('path').resolve;

const optionConfig = {};

module.exports = {
  rootDir: resolve(__dirname, '../..'),
  srcDir: __dirname,
  render: {
    resourceHints: false,
  },
  modules: ['~/../../lib/module'],
  shopify: {
    domain: 'graphql.myshopify.com',
    storefrontAccessToken: 'dd4d4dc146542ba7763305d71d1b3d38',
  },
  dev: process.env.NODE_ENV !== 'test' && process.env.NODE_ENV === 'production',
};
