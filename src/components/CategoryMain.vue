<script setup lang="ts">
    import CardMain from '@/components/Card/CardMain.vue';
    import { data } from '@/data/products';

</script>

<template>
    <main class="categories">
        <CardMain
            v-for="(category, index) in data"
            :key="index"
            :nombre="category.name"
            :img="category.img"
            :url="category.link"
        >

        </CardMain>
    </main>
</template>

<style scoped>
    .categories{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        gap: 2rem;
        margin-bottom: 5rem;
    }
</style>
