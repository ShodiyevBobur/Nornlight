<template>
  <div class="container md:mt-[60px] max-md:mt-[60px]">
    <div class="flex justify-between md:mb-10 max-md:mb-5 items-center">
      <h4 class="font-bold md:text-[40px] max-md:text-[25px]">
        Популярные товары
      </h4>
    </div>
    <div class="grid md:grid-cols-4 max-md:grid-cols-2 md:gap-5">
      <ProductCard v-for="(item, index) in products" :key="index" :data="item"></ProductCard>
    </div>  
    
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import { usePiniaStore } from "../store";

const store = usePiniaStore();
// Mahsulotlar ro'yxatini saqlash uchun state
const products = ref([]);



// Komponent o'rnatilgandan keyin mahsulotlarni API'dan olish
onMounted(async () => {
  try {
    const response = await axios.get(
      `https://667d5f3b297972455f64d6c6.mockapi.io/products/products`
    );
    products.value = response.data
  } catch (error) {
    console.error("Error fetching products:", error);
  }
});
</script>
