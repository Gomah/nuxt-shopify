<template>
  <div>
    <pre v-text="products.length" />

    <div v-for="product in products" :key="product.id">
      {{ product.id }}
    </div>

    <button v-if="hasNextPage" @click.prevent="loadMoreProducts">Fetch more</button>
    <p v-else>No more products to fetch</p>
  </div>
</template>

<script>
export default {
  name: 'Collection Pagination',

  data: () => ({
    products: [],
    hasNextPage: true,
    productsPerPage: 3,
  }),

  head() {
    return {
      title: 'Products',
    };
  },

  async mounted() {
    this.$shopify.collection
      .fetchWithProducts('Z2lkOi8vc2hvcGlmeS9Db2xsZWN0aW9uLzM4OTI0MjE3OQ==', {
        productsFirst: this.productsPerPage,
      })
      .then((collection) => {
        if (!collection?.products[this.productsPerPage - 1]?.hasNextPage) {
          this.hasNextPage = false;
        }

        this.$set(this, 'products', [...collection.products]);
      });
  },

  methods: {
    async loadMoreProducts() {
      this.$shopify.fetchNextPage(this.products).then((nextPageOfProducts) => {
        if (!nextPageOfProducts.data.node.products.pageInfo.hasNextPage) {
          this.hasNextPage = false;
        }

        this.$set(this, 'products', [...this.products, ...nextPageOfProducts.model]);
      });
    },
  },
};
</script>
