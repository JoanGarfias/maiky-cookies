// src/composables/useEmail.ts
import emailjs from '@emailjs/browser';

const SERVICE_ID = 'service_tuwnhkj';
const TEMPLATE_ID = 'template_fakhmce';
const PUBLIC_KEY = '1YTN2MXE09xnkQ55c';

interface Item {
  name: string;
  quantity: number;
  price: number;
}

interface EmailData {
  customer_name: string;
  email: string;
  phone: string;
  total: number;
  quantity?: number;
  items: Item[];
}

export function useEmail() {
  const sendOrderEmail = async (data: EmailData) => {
    // EmailJS no soporta objetos complejos, conviértelo a string si es necesario
    const formattedItems = data.items
      .map((item) => `${item.quantity}x ${item.name} - $${item.price}`)
      .join('\n');

    const templateParams = {
      customer_name: data.customer_name,
      email: data.email,
      phone: data.phone,
      total: data.total,
      quantity: data.quantity,
      items: formattedItems,
    };

    try {
      const result = await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
      console.log('Correo enviado:', result.text);
      return true;
    } catch (error) {
      console.error('Error al enviar correo:', error);
      return false;
    }
  };

  return { sendOrderEmail };
}
