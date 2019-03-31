import * as ShopifyBuy from 'shopify-buy';

export default (ctx, inject) => {
  const config: ShopifyBuy.Config = {
    domain: (process.env.SHOPIFY_DOMAIN as string) || '<%= options.domain %>',
    storefrontAccessToken:
      (process.env.SHOPIFY_ACCESS_TOKEN as string) || '<%= options.storefrontAccessToken %>',
  };

  const client: ShopifyBuy.Client = ShopifyBuy.buildClient(config);

  // Inject shopify to the context as $shopify
  ctx.$shopify = client;
  inject('shopify', client);
};
