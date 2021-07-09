import type { Client } from 'shopify-buy';

declare module 'vuex/types/index' {
  interface Store<S> {
    $shopify: Client;
  }
}
