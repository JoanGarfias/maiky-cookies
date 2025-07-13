<script setup lang="ts">
import { data } from '@/data/products';
import CategoryMenuSection from '@/components/CategoryMenuSection.vue';

</script>

<template>
    <p class="info-tabs">Prueba nuestros distintos tipos de postres 😉</p>

    <CategoryMenuSection :categories="data" />
</template>

<style scoped>

.info-tabs{
  display: block;
  margin: 1rem 0 1rem 0;
  text-align: center;
}

</style>
