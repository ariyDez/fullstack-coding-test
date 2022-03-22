<template>
  <div>
    <div>Products</div>
    <ul v-if="products && products.length" class="product">
      <li v-for="product of products" :key="product.id">
        <p>
          Customer
          <strong>{{product.customer?.name}}</strong>
        </p>
        <p>
          Product type
          <strong>{{product.productType?.name}}</strong>
        </p>
        <p>
          Status
          <button @click="updateStatus(product.id, product.deliveryStatus)">
            <strong>{{product.deliveryStatus}}</strong>
          </button>
        </p>
      </li>
    </ul>

    <ul v-if="errors && errors.length" class="error">
      <li v-for="(error, index) of errors" :key="index">{{error.message}}</li>
    </ul>
  </div>
</template>

<script>
const random = (maxValue) => {
  return Math.floor(Math.random() * maxValue);
};

const compare = (a, b) => {
  if (a.id < b.id) {
    return -1;
  }
  if (a.id > b.id) {
    return 1;
  }
  return 0;
};

const deliveryStatuses = ["PENDING", "ORDERED", "SHIPPED", "CANCELED"];

export default {
  created() {
    this.$store.dispatch("product/getProductList");
  },
  computed: {
    products() {
      console.log({ store: this.$store });
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      return this.$store.state.product.products.sort(compare);
    },
    erorrs() {
      return this.$store.state.product.errors;
    },
  },
  methods: {
    async updateStatus(id, status) {
      try {
        const filteredStatuses = deliveryStatuses.filter((st) => st !== status);
        const index = random(filteredStatuses.length);
        const updatedStatus = filteredStatuses[index];
        this.$store.dispatch("product/updateProductStatus", {
          id,
          status: updatedStatus,
        });
      } catch (e) {
        this.errors.push(e);
      }
    },
  },
};
</script>
