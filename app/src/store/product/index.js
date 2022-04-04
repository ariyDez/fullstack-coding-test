import axios from "axios";
const API_URL = "http://localhost:3000";

export default {
  namespaced: true,
  state: {
    products: [],
    errors: [],
  },
  actions: {
    async getProductList(ctx) {
      try {
        const res = await axios.get(`${API_URL}/product/list`);
        ctx.commit("set", res.data);
      } catch (e) {
        ctx.commit("setError", e);
      }
    },
    async updateProductStatus(ctx, { id, status }) {
      try {
        await axios.put(`${API_URL}/product/${id}`, { status });
        ctx.commit("updateStatus", { id, status });
      } catch (e) {
        ctx.commit("setError", e);
      }
    },
  },
  mutations: {
    set(state, products) {
      state.products = products;
    },
    updateStatus(state, data) {
      const product = state.products.find((p) => p.id === data.id);
      const products = state.products.filter((p) => p.id !== data.id);
      if (product) {
        product.deliveryStatus = data.status;
        products.push(product);
      }
      state.products = products;
    },
    setError(state, error) {
      state.errors.push(error);
    },
  },
};
