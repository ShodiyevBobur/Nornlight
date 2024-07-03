<template>
  <div class="w-full flex justify-center max-md:container ">
    <div class="bg-second md:rounded-[50px] md:mt-8 md:w-[1714px] w-full max-md:rounded-[30px]">
      <div class="container">
        <swiper
          spaceBetween="30"
          :centeredSlides="true"
          :pagination="true"
          :loop="true"
          :autoplay="{
            delay: 2500,
            disableOnInteraction: false,
          }"
          :modules="modules"
          class="mySwiper"
        >
          
          <swiper-slide v-for="(item, index) in 8" :key="index">
            <div class="flex max-md:flex-col-reverse md:gap-[199px] md:mb-[47px] max-md:items-center max-md:gap-3 ">
              <h1 class="md:text-5xl md:mt-[52px] font-bold md:leading-[75px] text-[25px] max-md:px-8  max-md:mb-10">
                Скидка 15% на все подвесные светильники
                <span 
                  class="bg-primary inline-block rounded-full text-white md:px-[27px]"
                  >до 5 февраля</span
                >
              </h1>
              <img src="/header.png" class="w-1/3 max-md:w-[50%] md:mr-[66px]" alt="Candle" />
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css/navigation";
import "swiper/css"; // Import Swiper styles
import "swiper/css/pagination"; // Import Swiper pagination styles
import { Autoplay, Pagination, Navigation } from "swiper/modules"; // Import Swiper pagination module

const modules = [Autoplay, Pagination, Navigation];
</script>
<style scoped>

/* Swiper styles */
.swiper {

  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: grab;
}
.swiper:active {
  cursor: grabbing;
}

/* Swiper slide styles */
.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
}
.swiper-pagination {
  position: absolute;
  right: 20px; /* Adjust as needed */
  bottom: 20px; /* Adjust as needed */
}

</style>
