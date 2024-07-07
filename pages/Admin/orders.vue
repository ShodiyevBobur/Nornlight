<template>
  <div class="flex justify-end">
    <div></div>
    <div class="w-[68%]">
      <h1>Order</h1>
      <img :src="store.orders[0].basket[0][0].image"/>
    </div>
  </div>
</template>

<script setup>
import { usePiniaStore } from "../store";

const store = usePiniaStore();

const order = store.orders
console.log(order); 

definePageMeta({
  layout: "admin",
});
</script>


<style lang="scss" scoped></style>
