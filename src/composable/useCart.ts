import { ref, computed, watch } from 'vue';
import type { CartItem } from '@/interfaces/CartItem';
import type { Product } from '@/interfaces/Product';

import { useEmail } from '@/composable/useEmail';
const { sendOrderEmail } = useEmail();

import {useToast} from 'vue-toast-notification';
const $toast = useToast();

const CART_KEY = 'cart-maiky';

const loadCart = () : CartItem[] => {
  const saved = localStorage.getItem(CART_KEY);
  return (saved)? JSON.parse(saved) : [];
}

const cart = ref<CartItem[]>(loadCart());

watch(cart, () => { /**Actuaización del cart en tiempo real */
  localStorage.setItem(CART_KEY, JSON.stringify(cart.value));
  console.log('Cart updated:', cart.value);
}, { deep: true, immediate: true });

export function useCart() {


  const order = async (customer_name: string, email: string, phone: string) => {
    const success = await sendOrderEmail({
      customer_name,
      email,
      phone,
      total: total.value,
      items: cart.value.map((item) => ({
        name: item.name,
        quantity: item.quantity,
        price: item.price,
      })),
    });

    console.log("Email que se está enviando:", email);

    if (success) {
      $toast.open({
        message: 'Pedido enviado correctamente. Nos pondremos en contacto contigo pronto.',
        type: 'success',
        duration: 10000,
      });
      clearCart();
    } else {
      $toast.error('Error al enviar el pedido');
    }
  };

  const addItem = (product: Product, quantity: number) => {
    const existing = cart.value.find(p => p.id === product.id);
    if(existing){
      existing.quantity += quantity;
      const instance = $toast.open({
        message: 'Agregaste otro ' + product.name,
        type: 'info',
        duration: 2000,
      });
    }
    else{
      const newProductCart: CartItem = {id: product.id, name: product.name, price: product.price, quantity: 1, image: product.img};
      cart.value.push(newProductCart);

      $toast.clear();
      const instance = $toast.open({
        message: 'Agregaste ' + product.name + ' a tu carrito',
        type: 'info',
        duration: 2000,
      });
    }
  };

  const removeItem = (id: number) => {
    cart.value = cart.value.filter(item => item.id !== id);
  };

  const updateQuantity = (id: number, quantity: number) => {
    const item = cart.value.find(p => p.id === id);
    if(item)
      item.quantity = quantity;
  };

  const clearCart = () => { cart.value = [] };

  const total = computed( () => {
    return cart.value.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  });

  const itemCount = computed( () => {
    return cart.value.reduce((count, item) => count + item.quantity, 0);
  });

  return {
    cart,
    order,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    total,
    itemCount,
  };

}
