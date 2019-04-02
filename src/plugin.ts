import ShopifyBuy from 'shopify-buy';

if (process.server || (process.client && !window.fetch)) {
  require('isomorphic-fetch');
}

export default async (ctx: any, inject: (name: string, value: any) => void) => {
  const config: ShopifyBuy.Config = {
    domain: '<%= options.domain %>',
    storefrontAccessToken: '<%= options.storefrontAccessToken %>',
  };

  const client: ShopifyBuy.Client = ShopifyBuy.buildClient(config);

  // Inject shopify to the context as $shopify
  ctx.$shopify = client;
  inject('shopify', client);
};
