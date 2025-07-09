<script setup lang="ts">
  import FacebookIcon from '@/assets/Facebook.svg';
  import InstagramIcon from '@/assets/Instagram.svg';
</script>

<template>
  <div class="about">
    <div class="info">
        <h1>Sobre nosotros</h1>
        <p class="promo">Maiky Cookies es un negocio local de postres artesanales nacido en Santa María Mixtequilla, Hacemos los mejores postres con mucho amor</p>
      </div>
      <div class="media">
        <h1>Conecta con nosotros</h1>
        <p>Estamos para atenderte</p>
        <div class="social">
          <a href="https://www.facebook.com/share/1FguvuUuqT/?mibextid=wwXlfr"> <FacebookIcon /> </a>
          <a href="https://www.instagram.com/maiky.cookies"> <InstagramIcon /> </a>
        </div>
      </div>
  </div>
</template>

<style>
  .about{
    min-height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .info, .media{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .info{
    margin-top: 2rem;
    margin-bottom: 2rem;
  }

  .info h1, .media h1{
    color: #1e194d;
  }

  .promo{
    width: 70%;
    text-align: center;
  }

  .media{
    margin-bottom: 5rem;
  }

</style>
