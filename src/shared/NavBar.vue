<script setup lang="ts">
    import Logo from '@/assets/Logo.svg';
    import Cart from '@/assets/Cart.svg';
    import Close from '@/assets/Close.svg';
    import Home from '@/assets/Home.svg';
    import Phone from '@/assets/Phone.svg';
    import Cookie from '@/assets/Cookie.svg';
    import Menu from '@/assets/Menu.svg';

    import {onMounted, onUnmounted, ref} from 'vue';

    const menuOpen = ref<boolean>(true);
    const menuRef = ref<HTMLElement | null>(null);
    const screenSize = ref<number>(window.innerWidth);

    const toggleMenu = () => {
        menuOpen.value = !menuOpen.value;
    }

    const clickOutMenu = (event: MouseEvent) => {
        if(menuRef.value && !menuRef.value.contains(event.target as Node)){ //Detecta si se da click sobre otra cosa que no sea un click
            menuOpen.value = false;
        }
    }

    const updateWidth = () => {
        screenSize.value = window.innerWidth;
    }

    const esMobile = () : boolean => screenSize.value <= 768;

    onMounted( () => {
        document.addEventListener('resize', updateWidth);
        if(esMobile())
            document.addEventListener('click', clickOutMenu);
    });

    onUnmounted( () => {
        window.removeEventListener('resize', updateWidth)
        if(esMobile())
            document.removeEventListener('click', clickOutMenu);
    })
</script>

<template>
  <header>
    <nav>
        <button class="hamburger" @click="toggleMenu" ref="menuRef">
            <Menu class="menu-icon" v-show="!menuOpen"></Menu>
            <Close class="menu-icon" :class="{ closeBtn: menuOpen}" v-show="menuOpen"></Close>
        </button>

        <RouterLink to="/">
            <Logo class="logo-icon"/>
        </RouterLink>

        <transition name="slide-fade">
            <ul class="nav-list" v-show="menuOpen">
                <li>
                    <RouterLink to ="/">
                        <Home />
                        <p>Inicio</p>
                    </RouterLink>
                </li>
                <li>
                    <RouterLink to="/catalogo">
                        <Cookie />
                        <p>Catálogo</p>
                    </RouterLink>
                </li>
                <li>
                    <RouterLink to ="/contacto">
                        <Phone />
                        <p>Contacto</p>
                    </RouterLink>
                </li>
            </ul>
        </transition>
        <div class="cart-opcion">
            <Cart class="cart-icon"/>
            <p class="cart-counter">2</p>
        </div>
    </nav>
  </header>
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

header{
  margin: 0;
  padding: 0;
  top: 0;
  background-color: aliceblue;
}

nav{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 90%;
    margin: 0 auto;
    height: 15vh;
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

.nav-list li{
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    transition: transform 0.3s ease;
}

.nav-list li:hover{
    border-radius: 100px;
    background-color: hsla(222, 57%, 58%, 0.3);
    transform: scale(1.1);
  }

.nav-list li svg{
    fill: var(--color-primary);
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

.menu-icon{
    fill: var(--color-primary);
    width: 48px;
    height: 48px;
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
    align-items: center;
}

.closeBtn{
    position: fixed;
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

    .cart-icon:hover{
        cursor: pointer;
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
    .nav-list li:hover{
      background-color: hsla(222, 57%, 58%, 0.3);
    }

}

</style>
