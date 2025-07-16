<script setup lang="ts">

  import { toRef } from 'vue';
  import { useCart } from '@/composable/useCart';
  import type { CartItem } from '@/interfaces/CartItem';

  interface Props{
    cartItem: CartItem,
  }
  const props = defineProps<Props>();
  const cartItem = toRef(props, "cartItem");
  const cartComponent = useCart();

</script>

<template>
  <div class="card-content">

    <img :src="cartItem.image" class="card-image" alt="Imagen de postre">
    <div class="card-description">
      <div class="card-name">
        {{ cartItem.name }}
      </div>
      <div class="quantity-controls">
        <button @click="cartComponent.updateQuantity(cartItem.id, cartItem.quantity - 1)" :disabled="cartItem.quantity <= 1">-</button>
        <span>{{ cartItem.quantity }}</span>
        <button @click="cartComponent.updateQuantity(cartItem.id, cartItem.quantity + 1)">+</button>
      </div>
    </div>
    <div class="card-cost">

      <div class="price-unit">
        ${{ cartItem.price }}
      </div>
      <div class="price-per-quantity">
        ${{ cartItem.price * cartItem.quantity }}
      </div>

    </div>

  </div>
</template>


<style scoped>

.card-content{
  display: flex;
  flex-direction: row;
  gap: 3em;
  align-items: center;
}

.card-image{
  width: 5em;
  height: 5em;
  border-radius: 1rem;
}

.card-cost{
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1em;
  font-size: 1.1em;
}

.price-unit{
  color: #a3a3a3;
}

.price-per-quantity{
  color: var(--color-black);
  font-weight: 700;
}

</style>
