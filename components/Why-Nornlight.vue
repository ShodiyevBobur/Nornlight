<template>
  <div class="container md:mt-[102px] max-md:mt-[60px]">
    <div class="flex justify-between md:mb-10 max-md:mb-5 items-center">
      <h4 class="font-bold md:text-[40px] max-md:text-[25px]">Почему NORNLIGHT?</h4>
      <div
        class="flex items-center py-[8px] cursor-pointer gap-[10px] hover:gap-4 duration-300 w-[220px] rounded-full border border-primary max-md:hidden"
      >
        <p class="ml-12 font-medium text-primary">О компании</p>
        <p class="text-2xl font-medium mb-1 text-primary">&rarr;</p>
      </div>
    </div>
    <div class="grid md:grid-cols-4 max-md:grid-cols-2 gap-5">
      <div
        class="md:p-10 max-md:p-5 md:pb-[47px] w-full h-full border border-[#D9D9D9] flex md:gap-[79px] max-md:gap-7 flex-col-reverse justify-end"
        v-for="(item, index) in candles"
        :key="index"
      >
        <div class="flex flex-col w-full items-center ">
          <p class="text-primary font-medium text-lg">
            {{ datas[index].title }}
          </p>
          <p class="text-primary md:mt-5 max-md:mt-2 font-medium text-sm group cursor-pointer">
            {{ datas[index].price }}
          </p>
        </div>
        <img class="w-1/3" :src="item" alt="" />
      </div>
    </div>
    <div
        class="flex items-center py-[8px] cursor-pointer gap-[10px] hover:gap-4 duration-300 w-full mt-6 justify-center rounded-full border border-primary md:hidden"
      >
        <p class="ml-12 font-medium text-primary">О компании</p>
        <p class="text-2xl font-medium mb-1 text-primary">&rarr;</p>
      </div>
  </div>
</template>

<script setup>
const candles = ref(["/nor1.png", "/nor1.png", "/nor1.png", "/nor1.png"]);

const datas = ref([
  {
    title: "Только проверенные бренды",
    price: "Бренды, проверенные временем и качеством",
  },
  {
    title: "Самые низкие цены",
    price: "Ниже не будет нигде",
  },
  {
    title: "Быстрая доствка",
    price: "Доставляем по всей РФ за 1-10 дней",
  },
  {
    title: "Большой ассортимент",
    price: "Более 1000 товаров",
  },
]);
</script>
