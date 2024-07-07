<template>
  <div class="error-page text-center text-white p-6 bg-opacity-75 bg-black rounded-lg shadow-lg">
    <h1 class="text-6xl font-bold mb-4">404</h1>
    <p class="text-xl mb-6">Oops! The page you are looking for does not exist.</p>
    <nuxt-link to="/">
      <button class="px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white font-semibold rounded">
        Go Home
      </button>
    </nuxt-link>
  </div>
</template>

<style scoped>
.error-page {
  max-width: 600px;
  margin: auto;
  margin-top: 13%;
}
</style>
