---
title: Store actions
description: ''
position: 4
category: 'Usage'
---

## Store actions (including `nuxtServerInit`)

```ts
// In store
{
  actions: {
    async fetchAllProducts ({ commit }) {
      const products = await this.$shopify.product.fetchAll();
      commit('SET_PRODUCTS', products)
    }
  }
}
```
