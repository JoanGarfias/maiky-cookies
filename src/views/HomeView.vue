<script setup lang="ts">
import CategoryMain from '../components/CategoryMain.vue';
import SliderPromo from '../components/SliderPromo.vue';

</script>

<template>
  <SliderPromo />
  <main>
    <div class="main-message">
      <h1>Nuestros postres destacadoss</h1>
      <h3>¿Cúal se te antoja hoy?</h3>
    </div>
    <CategoryMain />
  </main>
</template>

<style scoped>
  .main-message{
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    width: 100%;
    margin-bottom: 2.5rem;
  }
</style>
