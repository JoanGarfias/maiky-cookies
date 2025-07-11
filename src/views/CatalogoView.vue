<script setup lang="ts">
  import Cookie from '@/assets/categories/Cookie.svg';
  import Alfajor from '@/assets/categories/alfajor.svg';
  import CookieCake from '@/assets/categories/cake.svg';
  import RolCanela from '@/assets/categories/rol.svg';

  //import { products } from '@/data/products';

</script>

<template>
    <p class="info-tabs">Prueba nuestros distintos tipos de postres 😉</p>
    <div class="tabs">
      <div class="category">
        <RouterLink to="/catalogo/galletas" class="category-link">
          <Cookie />
          <p>Galletas</p>
        </RouterLink>
      </div>

      <div class="category">
        <RouterLink to="/catalogo/alfajores" class="category-link">
          <Alfajor />
          <p>Alfajores</p>
        </RouterLink>
      </div>

      <div class="category active">
        <RouterLink to="/catalogo/roles" class="category-link">
          <RolCanela />
          <p>Roles</p>
        </RouterLink>
      </div>

      <div class="category">
        <RouterLink to="/catalogo/cookiecakes" class="category-link">
          <CookieCake />
          <p>Cookie Cake's</p>
        </RouterLink>
      </div>

    </div>
</template>

<style scoped>

.info-tabs{
  display: block;
  margin: 1rem 0 1rem 0;
  text-align: center;
}

.tabs{
  display: flex;
  flex-direction: row;
  justify-content: center;
  box-shadow: 0 1px rgba(0,0,0,0.6);
  margin-bottom: 2rem;
  gap: 1rem;
}

.category{
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 120px;
  height: 70px;
  border-radius: 10px;
}

.category svg{
  fill: #000;
  transition: background 0.3s ease,
              transfor4m 0.5s ease;
}

.category:hover{
  background: #e2e2e2;
  transform: scale(1.1);
}

.category.active{
  background: #CFBEF9;
  p{
    color: #1C1C1C;
  }
  svg{
    fill: #fff;
  }
}

.category a:active{
  color: #4f034c;
}


</style>
