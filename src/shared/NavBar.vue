<script setup lang="ts">
    import Logo from '@/assets/Logo.svg';
    import Cart from '@/assets/Cart.svg';
    import {ref} from 'vue';

    const menuOpen = ref<boolean>(true);

    const toggleMenu = () => {
        menuOpen.value = !menuOpen.value;
    }
</script>

<template>
    <nav>
        <button class="hamburger" @click="toggleMenu">☰</button>
        <Logo class="logo-icon"/>
        <transition name="slide-fade">
            <ul class="nav-list" v-show="menuOpen">
                <li><a>Inicio</a></li>
                <li><a>Catálogo</a></li>
                <li><a>Contacto</a></li>
            </ul>
        </transition>
        <div class="cart-opcion">
            <Cart class="cart-icon"/>
            <p class="cart-counter">2</p>
        </div>
    </nav>
</template>


<style scoped>

*{
    margin: 0;
    top: 0;
    left: 0;
}

:root{
    --color-black: #191717;
}

nav{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 80%;
    margin: 0 auto;
    margin-bottom: 20px;
}

ul{
    list-style: none;
}

ul a{
    color: var(--color-black);
}

ul a:hover{
    cursor: pointer;
}

.nav-list{
    display: flex;
    flex-direction: row;
    justify-content: center;
    font-size: 18px;
    gap: 60px;
}

.cart-opcion{
    display: flex;
    align-items: center;
}

.cart-counter{
    display: absolute;
    margin-top: 40px;
    font-size: 20px;
}

.logo-icon{
    fill: var(--color-primary);
    width: 108px;
    height: 108px;
}

.cart-icon{
    align-items: center;
    width: 48px;
    height: 48px;
    fill: var(--color-black);
}

.hamburger{
    all: unset;
    cursor: pointer;
    font-size: 34px;
    display: none;
}

@media (max-width: 768px){

    nav{
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        padding: 1rem;
        margin: 0;
    }

    .hamburger{
        display: block;
        z-index: 1000;
    }

    .logo-icon{
        position: absolute;
        width: 128px;
        height: 128px;
        left: 50%;
        transform: translateX(-50%);
        padding: 0 10px;
    }

    .nav-list{
        display: flex;
        flex-direction: column;
        position: fixed;
        top: 0;
        left: 0;
        width: 60%;
        height: 100vh;

        margin: 0;
        padding: 2rem;

        justify-content: center;
        background-color: aliceblue;
        z-index: 999;
        
    }

    .cart-icon{
        width: 40px;
        height: 40px;
    }


    .slide-fade-enter-active,
    .slide-fade-leave-active {
        transition: all 0.4s ease;
        overflow: hidden;
    }
    .slide-fade-enter-from,
    .slide-fade-leave-to {
        opacity: 0;
        transform: translateX(-10px);
    }
    .slide-fade-enter-to,
    .slide-fade-leave-from {
        opacity: 1;
        transform: translateX(0);
    }
}

</style>