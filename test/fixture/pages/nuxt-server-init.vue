<template>
  <div>
    <pre v-text="products" />
  </div>
</template>

<script>
export default {
  name: 'NuxtServerInit',

  computed: {
    products() {
      return this.$store.state.products;
    }
  },

  head() {
    return {
      title: 'Products: Nuxt Server Init',
    };
  },

};
</script>
