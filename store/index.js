export const usePiniaStore = defineStore("pinia", {
  state() {
    return {
      likedProducts: [],
      basket: [],
      orders: [],
    };
  },
  actions: {
    addProductToLiked(product) {
      const index = this.likedProducts.findIndex(
        (item) => item.id === product.id
      );

      if (index === -1) {
        this.likedProducts.push(product);
      } else {
        this.likedProducts.splice(index, 1);
      }
      // console.log(this.likedProducts);
    },
    addToBasket(product, quantity) {
      const index = this.basket.findIndex((item) => item.id === product.id);
      if (index === -1) {
        this.basket.push({ ...product, quantity: quantity || 1 });
      } else {
        this.basket.splice(index, 1);
      }

      console.log(this.basket);
    },
    removeToBasket(index) {
      this.basket.splice(index, 1);

      console.log(this.basket);
    },
    addOrders(order) {
      this.orders.push(order);

      // console.log(this.orders);
    },


    removeOrders(order){
      const index = this.orders.findIndex((item) => item.id === order.id);
      if (index!== -1) {
        this.orders.splice(index, 1);
      }

      // console.log(this.orders);
    }
  },
  persist: true,
});
