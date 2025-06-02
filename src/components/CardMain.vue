<script setup lang="ts">

    interface Props {
        nombre: string,
        img: string,
        url: string,
    };
    const category = defineProps<Props>();

    const redirectUrl = (redirectUrl: string) => {
        console.log(redirectUrl);
    }

</script>

<template>
    <div class="card">
        <h3 class="card-name">{{ nombre }}</h3>
        <img :src="category.img" alt="Imagen de categoría" />
        <button type="button" @click="redirectUrl(url)"></button>
    </div>
</template>

<style scoped>

</style>