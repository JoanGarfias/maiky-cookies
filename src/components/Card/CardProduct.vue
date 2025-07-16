<script setup lang="ts">
import { toRef } from 'vue';
import type { Product } from '@/interfaces/Product';
import AddCartSvg from '@/assets/img/addCart.svg';
import { useCart } from '@/composable/useCart';


interface Props {
  product: Product;
}

const props = defineProps<Props>();
const product = toRef(props, 'product');
const cartComponent = useCart();

</script>

<template>
  <div class="product-card">
    <img
      :src="product.img"
      :alt="product.name"
      class="product-image"
    />

    <div class="product-details">
      <h2 class="product-name">{{ product.name }}</h2>
      <p class="product-price">${{ product.price.toFixed(2) }}</p>
      <button class="product-button" title="Agregar al carrito" @click="cartComponent.addItem(product, 1)">
        <AddCartSvg />
      </button>
    </div>
  </div>
</template>

<style scoped>
.product-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  max-width: 16rem;
  background-color: #fff;
  border-radius: 0.75rem;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;
}

.product-card:hover {
  transform: translateY(-5px);
  button{
    background-color: #993d99;
  }
}

.product-image {
  width: 100%;
  height: 12rem;
  object-fit: cover;
}

.product-details {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.product-name {
  font-size: 1.1rem;
  font-weight: bold;
  color: #333;
}

.product-price {
  font-size: 1rem;
  color: #666;
}

.product-button {
  margin-top: 0.5rem;
  background-color: #d677d6; /* amarillo tipo Tailwind 'yellow-400' */
  border: none;
  border-radius: 0.5rem;
  padding: 0.5rem;
  cursor: pointer;
  align-self: flex-end;
  transition: background-color 0.2s ease;
}

.product-button:hover {
  background-color: #220122; /* amarillo más oscuro */
}
</style>
