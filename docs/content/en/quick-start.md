---
title: Setup
description: 'Easy Shopify Buy client integration with Nuxt.js'
position: 2
category: 'Guide'
---

Check the [Nuxt.js documentation](https://nuxtjs.org/api/configuration-modules#the-modules-property) for more information about installing and using modules in Nuxt.js.

## Setup

Add `nuxt-shopify` as a dependency to your project:

<code-group>
  <code-block label="Yarn" active>

```bash
yarn add nuxt-shopify
```

  </code-block>
  <code-block label="NPM">

```bash
npm install nuxt-shopify
```

  </code-block>
</code-group>

## Storefront access Token

A Storefront API token is required for this module, follow the shopify guide to get you started: https://shopify.dev/docs/storefront-api/getting-started

## nuxt.config.js

```ts
module.exports = {
  modules: ['nuxt-shopify'],

  shopify: {
    /**
     * Your shopify domain
     */
    domain: 'your-shop-name.myshopify.com',

    /**
     * Your shopify storefront access token
     */
    storefrontAccessToken: 'your-storefront-access-token',

    /**
     * This will be larger than the optimized version, as it will contain all fields that are available in the
     * Storefront API. (https://help.shopify.com/en/api/custom-storefronts/storefront-api/reference)
     * This should only be used when you need to add custom queries to supplement the JS Buy SDK queries.
     */
    unoptimized: false,

    /**
     * Set language to return translated content (optional)
     */
    language: 'ja-JP',
  },
};
```

## TypeScript

`nuxt-shopify` offers type definitions. Just add an entry in `tsconfig.json`.

<code-group>
  <code-block label="Nuxt 2.9+" active>

```json{}[tsconfig.json]
{
  "compilerOptions": {
    "types": ["@nuxt/types", "nuxt-shopify"]
  }
}
```

  </code-block>
  <code-block label="Nuxt < 2.9">

```json{}[tsconfig.json]
{
  "compilerOptions": {
    "types": ["@nuxt/vue-app", "nuxt-shopify"]
  }
}
```

  </code-block>

</code-group>
