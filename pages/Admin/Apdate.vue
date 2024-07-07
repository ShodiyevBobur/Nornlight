<template>
  <div class="flex justify-end">
    <div></div>
    <div class="w-[68%]">
      <div class="container mx-auto py-8">
    <h1 class="text-3xl font-bold mb-8 text-center">Update Product</h1>
    <form @submit.prevent="updateProduct" class="max-w-md mx-auto bg-white shadow-md rounded-lg p-8">
      <div class="mb-4">
        <label for="id" class="block text-gray-700 font-bold mb-2">Product ID</label>
        <input type="text" id="id" v-model="id" required class="w-full p-2 border border-gray-300 rounded">
        <button @click="fetchProduct" type="button" class="w-full bg-gray-500 text-white p-2 rounded mt-2">Fetch Product</button>
      </div>
      <div v-if="product">
        <div class="mb-4">
          <label for="title" class="block text-gray-700 font-bold mb-2">Title</label>
          <input type="text" id="title" v-model="product.title" required class="w-full p-2 border border-gray-300 rounded">
        </div>
        <div class="mb-4">
          <label for="image" class="block text-gray-700 font-bold mb-2">Image URL</label>
          <input type="text" id="image" v-model="product.image" required class="w-full p-2 border border-gray-300 rounded">
        </div>
        <div class="mb-4">
          <label for="sale" class="block text-gray-700 font-bold mb-2">Sale</label>
          <input type="text" id="sale" v-model="product.sale" required class="w-full p-2 border border-gray-300 rounded">
        </div>
        <div class="mb-4">
          <label for="price" class="block text-gray-700 font-bold mb-2">Price</label>
          <input type="number" id="price" v-model="product.price" required class="w-full p-2 border border-gray-300 rounded">
        </div>
        <div class="flex space-x-4">
          <button type="submit" class="flex-1 bg-blue-500 text-white p-2 rounded">Update Product</button>
          <button type="button" @click="deleteProduct" class="flex-1 bg-red-500 text-white p-2 rounded">Delete Product</button>
        </div>
      </div>
    </form>
  </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';

const id = ref('');
const product = ref(null);

const fetchProduct = async () => {
  try {
    const response = await axios.get(`https://667d5f3b297972455f64d6c6.mockapi.io/products/products/${id.value}`);
    product.value = response.data;
  } catch (error) {
    console.error('Error fetching product:', error);
    alert('Failed to fetch product. Please check if the product ID is correct.');
  }
};

const updateProduct = async () => {
  try {
    await axios.put(`https://667d5f3b297972455f64d6c6.mockapi.io/products/products/${id.value}`, product.value);
    alert('Product updated successfully!');
  } catch (error) {
    console.error('Error updating product:', error);
    alert('Failed to update product. Please check if the product ID is correct.');
  }
};

const deleteProduct = async () => {
  try {
    await axios.delete(`https://667d5f3b297972455f64d6c6.mockapi.io/products/products/${id.value}`);
    alert('Product deleted successfully!');
    // Clear the form
    id.value = '';
    product.value = null;
  } catch (error) {
    console.error('Error deleting product:', error);
    alert('Failed to delete product. Please check if the product ID is correct.');
  }
};
definePageMeta({
  layout: "admin",
});
</script>

<style lang="scss" scoped></style>
