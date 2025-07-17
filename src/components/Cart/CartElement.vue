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
          <p class="cart-length">{{ cartComponent.itemCount }} productos</p>
          <div class="card-total">${{ cartComponent.total }} a pagar</div>
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
.cart-opcion {
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;
}

.cart-counter {
  position: absolute;
  top: -0.2em;
  right: -0.2em;
  background-color: crimson;
  color: white;
  font-size: 0.75rem;
  padding: 0.25em 0.5em;
  border-radius: 999px;
  font-weight: bold;
  user-select: none;
}

.cart-icon {
  width: 2.5rem;
  height: 2.5rem;
  fill: var(--color-black);
}

.cart-container {
  position: relative;
  display: inline-block;
}

.cart-content {
  position: absolute;
  top: 110%;
  right: 0;
  width: 360px;
  background-color: white;
  border: 1px solid #e0e0e0;
  border-radius: 1rem;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.cart-title {
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.cart-products-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-height: 300px;
  overflow-y: auto;
}

.cart-products-resumen {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 0;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  font-size: 1rem;
  font-weight: 600;
  color: #333;
}

.cart-length {
  font-size: 0.95rem;
  color: #666;
}

.card-total {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--color-primary, #4CAF50);
}


.buy-order,
.clean-cart {
  width: 100%;
  padding: 0.75rem 1rem;
  border: none;
  border-radius: 0.75rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;
}

.buy-order {
  background-color: #00DC82;
  color: white;
  margin-bottom: 0.5rem;
}

.buy-order:hover {
  background-color: #43a047;
}

.clean-cart {
  background-color: #F25757;
  color: white;
}

.clean-cart:hover {
  background-color: #c62828;
}

.cart-noproducts {
  text-align: center;
  font-size: 0.95rem;
  color: #555;
}

@media (max-width: 768px) {
  .cart-content {
    width: 50vw;
    right: 0;
  }

  .cart-icon {
    width: 2.3rem;
    height: 2.3rem;
  }
}

</style>
