import type { Client, Config } from 'shopify-buy';
import Vue from 'vue';
import './vuex';

declare module '@nuxt/vue-app' {
  interface Context {
    $shopify: Client;
  }

  interface NuxtAppOptions {
    $shopify: Client;
  }
}

// Nuxt 2.9+
declare module '@nuxt/types' {
  interface Context {
    $shopify: Client;
  }

  interface NuxtAppOptions {
    $shopify: Client;
  }

  interface Configuration {
    shopify?: Config;
  }
}

declare module 'vue/types/vue' {
  interface Vue {
    $shopify: Client;
  }
}
