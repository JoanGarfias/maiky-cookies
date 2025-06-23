<script setup lang="ts">
    import CardMain from '@/components/CardMain.vue';

    const categories = [
        {
            nombre: "Galletas",
            img: "https://www.gourmet.cl/wp-content/uploads/2018/02/Galletas-2-1-570x458.jpg",
            url: "/catalogo/galletas"
        },
        {
            nombre: "Alfajores",
            img: "https://www.gourmet.cl/wp-content/uploads/2018/02/Galletas-2-1-570x458.jpg",
            url: "/catalogo/alfajores"
        },
        {
            nombre: "Roles",
            img: "https://www.gourmet.cl/wp-content/uploads/2018/02/Galletas-2-1-570x458.jpg",
            url: "/catalogo/roles"
        },
        {
            nombre: "Cookie Cake",
            img: "https://www.gourmet.cl/wp-content/uploads/2018/02/Galletas-2-1-570x458.jpg",
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