const state = {
  items: [],
  checkoutStatus: null
};

// getters
const getters = {};

// actions
const actions = {
  addProductToCard({ commit }, product) {
    if (product.inventory > 0) {
      commit(
        "products/deleteProductInventory",
        { id: product.id },
        { root: true }
      );
      commit("addItem", product);
    }
  }
};

// mutations
const mutations = {
  addItem(state,pro) {
    let i = 0;
    for (let item of state.items) {
      if (item.id === pro.id) {
        item.count++;
        item.subtotal+=pro.price;
        i = 1;
        break;
      }
    };
    if (i === 0) {
      const itemPro = {
        id: pro.id,
        title: pro.title,
        price: pro.price,
        count: 1,
        subtotal: pro.price
      };
      state.items.push(itemPro);
    }
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
