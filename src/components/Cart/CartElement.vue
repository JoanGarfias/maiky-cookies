<script setup lang="ts">
  import { ref } from 'vue';
  import { useCart } from '@/composable/useCart';

  import CartProduct from '@/components/Cart/CartProduct.vue';
  import Cart from '@/assets/Cart.svg';

  const cartComponent = useCart();

  const cartActive = ref<boolean>(false);
  const close = () => {
    cartActive.value = false;
  }

</script>

<template>
  <div class="cart-container" v-click-outside="close">
    <div class="cart-opcion" @click="cartActive = !cartActive">
      <Cart class="cart-icon"/>
      <p class="cart-counter"> {{ (cartComponent.itemCount.value != 0)? cartComponent.itemCount : "" }} </p>
    </div>

    <div class="cart-content" v-show="cartActive">

      <h2 class="cart-title">Tu carrito</h2>
      <div class="cart-products-container" v-if="cartComponent.itemCount.value > 0">

        <div class="cart-products-list">
          <CartProduct v-for="product in cartComponent.cart.value" :key="product.id"
            :cartItem="product"
          />
        </div>

        <div class="cart-products-resumen">
          <p class="cart-length">{{ cartComponent.itemCount }}</p>
          <div class="card-total">{{ cartComponent.total }}</div>
        </div>

        <button type="button" class="buy-order">Ordenar</button>
        <button type="button" class="clean-cart" @click="cartComponent.clearCart()">Eliminar todo</button>
      </div>




      <div class="cart-noproducts" v-else>

        <p>No tienes productos en el carrito.</p>
      </div>

    </div>
  </div>
</template>

<style scoped>

/*Opción de carrito en el menú- */

.cart-opcion{
    display: flex;
    align-items: center;
}

.cart-counter{
    display: absolute;
    user-select: none;
    margin-top: 40px;
    font-size: 20px;
}

.cart-icon{
    align-items: center;
    width: 42px;
    height: 42px;
    fill: var(--color-black);
}

/* Contenedor del carrito */
.cart-container{
  position: relative;
  display: inline-block;
  min-width: 0;
  user-select: none;
}

.cart-content{
  position: absolute;
  top: 100%;
  right: 0;
  padding: 1rem;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  background-color: white;
  width: max-content;
  min-width: 1em;
}


.cart-products-resumen{
  display: flex;
  justify-content: space-between;
  flex-direction: row;
}



@media (max-width: 768px){
  .cart-icon{
    width: 40px;
    height: 40px;
  }

  .cart-icon:hover{
    cursor: pointer;
  }
}
</style>
