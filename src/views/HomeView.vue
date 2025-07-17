<script setup lang="ts">
import CategoryMain from '../components/CategoryMain.vue';
import SliderPromo from '../components/SliderPromo.vue';

</script>

<template>
  <SliderPromo />
  <div class="main-message">
    <h1>Nuestros postres destacadoss</h1>
    <h3>¿Cúal se te antoja hoy?</h3>
  </div>
  <CategoryMain />
</template>

<style scoped>

main{
  min-height: 80vh;
}

  .main-message{
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    width: 100%;
    margin-bottom: 2.5rem;
  }
</style>
