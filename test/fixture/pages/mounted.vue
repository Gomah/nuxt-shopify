<template>
  <div>
    <pre v-text="products" />
  </div>
</template>

<script>
export default {
  name: 'Mounted',

  data: () => ({
    products: [],
  }),

  head() {
    return {
      title: 'Products: Mounted',
    };
  },

  async mounted() {
    const products = await this.$shopify.product.fetchAll();
    this.$set(this, 'products', [...products]);
  },
};
</script>
