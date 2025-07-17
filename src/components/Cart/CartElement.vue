<script setup lang="ts">
  import { ref } from 'vue';
  import { useCart } from '@/composable/useCart';

  import CartProduct from '@/components/Cart/CartProduct.vue';
  import Cart from '@/assets/Cart.svg';

  const cartComponent = useCart();

  const cartActive = ref<boolean>(false);
  const showOrderForm = ref(false);
  const customerName = ref("");
  const customerEmail = ref("");
  const customerPhone = ref("");
  const formError = ref("");
  const isSending = ref(false);

  const close = () => {
    cartActive.value = false;
    showOrderForm.value = false;
    formError.value = "";
  };

  const openOrderForm = () => {
    showOrderForm.value = true;
    formError.value = "";
  };

  const submitOrder = async () => {
    if (!customerName.value || !customerEmail.value || !customerPhone.value) {
      formError.value = "Por favor, completa todos los campos.";
      return;
    }
    // Validación básica de email
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(customerEmail.value)) {
      formError.value = "Correo electrónico inválido.";
      return;
    }
    // Validación de teléfono: solo números y 10 dígitos
    if (!/^\d{10}$/.test(customerPhone.value)) {
      formError.value = "El teléfono debe tener exactamente 10 dígitos numéricos.";
      return;
    }
    isSending.value = true;
    await cartComponent.order(customerName.value, customerEmail.value, customerPhone.value);
    showOrderForm.value = false;
    customerName.value = "";
    customerEmail.value = "";
    customerPhone.value = "";
    isSending.value = false;
  };

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

        <button type="button" class="buy-order" @click="openOrderForm">Ordenar</button>
        <button type="button" class="clean-cart" @click="cartComponent.clearCart()">Eliminar todo</button>

        <!-- Modal/Formulario para datos del cliente -->
        <div v-if="showOrderForm" class="order-modal">
          <div class="order-modal-content">
            <h3>Datos para tu pedido</h3>
            <form @submit.prevent="submitOrder">
              <div class="form-group">
                <label for="customerName">Nombre</label>
                <div class="input-icon-group">
                  <!-- Icono usuario -->
                  <svg class="input-icon" viewBox="0 0 24 24" fill="none" width="20" height="20"><circle cx="12" cy="8" r="4" stroke="#888" stroke-width="2"/><path d="M4 20c0-4 4-6 8-6s8 2 8 6" stroke="#888" stroke-width="2"/></svg>
                  <input id="customerName" v-model="customerName" type="text" required :disabled="isSending" />
                </div>
              </div>
              <div class="form-group">
                <label for="customerEmail">Correo electrónico</label>
                <div class="input-icon-group">
                  <!-- Icono email -->
                  <svg class="input-icon" viewBox="0 0 24 24" fill="none" width="20" height="20"><rect x="3" y="5" width="18" height="14" rx="2" stroke="#888" stroke-width="2"/><path d="M3 7l9 6 9-6" stroke="#888" stroke-width="2"/></svg>
                  <input id="customerEmail" v-model="customerEmail" type="email" required :disabled="isSending" />
                </div>
              </div>
              <div class="form-group">
                <label for="customerPhone">Teléfono</label>
                <div class="input-icon-group">
                  <!-- Icono teléfono -->
                  <svg class="input-icon" viewBox="0 0 24 24" fill="none" width="20" height="20"><path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21 11.36 11.36 0 003.54.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 5a1 1 0 011-1h3.5a1 1 0 011 1 11.36 11.36 0 00.57 3.54 1 1 0 01-.21 1.11l-2.2 2.2z" stroke="#888" stroke-width="2"/></svg>
                  <input id="customerPhone" v-model="customerPhone" type="text" required :disabled="isSending" maxlength="10" />
                </div>
              </div>
              <div v-if="formError" class="form-error">{{ formError }}</div>
              <div class="form-actions">
                <button type="submit" class="buy-order" :disabled="isSending">
                  <span v-if="isSending" class="spinner"></span>
                  {{ isSending ? 'Enviando...' : 'Enviar pedido' }}
                </button>
                <button type="button" class="clean-cart" @click="showOrderForm = false" :disabled="isSending">Cancelar</button>
              </div>
            </form>
          </div>
        </div>
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

.order-modal {
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0,0,0,0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
}
.order-modal-content {
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  min-width: 320px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.15);
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}
.form-group label {
  font-weight: 500;
}
.form-group input {
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 0.5rem;
  font-size: 1rem;
}
.form-error {
  color: #c62828;
  font-size: 0.95rem;
  margin-bottom: 0.5rem;
}
.form-actions {
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
  margin-top: 1.5rem;
}
.form-actions button {
  flex: 1 1 0;
  min-width: 0;
  height: 2.8em;
}
/* Ordenar los botones: Cancelar a la izquierda, Enviar a la derecha */
.form-actions .clean-cart {
  order: 1;
}
.form-actions .buy-order {
  order: 2;
}

.spinner {
  display: inline-block;
  width: 1em;
  height: 1em;
  border: 2.5px solid #00DC82;
  border-top: 2.5px solid #e0e0e0;
  border-radius: 50%;
  animation: spin 0.7s linear infinite;
  margin-right: 0.5em;
  vertical-align: middle;
}
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* Asegura que los botones del modal tengan el mismo tamaño y no width: 100% */
.order-modal .form-actions button {
  width: auto !important;
  flex: 1 1 0;
  min-width: 0;
}

.input-icon-group {
  display: flex;
  align-items: center;
  background: #fafafa;
  border: 1px solid #ddd;
  border-radius: 0.5rem;
  padding: 0.2em 0.7em 0.2em 0.3em;
  gap: 0.5em;
}
.input-icon {
  flex-shrink: 0;
  color: #888;
}
.input-icon-group input {
  border: none;
  background: transparent;
  outline: none;
  font-size: 1rem;
  flex: 1 1 0;
  padding: 0.5em 0;
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
