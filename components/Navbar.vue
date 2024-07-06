<template>
  <div class="container md:mt-3">
    <div
      class="flex w-full justify-between mb-2 text-primary font-semibold text-sm"
    >
      <div class="flex gap-7 max-md:hidden">
        <button
          v-for="(item, index) in sections"
          :key="index"
          class="opacity-50"
          @click="ChangePage(index)"
        >
          {{ item }}
        </button>
      </div>
      <div
        class="md:hidden flex w-full items-center absolute z-50 top-0 gap-5 pt-5"
      >
        <button @click="isMediaMenu = !isMediaMenu">
          <svg
            v-if="!isMediaMenu"
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
          <svg
            v-else
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1 1L10 10M19 19L10 10M10 10L1 19L19 1" stroke="black" />
          </svg>
        </button>
        <nuxt-link to="/" class="w-2/5">
          <img src="/MainLogo.svg" class="cursor-pointer" alt="Logo" />
        </nuxt-link>
        <div
          class="flex h-full items-center ml-4"
          v-for="(item, index) in image2"
          :key="index"
        >
          <div class="flex flex-col items-center gap-[6px]">
            <img :src="item" class="cursor-pointer 'w-3/4'" alt="Logos " />
          </div>
        </div>
      </div>
      <div
        v-if="isMediaMenu"
        class="w-screen h-screen fixed top-0 z-30 left-0 bg-primary/50 md:hidden"
      ></div>
      <div class="flex gap-6 max-md:hidden">
        <p class="opacity-100">8 (800) 890-46-56</p>
        <a href="#" class="opacity-50">Заказать звонок</a>
      </div>
    </div>
  </div>
  <div
    v-if="isMediaMenu"
    class="gap-7 absolute z-50 top-14 w-full bg-white md:hidden shadow-md"
  >
    <a
      href="#"
      v-for="(item, index) in sections"
      :key="index"
      class="opacity-50 block my-3 border-b pb-3 text-center"
      @click="ChangePage(index)"
      >{{ item }}</a
    >
    <nuxt-link to="/Catalog">
      <div
        class="flex px-[27px] gap-[9px] cursor-pointer text-center justify-center my-5 items-center rounded-full bg-primary py-[14px] w-[96%] mx-auto"
      >
        <img src="/catalog.svg" alt="category" />
        <p class="text-white font-semibold">Каталог</p>
      </div>
    </nuxt-link>
    <p class="opacity-100 text-center">8 (800) 890-46-56</p>
    <a href="#" class="block opacity-50 text-center w-full my-5"
      >Заказать звонок</a
    >
  </div>
  <div
    class="sticky top-0 left-0 w-full py-3 z-30 shadow"
    :class="isScrolled ? 'backdrop-blur-lg bg-white/30' : 'bg-white'"
  >
    <div class="container">
      <div class="flex w-full items-center justify-between md:gap-4">
        <div class="flex gap-[29px]">
          <nuxt-link to="/">
            <img
              src="/MainLogo.svg"
              class="cursor-pointer max-md:hidden"
              alt="Logo"
            />
          </nuxt-link>
          <nuxt-link to="/Catalog">
            <div
              @click="dropdownClick = !dropdownClick"
              class="flex px-[27px] gap-[9px] cursor-pointer items-center rounded-full bg-primary py-[14px] max-md:hidden"
            >
              <img src="/catalog.svg" alt="category" />
              <p class="text-white font-semibold">Каталог</p>
            </div>
          </nuxt-link>
        </div>
        <div class="relative w-[45%] max-md:w-full max-md:mt-10">
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
          @click="goPage(index)"
        >
          <div class="flex relative flex-col items-center gap-[6px]">
            <span
              :class="index == 1 ? 'hidden' : ''"
              class="absolute -translate-y-1/2 top-0 w-5 h-5 flex justify-center items-center rounded-full right-0 bg-red-500 z-50 text-white text-sm"
              >{{
                index == 0 ? store.likedProducts.length : store.basket.length
              }}</span
            >

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
const image2 = ref(["/like.svg", "/cart.svg"]);
import { usePiniaStore } from "../store";

const store = usePiniaStore();

const isScrolled = ref(false);
const isMediaMenu = ref(false);

const router = useRouter();

const handleScroll = () => {
  isScrolled.value = window.scrollY > 0;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
const ChangePage = (index) => {
  if (index == 0) {
    router.push("/About");
  }
  if (index == 1) {
    router.push("/ShoppingPayment");
  }
  if (index == 2) {
    router.push("/Return");
  }
  if (index == 3) {
    router.push("/Garant");
  }
  if (index == 4) {
    router.push("/Kantakt");
  }
  if (index == 5) {
    router.push("/Blog");
  }
};

const goPage = (index) => {
  if (index == 0) {
    router.push("/Fovorites");
  }
  if (index == 2) {
    router.push("/Basket");
  }
};
</script>
