<template>
  <div class="container mt-3">
    <div
      class="flex w-full justify-between mb-2 text-primary font-semibold text-sm"
    >
      <div class="flex gap-7 max-md:hidden">
        <a
          href="#"
          v-for="(item, index) in sections"
          :key="index"
          class="opacity-50"
          >{{ item }}</a
        >
      </div>
      <div class="md:hidden flex  w-full items-center gap-5 ">
        <button>
          <svg
            width="30"
            height="16"
            viewBox="0 0 30 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 1L30 1M4.5 8H30M10 15H30"
              stroke="#454545"
              stroke-width="2"
            />
          </svg>
        </button>
        <img src="/MainLogo.svg" class="cursor-pointer w-2/5" alt="Logo" />

        <div
          class="flex h-full items-center ml-4"
          v-for="(item, index) in image2"
          :key="index"
        >
          <div class="flex flex-col items-center gap-[6px]">
            <img
              :src="item"
              class="cursor-pointer 'w-3/4'"
              alt="Logos "
            />
          
          </div>
        </div>

      </div>
      <div class="flex gap-6 max-md:hidden">
        <p class="opacity-100">8 (800) 890-46-56</p>
        <a href="#" class="opacity-50">Заказать звонок</a>
      </div>
    </div>
  </div>
  <div
    class="sticky top-0 left-0 w-full py-3 z-40 shadow"
    :class="isScrolled ? 'backdrop-blur-lg bg-white/30' : 'bg-white'"
  >
    <div class="container">
      <div class="flex w-full items-center justify-between   md:gap-4">
        <div class="flex gap-[29px]">
          <img src="/MainLogo.svg" class="cursor-pointer max-md:hidden" alt="Logo" />
          <div
            @click="dropdownClick = !dropdownClick"
            class="flex px-[27px] gap-[9px] cursor-pointer items-center rounded-full bg-primary py-[14px] max-md:hidden"
          >
            <img src="/catalog.svg" alt="category" />
            <p class="text-white font-semibold">Каталог</p>
          </div>
        </div>
        <div class="relative w-[45%] max-md:w-full">
          <input
            class="font-semibold outline-none pl-[27px] pr-12 h-full py-[14px] placeholder:text-primary border border-primary rounded-full w-full"
            type="text"
            placeholder="Поиск по товарам"
          />
          <img
            class="absolute top-1/2 -translate-y-1/2 right-0 -translate-x-3/4 z-10"
            src="/search.svg"
            alt="search"
          />
        </div>
        <div
          class="flex h-full items-center max-md:hidden"
          v-for="(item, index) in image"
          :key="index"
        >
          <div class="flex flex-col items-center gap-[6px]">
            <img
              :src="item"
              class="cursor-pointer"
              :class="index + 1 != image.length ? 'w-1/3' : 'w-1/2'"
              alt="Logos "
            />
            <p class="text-[12px] font-semibold text-primary">
              {{ bottomSections[index] }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const dropdownClick = ref(false);

const sections = ref([
  "О компании",
  "Доставка и оплата",
  "Возврат",
  "Гарантии",
  "Контакты",
  "Блог",
]);

const bottomSections = ref(["Избранное", "Сравнение", "Корзина"]);
const image = ref(["/like.svg", "/compare.svg", "/cart.svg"]);
const image2 = ref(["/like.svg",  "/cart.svg"]);

const isScrolled = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 0;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
