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
        <h3 class="card-name">{{ nombre }}</h3>
        <img :src="category.img" alt="Imagen de categoría" />
        <button type="button"><RouterLink :to="category.url">Ver más</RouterLink></button>
    </div>
</template>

<style scoped>
    .card{
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }

    .card h3{
        text-align: center;
    }

    .card img{
        display: flex;
        justify-content: center;
        margin: 0 auto;
        max-width: 280px;
        max-height: 250px;
        border-radius: 20px;
        transition: transform 0.5s ease;
    }

    .card img:hover{
        margin-bottom: 0.5rem;
        transform: scale(1.1);
    }

    .card button{
        all: unset;
        display: flex;
        justify-content: center;
        text-align: center;
        width: 50%;
        margin: 0 auto;
        border: 1px solid #3D4A87;
        border-radius: 4px;
        color: #3D4A87;
        cursor: pointer;
    }

    .card button a{
        color: #3D4A87;
    }
</style>