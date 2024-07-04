<template>
  <div>
    <div class="p-[27px] pt-[11px] w-full h-full flex gap-4 flex-col">
      <div class="relative">
        <nuxt-link :to="'/detail/' + props.data?.id">
          <img :src="props.data.image" alt="Product Image" />
        </nuxt-link>
        <img
          class="z-10 absolute top-0 right-0 translate-y-1/2 cursor-pointer"
          @click="toggleLike(props.data.id)"
          :src="like ? '/like2.svg' : '/like.svg'"
          alt="Like Button"
        />
      </div>
      <div class="flex flex-col justify-between h-full gap-6 w-full">
        <p class="text-primary font-medium line-clamp-2 leading-[22px] text-xl">
          {{ props.data.title }}
        </p>
        <div class="div">
          <p class="font-bold text-[#9F9F9F] line-through text-[12px]">
            {{ props.data.sale }}₽
          </p>
          <div class="flex w-full justify-between">
            <p class="text-primary mt-[6px] font-bold text-xl">
              {{ props.data.price }}₽
            </p>
            <img
              @click="toggleShopped(props.data.id)"
              class="py-2 p-5 cursor-pointer rounded-full md:w-[30%] max-md:w-[50%]"
              :src="shop ? '/cart3.svg' : '/cart2.svg'"
              :class="
                props.data.shopped
                  ? 'bg-white border border-primary'
                  : 'bg-primary'
              "
              alt="Cart Button"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { usePiniaStore } from "../store";

const store = usePiniaStore();

const like = computed(() => {
  const index = store.likedProducts.findIndex((p) => p.id == props.data.id);
  return index != -1;
});
const shop = computed(() => {
  const index = store.basket.findIndex((p) => p.id == props.data.id);
  return index != -1;
});

const toggleLike = (id) => {
    store.addProductToLiked(props.data)
}
const toggleShopped = (id) => {
    store.addToBasket(props.data)
}

const props = defineProps({
  data: Object,
});
</script>

<style lang="scss" scoped></style>
