<script setup lang="ts">
  interface Props {
    nombre: string,
    img: string,
    url: string,
  };
  const category = defineProps<Props>();

</script>

<template>
    <div class="card">
        <img :src="category.img" alt="Imagen de categoría" />
        <div class="card-options">
          <h3 class="card-name">{{ nombre }}</h3>
          <RouterLink :to="category.url" title="Ver catálogo">
            <svg xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 -960 960 960" width="28px" fill="#e3e3e3"><path d="m298-262-56-56 121-122H80v-80h283L242-642l56-56 218 218-218 218Zm222-18v-80h360v80H520Zm0-320v-80h360v80H520Zm120 160v-80h240v80H640Z"/></svg>
          </RouterLink>
        </div>
    </div>
</template>

<style scoped>
    .card{
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      background-color: white;
      border: 1px solid #ffffff;
      box-shadow: 0 2px 8px rgba(37, 36, 36, 0.2);
      border-radius: 20px;
      transition: transform 0.5s ease;
      max-height: 20em;
    }

    .card h3{
      font-family: "Inter", sans-serif;
      font-weight: 500;
      text-align: center;
    }

    .card img{
        display: flex;
        justify-content: center;
        margin: 0 auto;
        min-width: 210px;
        min-height: 210px;
        max-width: 210px;
        max-height: 210px;
        border-radius: 20px 20px 0px 0px;
    }

    .card:hover{
        margin-bottom: 0.5rem;
        transform: scale(1.1);
    }

    .card-options{
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      border-radius: 12px;
      transition: bow-shadow 0.2s ease;
      padding: 10px;

      align-items: center;
    }

    .card-options:hover{
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
    }

    .card-options a{
      color: #3D4A87;
    }
    .card-options svg{
      fill: #3D4A87;
    }
</style>
