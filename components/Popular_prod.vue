<template>
  <div class="container md:mt-[102px] max-md:mt-[60px]">
    <div class="flex justify-between md:mb-10  max-md:mb-5 items-center">
      <h4 class="font-bold md:text-[40px] max-md:text-[25px]">Популярные товары</h4>
      <div
        class="flex items-center py-[8px] cursor-pointer gap-[10px] hover:gap-4 duration-300 w-[220px] rounded-full border border-primary max-md:hidden"
      >
        <p class="ml-12 font-medium text-primary">О компании</p>
        <p class="text-2xl font-medium mb-1 text-primary">&rarr;</p>
      </div>
    </div>
    <div class="grid md:grid-cols-4 max-md:grid-cols-2 md:gap-5">
      <div
        class="p-[27px] pt-[11px] w-full h-full md:border md:border-[#D9D9D9] flex gap-4 flex-col"
        v-for="(item, index) in products"
        :key="index"
      >
        <div class="relative">
          <img :src="item.image" alt="Product Image"/>
          <img
            class="z-10 absolute top-0 right-0 translate-y-1/2 cursor-pointer "
            @click="toggleLike(item.id)"
            :src="item.liked ? '/like2.svg' : '/like.svg'"
            alt="Like Button"
          />
        </div>
        <div class="flex flex-col justify-between h-full gap-6 w-full">
          <p class="text-primary font-medium line-clamp-2 leading-[22px] text-xl">
            {{ item.title }}
          </p>
          <div class="div">
            <p class="font-bold text-[#9F9F9F] line-through text-[12px]">
              {{ item.sale }}₽
            </p>
            <div class="flex w-full justify-between">
              <p class="text-primary mt-[6px] font-bold text-xl">
                {{ item.price }}₽
              </p>
              <img
                @click="toggleShopped(item.id)"
                class="py-2 p-5 cursor-pointer rounded-full md:w-[30%] max-md:w-[50%]"
                :src="item.shopped ? '/cart3.svg' : '/cart2.svg'"
                :class="
                  item.shopped ? 'bg-white border border-primary' : 'bg-primary'
                "
                alt="Cart Button"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
        class="flex items-center py-[8px] cursor-pointer gap-[10px] hover:gap-4 duration-300 mt-6 w-full rounded-full border border-primary md:hidden"
      >
        <p class="ml-12 font-medium text-primary">О компании</p>
        <p class="text-2xl font-medium mb-1 text-primary">&rarr;</p>
      </div>
  </div>
</template>


<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

// Mahsulotlar ro'yxatini saqlash uchun state
const products = ref([]);

// Mahsulotni "like" qilish holatini o'zgartirish funksiyasi
const toggleLike = (id) => {
  const product = products.value.find((item) => item.id === id);
  if (product) {
    product.liked = !product.liked;
  }
};

// Mahsulotni "shopped" qilish holatini o'zgartirish funksiyasi
const toggleShopped = (id) => {
  const product = products.value.find((item) => item.id === id);
  if (product) {
    product.shopped = !product.shopped;
  }
};

// Komponent o'rnatilgandan keyin mahsulotlarni API'dan olish
onMounted(async () => {
  try {
    const response = await axios.get(
      `https://667d5f3b297972455f64d6c6.mockapi.io/products/products`
    );
    products.value = response.data.map((product) => ({
      ...product,
      liked: false,
      shopped: false,
    }));
  } catch (error) {
    console.error("Error fetching products:", error);
  }
});
</script>

