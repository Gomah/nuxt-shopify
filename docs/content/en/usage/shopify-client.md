---
title: Shopify Client
description: ''
position: 5
category: 'Usage'
---

<a href="https://github.com/Shopify/js-buy-sdk/blob/master/README.md#examples">Examples</a> from the official shopify-buy sdk library

### Fetching products

```ts
// Fetch all products in your shop
this.$shopify.product.fetchAll().then((products) => {
  // Do something with the products
  console.log(products);
});

// Fetch a single product by ID
const productId = 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0Lzc4NTc5ODkzODQ=';

this.$shopify.product.fetch(productId).then((product) => {
  // Do something with the product
  console.log(product);
});
```

#### Fetching product recommendations

Find recommended products related to a given productId. To learn more about how recommendations are generated, see https://shopify.dev/themes/product-merchandising/recommendations.

```ts
// Fetch recommendations for a specific product
this.$shopify.product.fetchRecommendations(productId).then((products) => {
  // Do something with the products
  console.log(products);
});
```

### Fetching Collections

```ts
// Fetch all collections, including their products
this.$shopify.collection.fetchAllWithProducts().then((collections) => {
  // Do something with the collections
  console.log(collections);
  console.log(collections[0].products);
});

// Fetch a single collection by ID, including its products
const collectionId = 'Z2lkOi8vc2hvcGlmeS9Db2xsZWN0aW9uLzM2OTMxMjU4NA==';

this.$shopify.collection.fetchWithProducts(collectionId).then((collection) => {
  // Do something with the collection
  console.log(collection);
  console.log(collection.products);
});
```

### Creating a checkout

```ts
// Create an empty checkout
this.$shopify.checkout.create().then((checkout) => {
  // Do something with the checkout
  console.log(checkout);
});
```

### Adding Line Items

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
this.$shopify.checkout.addLineItems(checkoutId, lineItemsToAdd).then((checkout) => {
  // Do something with the updated checkout
  console.log(checkout.lineItems); // Array with one additional line item
});
```

### Updating checkout attributes

```ts
const checkoutId = 'Z2lkOi8vc2hvcGlmeS9DaGVja291dC9kMTZmM2EzMDM4Yjc4N=';
const input = { customAttributes: [{ key: 'MyKey', value: 'MyValue' }] };

this.$shopify.checkout.updateAttributes(checkoutId, input).then((checkout) => {
  // Do something with the updated checkout
});
```

### Updating Line Items

```ts
const checkoutId = 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMTgyMTc3ODc1OTI='; // ID of an existing checkout
const lineItemsToUpdate = [{ id: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0Lzc4NTc5ODkzODQ=', quantity: 2 }];

// Update the line item on the checkout (change the quantity or variant)
this.$shopify.checkout.updateLineItems(checkoutId, lineItemsToUpdate).then((checkout) => {
  // Do something with the updated checkout
  console.log(checkout.lineItems); // Quantity of line item 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0Lzc4NTc5ODkzODQ=' updated to 2
});
```

### Removing Line Items

```ts
const checkoutId = 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMTgyMTc3ODc1OTI='; // ID of an existing checkout
const lineItemIdsToRemove = ['Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0Lzc4NTc5ODkzODQ='];

// Remove an item from the checkout
this.$shopify.checkout.removeLineItems(checkoutId, lineItemIdsToRemove).then((checkout) => {
  // Do something with the updated checkout
  console.log(checkout.lineItems); // Checkout with line item 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0Lzc4NTc5ODkzODQ=' removed
});
```

### Fetching a Checkout

```ts
const checkoutId = '2U4NWNkYzI4ZWEyOTdlOD9rZXk9MDVjMzY3Zjk3YWM0YWJjNGRhMTkwMDgwYTUzOGJmYmI=';

this.$shopify.checkout.fetch(checkoutId).then((checkout) => {
  // Do something with the checkout
  console.log(checkout);
});
```

### Adding a Discount

```ts
const checkoutId = 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMTgyMTc3ODc1OTI='; // ID of an existing checkout
const discountCode = 'best-discount-ever';

// Add a discount code to the checkout
this.$shopify.checkout.addDiscount(checkoutId, discountCode).then((checkout) => {
  // Do something with the updated checkout
  console.log(checkout);
});
```

### Removing a Discount

```ts
const checkoutId = 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMTgyMTc3ODc1OTI='; // ID of an existing checkout

// Removes the applied discount from an existing checkout.
this.$shopify.checkout.removeDiscount(checkoutId).then((checkout) => {
  // Do something with the updated checkout
  console.log(checkout);
});
```

### Updating a Shipping Address

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
this.$shopify.checkout.updateShippingAddress(checkoutId, shippingAddress).then((checkout) => {
  // Do something with the updated checkout
});
```
