import { ref, computed, watch } from 'vue';
import type { CartItem } from '@/interfaces/CartItem';
import type { Product } from '@/interfaces/Product';

const CART_KEY = 'cart-maiky';

const loadCart = () : CartItem[] => {
  const saved = localStorage.getItem(CART_KEY);
  return (saved)? JSON.parse(saved) : [];
}

const cart = ref<CartItem[]>(loadCart());

watch(cart, () => { /**Actuaización del cart en tiempo real */
  localStorage.setItem(CART_KEY, JSON.stringify(cart.value));
});

export function useCart() {

  const addItem = (product: Product, quantity: number) => {
    const existing = cart.value.find(p => p.id === product.id);
    if(existing){
      existing.quantity += quantity;
    }
    else{
      const newProductCart: CartItem = {id: product.id, name: product.name, price: product.price, quantity: 1, image: product.img};
      cart.value.push(newProductCart);
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
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    total,
    itemCount,
  };

}
