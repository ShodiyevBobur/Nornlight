<template>
  <div class="container">
    <div v-if="product" class="md:flex gap-8 md:mt-[110px] mt-[50px]">
      <div class="md:w-1/2">
        <img :src="product.image" alt="" />
      </div>
      <div>
        <h2 class="text-xl">{{ product.title }}</h2>

        <p class="text-[#B3B3B3] mt-4">Scott</p>
        <div class="mt-1">
          <p class="text-[#B3B3B3]">Артикул : 7655-188</p>
        </div>
        <p class="text-[#4D932C] mt-1">наличии</p>
        <div class="flex gap-5 items-center mt-4">
          <p class="font-bold text-xl text-primary">{{ product.price }} ₽</p>
          <p class="font-bold text-[#9F9F9F] line-through text-[12px]">
            {{ product.sale }} ₽
          </p>
        </div>

        <p class="mt-4">
          Профессиональный гоночный хардтейл для кросс-кантри уровня Чемпионата
          и Кубка Мира. Одна из самых легких рам среди гоночных хардтейлов для
          кросс-кантри.
        </p>
        <div class="flex mt-2">
          <div class="flex bg-[#E5E5E5] rounded">
            <button @click="removeCart()" class="px-2 py-1">-</button>
            <p class="px-2] py-1">{{ count }}</p>
            <button @click="addToCart()" class="px-2 py-1">+</button>
          </div>

          <button class="ml-5 bg-[#454545] text-white rounded px-4">
            В корзину
          </button>
        </div>
      </div>
    </div>

    <div v-else>
      <p>Loading...</p>
    </div>
    <h2 class="text-2xl mt-[60px] justify-start mb-6">Характеристика</h2>

    <div class="flex justify-between px-4 py-4">
      <p class="w-1/2">Цвет</p>
      <p>Жёлтый</p>
    </div>
    <div class="flex justify-between px-4 py-4 bg-[#F8F8F8]">
      <p class="w-1/2">Год</p>
      <p>2016</p>
    </div>
    <div class="flex justify-between px-4 py-4">
      <p class="w-1/2">Диаметр колеса</p>
      <p>27.5</p>
    </div>
    <div class="flex justify-between px-4 py-4 bg-[#F8F8F8]">
      <p class="w-1/2">Материал рамы</p>
      <p>Карбон</p>
    </div>
    <div class="flex justify-between px-4 py-4">
      <p class="w-1/2">Размер</p>
      <p>L</p>
    </div>
    <div class="flex justify-between px-4 py-4 bg-[#F8F8F8]">
      <p class="w-1/2">Страна</p>
      <p>Швейцария</p>
    </div>
    <div class="flex justify-between px-4 py-4">
      <p class="w-1/2">Производитель</p>
      <p >Scott</p>
    </div>
    <div class="flex justify-between px-4 py-4 bg-[#F8F8F8]">
      <p class="w-1/2">Покрышки</p>
      <p class="w-1/2">
        Schwalbe Rocket Ron EVO / 2.1 127EPI Kevlar Bead Tubeless Easy /
        PaceStar compound
      </p>
    </div>
    <div class="flex justify-between px-4 py-4">
      <p class="w-1/2">Рама</p>
      <p class="w-1/2">
        Scale Carbon / HMX-технология / технология IMP / Коническая рулевая
        труба / BB92 / Технология SDS / Дропауты IDS SL
      </p>
    </div>
    <div class="flex justify-between px-4 py-4 bg-[#F8F8F8]">
      <p class="w-1/2">Подседельный Штырь</p>
      <p class="w-1/2">
        Ritchey WCS 700 Series: Carbon Link FlexLogic / 31.6mm 900 Series:
        Carbon 2B SDS / 34.9mm
      </p>
    </div>
    <div class="flex justify-between px-4 py-4">
      <p class="w-1/2">Седло</p>
      <p class="w-1/2">Ritchey WCS Streem V3 Titanium rails</p>
    </div>
    <div class="flex justify-between px-4 py-4 bg-[#F8F8F8] mb-[50px]">
      <p class="w-1/2">Вилка</p>
      <p class="w-1/2">
        Rock Shox SID RL3 Air / демпфер DNA3 3-режима / 15mm QR axle /
        коническая рулевая труба / Удалённая блокировка, регулировка отскока /
        ход 100mm
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import { useRoute } from "vue-router";

const route = useRoute();
const product = ref(null);
const count = ref(1);

const addToCart = () => {
  count.value++;
};

const removeCart = () => {
  if (count.value > 1) {
    count.value--;
  }
};

onMounted(async () => {
  try {
    const response = await axios.get(
      `https://667d5f3b297972455f64d6c6.mockapi.io/products/products/${route.params.id}`
    );
    product.value = response.data;
  } catch (error) {
    console.error("Error fetching product:", error);
  }
});
</script>

<style scoped></style>
