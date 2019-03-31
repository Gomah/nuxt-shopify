import * as ShopifyBuy from 'shopify-buy';

declare module '@nuxt/vue-app' {
  interface Context {
    $shopify: ShopifyBuy.Client;
  }
}

declare module 'vue/types/vue' {
  interface Vue {
    $shopify: ShopifyBuy.Client;
  }
}

declare module 'vuex' {
  interface Store<S> {
    $shopify: ShopifyBuy.Client;
  }
}
