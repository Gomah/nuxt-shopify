# 🛍 Shopify Module

[![npm version][npm-version-src]][npm-version-href]
[![Dependencies][david-dm-src]][david-dm-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![code style: prettier](https://img.shields.io/badge/code_style-airbnb/prettier-FF5A5F.svg?style=flat-square)](https://github.com/airbnb/javascript)
[![License: MIT](https://img.shields.io/badge/License-MIT-black.svg?style=flat-square)](https://opensource.org/licenses/MIT)
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2FGomah%2Fnuxt-shopify.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2FGomah%2Fnuxt-shopify?ref=badge_shield)

> Easy <a href="https://github.com/Shopify/js-buy-sdk">Shopify Buy</a> client integration with Nuxt.js

## Setup

Install with yarn:

```bash
yarn add nuxt-shopify
```

Install with npm:

```bash
npm install nuxt-shopify
```

**nuxt.config.js**

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

OR

```ts
module.exports = {
  modules: ['nuxt-shopify'],

  env: {
    SHOPIFY_DOMAIN: 'your-shop-name.myshopify.com', // your shopify domain
    SHOPIFY_ACCESS_TOKEN: 'your-storefront-access-token', // your shopify storefront access token
  },
};
```

Don't have a Storefront Access Token yet? [Get started](https://help.shopify.com/en/api/custom-storefronts/storefront-api/getting-started).

## Usage

### Component

**`asyncData`**

```ts
async asyncData({ $shopify, params }) {
  const product = await $shopify.product.fetch(params.id);
  return { product };
}
```

**`methods`/`created`/`mounted`/etc**

```ts
methods: {
  async fetchProduct(productId) {
    this.product = await this.$shopify.product.fetch(productId);
  }
}
```

### Store actions (including `nuxtServerInit`)

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

### Shopify Client

> <a href="https://github.com/Shopify/js-buy-sdk/blob/master/README.md#examples">Examples</a> from the official shopify-buy sdk library

#### Fetching products

```ts
// Fetch all products in your shop
this.$shopify.product.fetchAll().then(products => {
  // Do something with the products
  console.log(products);
});

// Fetch a single product by ID
const productId = 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0Lzc4NTc5ODkzODQ=';

this.$shopify.product.fetch(productId).then(product => {
  // Do something with the product
  console.log(product);
});
```

#### Fetching Collections

```ts
// Fetch all collections, including their products
this.$shopify.collection.fetchAllWithProducts().then(collections => {
  // Do something with the collections
  console.log(collections);
  console.log(collections[0].products);
});

// Fetch a single collection by ID, including its products
const collectionId = 'Z2lkOi8vc2hvcGlmeS9Db2xsZWN0aW9uLzM2OTMxMjU4NA==';

this.$shopify.collection.fetchWithProducts(collectionId).then(collection => {
  // Do something with the collection
  console.log(collection);
  console.log(collection.products);
});
```

#### Creating a checkout

```ts
// Create an empty checkout
this.$shopify.checkout.create().then(checkout => {
  // Do something with the checkout
  console.log(checkout);
});
```

#### Adding Line Items

```ts
const checkoutId = 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMTgyMTc3ODc1OTI='; // ID of an existing checkout
const lineItemsToAdd = [
  {
    variantId: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8yOTEwNjAyMjc5Mg==',
    quantity: 5,
    customAttributes: [{ key: 'MyKey', value: 'MyValue' }],
  },
];

// Add an item to the checkout
this.$shopify.checkout.addLineItems(checkoutId, lineItemsToAdd).then(checkout => {
  // Do something with the updated checkout
  console.log(checkout.lineItems); // Array with one additional line item
});
```

#### Updating checkout attributes

```ts
const checkoutId = 'Z2lkOi8vc2hvcGlmeS9DaGVja291dC9kMTZmM2EzMDM4Yjc4N=';
const input = { customAttributes: [{ key: 'MyKey', value: 'MyValue' }] };

this.$shopify.checkout.updateAttributes(checkoutId, input).then(checkout => {
  // Do something with the updated checkout
});
```

#### Updating Line Items

```ts
const checkoutId = 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMTgyMTc3ODc1OTI='; // ID of an existing checkout
const lineItemsToUpdate = [{ id: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0Lzc4NTc5ODkzODQ=', quantity: 2 }];

// Update the line item on the checkout (change the quantity or variant)
this.$shopify.checkout.updateLineItems(checkoutId, lineItemsToUpdate).then(checkout => {
  // Do something with the updated checkout
  console.log(checkout.lineItems); // Quantity of line item 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0Lzc4NTc5ODkzODQ=' updated to 2
});
```

#### Removing Line Items

```ts
const checkoutId = 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMTgyMTc3ODc1OTI='; // ID of an existing checkout
const lineItemIdsToRemove = ['Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0Lzc4NTc5ODkzODQ='];

// Remove an item from the checkout
this.$shopify.checkout.removeLineItems(checkoutId, lineItemIdsToRemove).then(checkout => {
  // Do something with the updated checkout
  console.log(checkout.lineItems); // Checkout with line item 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0Lzc4NTc5ODkzODQ=' removed
});
```

#### Fetching a Checkout

```ts
const checkoutId = '2U4NWNkYzI4ZWEyOTdlOD9rZXk9MDVjMzY3Zjk3YWM0YWJjNGRhMTkwMDgwYTUzOGJmYmI=';

this.$shopify.checkout.fetch(checkoutId).then(checkout => {
  // Do something with the checkout
  console.log(checkout);
});
```

#### Adding a Discount

```ts
const checkoutId = 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMTgyMTc3ODc1OTI='; // ID of an existing checkout
const discountCode = 'best-discount-ever';

// Add a discount code to the checkout
this.$shopify.checkout.addDiscount(checkoutId, discountCode).then(checkout => {
  // Do something with the updated checkout
  console.log(checkout);
});
```

#### Removing a Discount

```ts
const checkoutId = 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMTgyMTc3ODc1OTI='; // ID of an existing checkout

// Removes the applied discount from an existing checkout.
this.$shopify.checkout.removeDiscount(checkoutId).then(checkout => {
  // Do something with the updated checkout
  console.log(checkout);
});
```

#### Updating a Shipping Address

```ts
const checkoutId = 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMTgyMTc3ODc1OTI='; // ID of an existing checkout

const shippingAddress = {
  address1: 'Chestnut Street 92',
  address2: 'Apartment 2',
  city: 'Louisville',
  company: null,
  country: 'United States',
  firstName: 'Bob',
  lastName: 'Norman',
  phone: '555-625-1199',
  province: 'Kentucky',
  zip: '40202',
};

// Update the shipping address for an existing checkout.
this.$shopify.checkout.updateShippingAddress(checkoutId, shippingAddress).then(checkout => {
  // Do something with the updated checkout
});
```

## Development

1. Clone this repository
2. Install dependencies using `yarn install` or `npm install`
3. Build the module using `yarn build` or `npm run build`
4. Start development server using `yarn dev` or `npm run dev`

## 📑 License

[MIT License](./LICENSE)

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/dt/nuxt-shopify.svg?style=flat-square
[npm-version-href]: https://npmjs.com/package/nuxt-shopify
[npm-downloads-src]: https://img.shields.io/npm/v/nuxt-shopify/latest.svg?style=flat-square
[npm-downloads-href]: https://npmjs.com/package/nuxt-shopify
[david-dm-src]: https://david-dm.org/gomah/nuxt-shopify/status.svg?style=flat-square
[david-dm-href]: https://david-dm.org/gomah/nuxt-shopify

[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2FGomah%2Fnuxt-shopify.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2FGomah%2Fnuxt-shopify?ref=badge_large)
