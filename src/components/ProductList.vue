<template>
  <ul>
    <li v-for="product in products" :key="product.id">
      {{ product.title }} - {{ product.price }} - 库存{{ product.inventory }}
      <br />
      <button :disabled="!product.inventory" @click="addProductToCard(product)">
        加入购物车
      </button>
    </li>
  </ul>
</template>

<script>
export default {
  computed: {
    products() {
      return this.$store.state.products.all;
    }
  },
  methods: {
    addProductToCard(product) {
      this.$store.dispatch("cart/addProductToCard", product);
    }
  },

  created() {
    this.$store.dispatch("products/getAllProducts");
  }
};
</script>
