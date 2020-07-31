import ShopifyBuy from 'shopify-buy';
// @ts-ignore
import ShopifyModule from '<%= options.shopifyPath %>';
import { Context } from '@nuxt/types';
import 'isomorphic-unfetch';

export default async (
  ctx: Context & { $shopify: ShopifyBuy.Client },
  inject: (name: string, value: unknown) => void
): Promise<void> => {
  const config: ShopifyBuy.Config & { language: string } = {
    domain: '<%= options.domain %>',
    storefrontAccessToken: '<%= options.storefrontAccessToken %>',
    language: '<%= options.language %>',
  };

  const client: ShopifyBuy.Client = ShopifyModule.buildClient(config);

  Object.assign(client, {
    buildClient: (options, fetchClient) => {
      const newClient = ShopifyModule.buildClient(options, fetchClient);
      ctx.$shopify = newClient;
      ctx.app.$shopify = newClient;
      inject('shopify', newClient);
    },
  });

  // Inject shopify to the context as $shopify
  ctx.$shopify = client;
  inject('shopify', client);
};
