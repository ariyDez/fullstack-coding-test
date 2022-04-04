import { createStore } from "vuex";

import productStore from "./product";

export default createStore({
  modules: { product: productStore },
});
