import type { ShopifyBuy } from 'shopify-buy';

declare module 'vuex/types/index' {
  interface Store<S> {
    $shopify: ShopifyBuy;
  }
}
