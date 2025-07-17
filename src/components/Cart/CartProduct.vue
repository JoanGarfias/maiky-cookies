<script setup lang="ts">
  import { toRef } from 'vue';
  import { useCart } from '@/composable/useCart';
  import type { CartItem } from '@/interfaces/CartItem';

  interface Props {
    cartItem: CartItem;
  }

  const props = defineProps<Props>();
  const cartItem = toRef(props, "cartItem");
  const cartComponent = useCart();
</script>

<template>
  <div class="cart-card">
    <img :src="cartItem.image" class="cart-image" alt="Imagen del producto" />

    <div class="cart-details">
      <h3 class="product-name">{{ cartItem.name }}</h3>

      <div class="quantity-controls">
        <button
          @click="cartComponent.updateQuantity(cartItem.id, cartItem.quantity - 1)"
          :disabled="cartItem.quantity <= 1"
          class="quantity-btn"
        >−</button>

        <span class="quantity-number">{{ cartItem.quantity }}</span>

        <button
          @click="cartComponent.updateQuantity(cartItem.id, cartItem.quantity + 1)"
          class="quantity-btn"
        >+</button>
      </div>
    </div>

    <div class="cart-prices">
      <div class="unit-price">${{ cartItem.price }}</div>
      <div class="total-price">${{ (cartItem.price * cartItem.quantity).toFixed(2) }}</div>
    </div>
  </div>
</template>

<style scoped>
.cart-card {
  display: grid;
  grid-template-columns: 5em 1fr auto;
  align-items: center;
  gap: 1.5em;
  padding: 1em 0;
  border-bottom: 1px solid #e5e7eb;
}

.cart-image {
  width: 5em;
  height: 5em;
  object-fit: cover;
  border-radius: 0.75rem;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);
}

.cart-details {
  display: flex;
  flex-direction: column;
  gap: 0.5em;
}

.product-name {
  margin: 0;
  font-size: 1.1em;
  font-weight: 600;
  color: #111827;
}

.quantity-controls {
  display: flex;
  align-items: center;
  gap: 0.5em;
}

.quantity-btn {
  background-color: #f3f4f6;
  border: none;
  padding: 0.4em 0.7em;
  border-radius: 0.5rem;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s;
}

.quantity-btn:hover:enabled {
  background-color: #e5e7eb;
}

.quantity-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.quantity-number {
  font-weight: 500;
  font-size: 1rem;
}

.cart-prices {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  font-size: 0.95rem;
  gap: 0.3em;
}

.unit-price {
  color: #6b7280;
  text-decoration: line-through;
  font-size: 0.9rem;
}

.total-price {
  font-weight: 700;
  color: #111827;
  font-size: 1.1rem;
}
</style>
