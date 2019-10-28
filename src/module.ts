import path from 'path';

function shopifyModule(_moduleOptions): void {
  const { env, shopify } = this.options;

  // Combine options
  const moduleOptions = {
    ...(env && {
      domain: env.SHOPIFY_DOMAIN,
      storefrontAccessToken: env.SHOPIFY_ACCESS_TOKEN,
    }),
    ...shopify,
    ..._moduleOptions,
  };

  // Specify shopify-buy path
  Object.assign(moduleOptions, {
    shopifyPath: moduleOptions.unoptimized ? 'shopify-buy/index.unoptimized.umd' : 'shopify-buy',
  });

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
