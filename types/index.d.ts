import type { ShopifyBuy } from 'shopify-buy';
import Vue from 'vue';
import './vuex';

declare module '@nuxt/vue-app' {
  interface Context {
    $shopify: ShopifyBuy;
  }

  interface NuxtAppOptions {
    $shopify: ShopifyBuy;
  }
}

// Nuxt 2.9+
declare module '@nuxt/types' {
  interface Context {
    $shopify: ShopifyBuy;
  }

  interface NuxtAppOptions {
    $shopify: ShopifyBuy;
  }

  interface Configuration {
    shopify?: ShopifyBuy.ConfigAttrs;
  }
}

declare module 'vue/types/vue' {
  interface Vue {
    $shopify: ShopifyBuy;
  }
}
