<template>
  <div>
    <adminNavbar></adminNavbar>
    <slot></slot>
  </div>
</template>

<script setup>
import adminNavbar from "~/components/AdminComponents/adminNavbar.vue";
</script>

<style lang="scss" scoped></style>
