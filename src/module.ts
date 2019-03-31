import * as path from 'path';

function shopifyModule(_moduleOptions) {
  // Combine options
  const moduleOptions = {
    ...this.options.shopify,
    ..._moduleOptions,
  };

  if (!moduleOptions.domain || !moduleOptions.storefrontAccessToken) {
    throw new Error(`[Shopify module] domain & storefrontAccessToken must be provided.`);
  }

  // Add plugin for shopify
  this.addPlugin({
    src: path.resolve(__dirname, 'plugin.js'),
    fileName: 'shopify.js',
    options: moduleOptions,
  });
}

module.exports = shopifyModule;
module.exports.meta = require('../package.json');
