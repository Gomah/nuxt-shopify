---
title: Components
description: ''
position: 3
category: 'Usage'
---

## `asyncData`

```ts
async asyncData({ $shopify, params }) {
  const product = await $shopify.product.fetch(params.id);
  return { product };
}
```

## `methods`/`created`/`mounted`/etc

```ts
methods: {
  async fetchProduct(productId) {
    this.product = await this.$shopify.product.fetch(productId);
  }
}
```
