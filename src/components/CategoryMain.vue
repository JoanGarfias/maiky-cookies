<script setup lang="ts">
    import CardMain from '@/components/CardMain.vue';
    import GalletasImg from '@/assets/img/galletas.jpeg';
    import AlfajoresImg from '@/assets/img/alfajores.jpeg';
    import RolesImg from '@/assets/img/roles.jpeg';
    import CookieCakeImg from '@/assets/img/cookiecake.jpeg';

    const categories = [
        {
            nombre: "Galletas",
            img: GalletasImg,
            url: "/catalogo/galletas"
        },
        {
            nombre: "Alfajores",
            img: AlfajoresImg,
            url: "/catalogo/alfajores"
        },
        {
            nombre: "Roles",
            img: RolesImg,
            url: "/catalogo/roles"
        },
        {
            nombre: "Cookie Cake",
            img: CookieCakeImg,
            url: "/catalogo/cookiecake"
        },
    ]

</script>

<template>
    <main class="categories">
        <CardMain
            v-for="(category, index) in categories"
            :key="index"
            :nombre="category.nombre"
            :img="category.img"
            :url="category.url"
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
