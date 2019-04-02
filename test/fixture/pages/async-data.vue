<template>
  <div>
    <pre v-text="products" />
  </div>
</template>

<script>
export default {
  name: 'AsyncData',

  data: () => ({
    products: [],
  }),

  head() {
    return {
      title: 'Products: Async Data',
    };
  },

  async asyncData({ $shopify }) {
    const products = await $shopify.product.fetchAll();

    return {
      products,
    };
  },
};
</script>
