<script setup lang="ts">
    import Logo from '@/assets/Logo.svg';
    import FacebookIcon from '@/assets/Facebook.svg';
    import InstagramIcon from '@/assets/Instagram.svg';
</script>

<template>
    <footer>
        <div class="logo">
            <Logo class="logo-icon"/>
        </div>
        <div class="social">
            <h2>Redes sociales</h2>
            <div class="social-icons">
              <a href="https://www.facebook.com/share/1FguvuUuqT/?mibextid=wwXlfr"> <FacebookIcon class="social-icon"/> </a>
              <a href="https://www.instagram.com/maiky.cookies"> <InstagramIcon class="social-icon"/> </a>
            </div>
        </div>
        <div class="location">
            <h2>Ubicación</h2>
            <p>Hecho con amor en Santa María Mixtequilla, Oaxaca</p>
        </div>
    </footer>
</template>

<style scoped>
    footer {
        display: grid;
        grid-template-columns: 25% 32% 32%;
        justify-content: center;
        align-items: center;
        text-align: center;
        margin: 0 auto;
        background-color: #3E3781;
        color: #fff;
        padding: 2rem 1rem;
        gap: 1rem;
    }

    .logo{
        display: flex;
        justify-content: center;
        width: 120px;
        height: 100px;
        background-color: #fff;
        border-radius: 100px;
    }
    .logo-icon{
        text-align: center;
        width: 120px;
        height: 100px;
        fill: #5147A6;
    }

    .social, .location{
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
    }

    .social-icons{
        display: flex;
        flex-direction: row;
        justify-content: center;
        gap: 0.1rem;
    }

    .social-icon{
        fill: #fff;
        width: 28px;
        height: 28px;
    }

    .location p{
        font-size: 0.7rem;
    }




        /* Responsive: tablet */
    @media (max-width: 768px) {
        footer {
            grid-template-columns: 1fr;
            text-align: center;
            padding: 2rem 1rem;
        }
        .logo {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 120px;
            margin: 0 auto;
        }
        .social-icons {
            justify-content: center;
            gap: 1rem;
        }
    }

    /* Responsive: móviles más pequeños */
    @media (max-width: 480px) {
    footer {
        flex-direction: column;
        display: flex;
        align-items: center;
        padding: 2rem 1rem;
        gap: 1.5rem;
    }
    .social-icons {
        display: flex;
        gap: 1rem;
    }

    .logo{
        width: 100px;
    }

    .logo-icon{
        width: 100px;
        height: 80px;
    }

    .social-icon {
        width: 28px;
        height: 28px;
    }

    .location p {
        font-size: 0.9rem;
        padding: 0 1rem;
    }
    }
</style>
