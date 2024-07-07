<template>
  <div class="container">
    <h1 class="text-5xl mt-11">Корзина</h1>
    <div class="mt-6 flex justify-between bg-[#F2F2F2] py-6 px-4">
      <p>Фото</p>
      <p>Товары</p>
      <p>Описание</p>
      <p>Артикул</p>
      <p>Количество</p>
    </div>
    <div
      v-for="(item, index) in store.basket"
      :key="index"
      class="pt-2 bg-[#F2F2F2] px-3"
    >
      <div class="py-2 bg-[#F2F2F2] border-t flex justify-between gap-4">
        <img :src="item.image" alt="" class="w-[10%]" />
        <div>
          <p>{{ item.title }}</p>
          <h2 class="font-bold">{{ item.price * item.quantity }} $</h2>
        </div>
        <p>
          Светильник RADUGA COMBO XS Промышленное освещение; 50Вт; 230В; S4; XS;
        </p>
        <p>RAD-COMBO-50/XXX/230/XXX/XXX/S4/XS</p>
        <div>
          <div class="flex bg-[#E5E5E5] rounded gap-2 mt-6">
            <button @click="removeCart(item)" class="px-2 py-1">-</button>
            <p class="px-2 py-1">{{ item.quantity }}</p>
            <button @click="addToCart(item)" class="px-2 py-1">+</button>
            <div>
              <button @click="DeleteBasket(index)">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.1667 8.16675C21.8572 8.16675 21.5605 8.28966 21.3417 8.50846C21.1229 8.72725 21 9.024 21 9.33341V22.3896C20.9665 22.9795 20.7013 23.5324 20.2621 23.9277C19.8229 24.323 19.2452 24.5287 18.655 24.5001H9.345C8.75478 24.5287 8.17715 24.323 7.73792 23.9277C7.2987 23.5324 7.03347 22.9795 7 22.3896V9.33341C7 9.024 6.87708 8.72725 6.65829 8.50846C6.4395 8.28966 6.14275 8.16675 5.83333 8.16675C5.52391 8.16675 5.22717 8.28966 5.00838 8.50846C4.78958 8.72725 4.66667 9.024 4.66667 9.33341V22.3896C4.69997 23.5985 5.21101 24.745 6.08788 25.5779C6.96474 26.4108 8.13595 26.8623 9.345 26.8334H18.655C19.864 26.8623 21.0353 26.4108 21.9121 25.5779C22.789 24.745 23.3 23.5985 23.3333 22.3896V9.33341C23.3333 9.024 23.2104 8.72725 22.9916 8.50846C22.7728 8.28966 22.4761 8.16675 22.1667 8.16675ZM23.3333 4.66675H18.6667V2.33341C18.6667 2.024 18.5437 1.72725 18.325 1.50846C18.1062 1.28966 17.8094 1.16675 17.5 1.16675H10.5C10.1906 1.16675 9.89383 1.28966 9.67504 1.50846C9.45625 1.72725 9.33333 2.024 9.33333 2.33341V4.66675H4.66667C4.35725 4.66675 4.0605 4.78966 3.84171 5.00846C3.62292 5.22725 3.5 5.524 3.5 5.83341C3.5 6.14283 3.62292 6.43958 3.84171 6.65837C4.0605 6.87716 4.35725 7.00008 4.66667 7.00008H23.3333C23.6428 7.00008 23.9395 6.87716 24.1583 6.65837C24.3771 6.43958 24.5 6.14283 24.5 5.83341C24.5 5.524 24.3771 5.22725 24.1583 5.00846C23.9395 4.78966 23.6428 4.66675 23.3333 4.66675ZM11.6667 4.66675V3.50008H16.3333V4.66675H11.6667Z"
                    fill="#454545"
                  />
                  <path
                    d="M12.8333 19.8333V11.6667C12.8333 11.3572 12.7104 11.0605 12.4916 10.8417C12.2728 10.6229 11.9761 10.5 11.6667 10.5C11.3572 10.5 11.0605 10.6229 10.8417 10.8417C10.6229 11.0605 10.5 11.3572 10.5 11.6667V19.8333C10.5 20.1428 10.6229 20.4395 10.8417 20.6583C11.0605 20.8771 11.3572 21 11.6667 21C11.9761 21 12.2728 20.8771 12.4916 20.6583C12.7104 20.4395 12.8333 20.1428 12.8333 19.8333ZM17.5 19.8333V11.6667C17.5 11.3572 17.3771 11.0605 17.1583 10.8417C16.9395 10.6229 16.6428 10.5 16.3333 10.5C16.0239 10.5 15.7272 10.6229 15.5084 10.8417C15.2896 11.0605 15.1667 11.3572 15.1667 11.6667V19.8333C15.1667 20.1428 15.2896 20.4395 15.5084 20.6583C15.7272 20.8771 16.0239 21 16.3333 21C16.6428 21 16.9395 20.8771 17.1583 20.6583C17.3771 20.4395 17.5 20.1428 17.5 19.8333Z"
                    fill="#454545"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="mt-10 lg:mt-10 bg-[#F2F2F2] py-7 px-5 lg:pb-24 lg:pt-16 lg:pr-12 lg:pl-6 rounded-2xl"
    >
      <h2 class="text-gray-700 text-3xl lg:text-[32px] font-bold mb-4 lg:mb-2">
        Оформление
      </h2>
      <div class="flex flex-col lg:flex-row lg:space-x-4 mb-4">
        <input
          type="text"
          v-model="order.fio"
          placeholder="ФИО"
          class="flex-1 p-2 border rounded mb-2 lg:mb-0"
          required
        />
        <input
          v-model="order.phone"
          type="text"
          placeholder="телефон"
          class="flex-1 p-2 border rounded mb-2 lg:mb-0"
          required
        />
        <input
          v-model="order.email"
          type="text"
          placeholder="Электронная почта"
          class="flex-1 p-2 border rounded mb-2 lg:mb-0"
          required
        />
      </div>
      <hr class="mb-4 lg:mb-6" />
      <h2 class="text-gray-700 text-3xl lg:text-[32px] font-bold mb-4 mt-12">
        Доставка
      </h2>
      <div class="w-full lg:w-[calc(65%-24px)]">
        <input
          v-model="order.address"
          type="text"
          placeholder="Адрес доставки"
          class="w-full p-2 border rounded mb-4 lg:mb-5"
          required
        />
        <textarea
          v-model="order.comment"
          placeholder="Комментарий"
          class="w-full p-4 border rounded-[15px] resize-none h-40"
          required
        ></textarea>
      </div>
    </div>

    <div
      class="bg-[#F2F2F2] lg:mt-10 mt-10 lg:py-16 px-5 lg:px-8 py-5 rounded-2xl lg:rounded-2xl mb-[50px]"
    >
      <h2 class="text-[#454545] text-3xl lg:text-4xl font-bold mb-4 lg:mb-2">
        Оплата
      </h2>
      <div class="flex max-md:flex-col lg:gap-10 pt-8 lg:pt-12 pb-12 lg:pb-20">
        <span
          class="text-[#454545] text-2xl py-3 lg:py-0 lg:text-xl font-semibold mb-2 lg:mb-0"
        >
          Товары..........................{{ totalPrice }} $
        </span>
        <span class="text-[#454545] text-2xl lg:text-2xl font-semibold">
          Доставка...........................{{ deliveryCost }} $
        </span>
      </div>
      <h2
        class="pb-6 lg:pb-8 text-[#454545] text-2xl lg:text-3xl font-bold mb-4 lg:mb-2"
      >
        {{ total }} $
      </h2>
      <div class="flex max-md:flex-col items-center gap-8">
        <button
          class="py-4 lg:py-5 px-[170px] lg:px-[138px] bg-gray-700 rounded-full text-white"
          @click="AddZakas"
        >
          Купить
        </button>
        <label class="flex items-center mb-4 lg:mb-0 lg:mr-4">
          <input class="mr-2" type="radio" />
          <span class="text-[#454545] text-lg font-semibold">
            Я согласен на обработку моих персональных данных
          </span>
        </label>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { usePiniaStore } from "../store";

const store = usePiniaStore();

const order = ref({
  fio: "",
  phone: "",
  email: "",
  address: "",
  comment: "",
  basket: [],
});

// console.log(typeof order.value.basket);
// console.log(store.orders);
const AddZakas = () => {
    order.value.basket = [];
  order.value.basket.push(store.basket)
  store.addOrders(order.value);
};

const removeCart = (item) => {
  if (item.quantity > 1) {
    item.quantity--;
  }
};

const addToCart = (item) => {
  item.quantity++;
};

const DeleteBasket = (index) => {
  store.removeToBasket(index);
};

const totalPrice = computed(() => {
  return store.basket.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
});

const deliveryCost = computed(() => {
  return (totalPrice.value * 0.15).toFixed(2);
});

const total = computed(() => {
  return (Number(totalPrice.value) + Number(deliveryCost.value)).toFixed(2);
});
</script>

<style scoped>
input,
textarea {
  outline: none;
}
</style>
