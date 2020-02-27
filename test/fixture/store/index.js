import Vue from 'vue';

export const state = () => ({
  products: [],
})

export const mutations = {
  SET_PRODUCTS(state, payload) {
    Vue.set(state, 'products', payload);
  }
}

export const actions = {
  async nuxtServerInit({ commit }, context) {
    if (context.route.name === 'nuxt-server-init' && process.server) {
      try {
        const products = await context.app.$shopify.product.fetchAll();
        commit('SET_PRODUCTS', products)
      } catch (e) {
        console.error('products err: ', e)
      }
    }
  }
}
