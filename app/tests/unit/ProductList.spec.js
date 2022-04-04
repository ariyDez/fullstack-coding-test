import { shallowMount } from "@vue/test-utils";
import ProductList from "@/components/ProductList.vue";

describe("ProductList.vue", () => {
  it("render when products length is higher than 0", () => {
    const wrapper = shallowMount(ProductList, {
      data() {
        return {
          products: [{ id: 1 }],
          errors: [],
        };
      },
    });
    expect(wrapper.find(".product").exists()).toBeTruthy();
  });

  it("not render when products length is 0", () => {
    const wrapper = shallowMount(ProductList, {
      data() {
        return {
          products: [],
          errors: [],
        };
      },
    });
    expect(wrapper.find(".product").exists()).toBeFalsy();
  });

  it("not render when errors length is 0", () => {
    const wrapper = shallowMount(ProductList, {
      data() {
        return {
          products: [],
          errors: [],
        };
      },
    });
    expect(wrapper.find(".error").exists()).toBeFalsy();
  });
});
