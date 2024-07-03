<template>
  <div class="container md:mt-[102px] max-md:mt-[60px]">
    <div class="flex justify-between md:mb-10 max-md:mb-5 items-center">
      <h4 class="font-bold md:text-[40px] max-md:text-[25px] ">Каталог</h4>
      <div
        class="flex items-center py-[8px] cursor-pointer gap-[10px] hover:gap-4 duration-300 w-[220px] rounded-full border border-primary max-md:hidden"
      >
        <p class="ml-12 font-medium text-primary">Весь каталог</p>
        <p class="text-2xl font-medium mb-1 text-primary">&rarr;</p>
      </div>
    </div>
    <div class="grid md:grid-cols-3 max-md:grid-cols-2 gap-5 max-md:hidden">
      <div
        class="bg-second rounded-[20px] pl-8 pr-2 w-full h-full flex items-center py-4 justify-between"
        v-for="(item, index) in candles"
        :key="index"
      >
        <div class="flex flex-col h-full justify-between">
            <p class="text-primary font-medium text-[20px]">{{ datas[index].title }}</p>
            <p class="text-primary font-medium text-sm group cursor-pointer">{{ datas[index].price }} <span class=" group-hover:ml-2 ml-1 duration-300 font-medium text-xl">&rarr;</span></p>
        </div>
        <img class="w-[55%]" :src="item" alt="" />
      </div>
    </div>
    <div class="grid md:grid-cols-3 max-md:grid-cols-2 gap-5 md:hidden">
      <div
        class="bg-second rounded-[20px] pl-8 pr-2 w-full h-full  items-center py-4 justify-between"
        v-for="(item, index) in candles1"
        :key="index"
      >

            <p class="text-primary font-medium text-[20px] block">{{ datas[index].title }}</p>

        <img class="w-[55%]" :src="item" alt="" />
        <p class="text-primary font-medium text-sm group cursor-pointer">{{ datas[index].price }} <span class="group-hover:ml-2 ml-1 duration-300 font-medium text-xl">&rarr;</span></p>
      </div>
    </div>
    <div
      class=" flex  items-center py-[8px] cursor-pointer gap-[10px] hover:gap-4 duration-300 w-full rounded-full border border-primary justify-center md:hidden max-md:mt-4"
    >
      <p class=" font-medium text-primary">Весь каталог</p>
      <p class="text-2xl font-medium  text-primary">&rarr;</p>
    </div>
  </div>
</template>

<script setup>
const candles = ref([
  "/can1.png",
  "/can2.png",
  "/can3.png",
  "/can4.png",
  "/can5.png",
  "/can6.png",
]);
const candles1 = ref([
  "/can1.png",
  "/can2.png",
]);

const datas = ref([
  {
    title: "Люстры",
    price: "От 540₽",
  },
  {
    title: "Светильники",
    price: "От 540₽",
  },
  {
    title: "Бра",
    price: "От 540₽",
  },
  {
    title: "Торшеры",
    price: "От 540₽",
  },
  {
    title: "Настольные лампы",
    price: "От 540₽",
  },
  {
    title: "Споты",
    price: "От 540₽",
  },
]);
</script>
