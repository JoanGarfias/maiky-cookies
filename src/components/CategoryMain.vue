<script setup lang="ts">
    import CardMain from '@/components/CardMain.vue';

    const categories = [
        {
            nombre: "Galletas",
            img: "https://www.gourmet.cl/wp-content/uploads/2018/02/Galletas-2-1-570x458.jpg",
            url: "facebook.com"
        },
        {
            nombre: "Alfajores",
            img: "https://www.gourmet.cl/wp-content/uploads/2018/02/Galletas-2-1-570x458.jpg",
            url: "facebook.com"
        },
        {
            nombre: "Roles",
            img: "https://www.gourmet.cl/wp-content/uploads/2018/02/Galletas-2-1-570x458.jpg",
            url: "facebook.com"
        },
        {
            nombre: "Cookie Cake",
            img: "https://www.gourmet.cl/wp-content/uploads/2018/02/Galletas-2-1-570x458.jpg",
            url: "facebook.com"
        },
    ]

</script>

<template>
    <main>
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

</style>