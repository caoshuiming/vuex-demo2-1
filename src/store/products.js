import shop from "../api/shop";

// initial state
const state = {
  all: [],
};

// getters
const getters = {};

const mutations = {
  setAll(state, products) {
    state.all = products;
  },
  deleteProductInventory(state, {id}) {
    const product = state.all.find(product => product.id === id);
    product.inventory--;
  },
  addProductInventory(state, {id, num}){
    const product = state.all.find(product => product.id === id);
    product.inventory+=num;
  }
};

// actions
const actions = {
  getAllProducts({ commit }) {
    shop.getProducts(products => {
      commit("setAll", products);
    });
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
