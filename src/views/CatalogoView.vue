<script setup lang="ts">
import { ref } from 'vue';
import { data } from '@/data/products';
import type { Category } from '@/interfaces/Category';
import type { Product } from '@/interfaces/Product';

import CategoryMenuSection from '@/components/CategoryMenuSection.vue';
import CardProduct from '@/components/Card/CardProduct.vue';

const productList = ref<Product []>(
                                        [
                                          {
                                            id: 0,
                                            name: "",
                                            price: 0,
                                            img: "",
                                            description: "",
                                          }
                                        ]
                                      );

const updateProducts = (categoryId: number) => {
    if(categoryId !== -1){
      const category = <Category> data.find(cat => cat.id == categoryId);
      productList.value = category.products;
    }
    else{
      productList.value = getAllProducts();
    }
}

const getAllProducts = () : Product[] => {
  return data.flatMap(category => category.products);
}




</script>

<template>
  <p class="info-tabs">Prueba nuestros distintos tipos de postres 😉</p>

  <CategoryMenuSection :categories="data" @changeCategory="updateProducts"/>

  <div class="product-container">
    <CardProduct v-for="product in productList" :key="product.id" :product="product" />
  </div>


</template>

<style scoped>

.info-tabs{
  display: block;
  margin: 1rem 0 1rem 0;
  text-align: center;
  font-size: 1.5em;
  font-weight: 500;
  color: hsl(298, 84%, 20%);
}

.product-container{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 3em;
  margin-bottom: 5em;
}

</style>
