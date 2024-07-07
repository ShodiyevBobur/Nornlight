<template>
  <div class="flex justify-end">
    <div></div>
    <div class="w-[68%]">
      <div class="container mx-auto py-8">
    <h1 class="text-3xl font-bold mb-8 text-center">Add New Product</h1>
    <form @submit.prevent="addProduct" class="max-w-md mx-auto bg-white shadow-md rounded-lg p-8">
      <div class="mb-4">
        <label for="title" class="block text-gray-700 font-bold mb-2">Title</label>
        <input type="text" id="title" v-model="title" required class="w-full p-2 border border-gray-300 rounded">
      </div>
      <div class="mb-4">
        <label for="image" class="block text-gray-700 font-bold mb-2">Image URL</label>
        <input type="text" id="image" v-model="image" required class="w-full p-2 border border-gray-300 rounded">
      </div>
      <div class="mb-4">
        <label for="sale" class="block text-gray-700 font-bold mb-2">Sale</label>
        <input type="text" id="sale" v-model="sale" required class="w-full p-2 border border-gray-300 rounded">
      </div>
      <div class="mb-4">
        <label for="price" class="block text-gray-700 font-bold mb-2">Price</label>
        <input type="number" id="price" v-model="price" required class="w-full p-2 border border-gray-300 rounded">
      </div>
      <button type="submit" class="w-full bg-[#454545] text-white p-2 rounded">Add Product</button>
    </form>
  </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';

const title = ref('');
const image = ref('');
const sale = ref('');
const price = ref('');

const addProduct = async () => {
  try {
    const newProduct = {
      title: title.value,
      image: image.value,
      sale: sale.value,
      price: price.value,
    };
    await axios.post('https://667d5f3b297972455f64d6c6.mockapi.io/products/products', newProduct);
    alert('Product added successfully!');
    // Clear the form
    title.value = '';
    image.value = '';
    sale.value = '';
    price.value = '';
  } catch (error) {
    console.error('Error adding product:', error);
    alert('Failed to add product.');
  }
};
definePageMeta({
  layout: "admin",
});
</script>

<style lang="scss" scoped></style>
