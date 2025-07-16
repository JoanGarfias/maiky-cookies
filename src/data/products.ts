import type { Category } from '@/interfaces/Category';

import Cookie from '@/assets/categories/Cookie.svg?raw';
import Alfajor from '@/assets/categories/alfajor.svg?raw';
import CookieCake from '@/assets/categories/cake.svg?raw';
import RolCanela from '@/assets/categories/rol.svg?raw';

import GalletasImg from '@/assets/img/galletas.jpeg';
import AlfajoresImg from '@/assets/img/alfajores.jpeg';
import RolesImg from '@/assets/img/roles.jpeg';
import CookieCakeImg from '@/assets/img/cookiecake.jpeg';


import GalletaRedvelvet from '@/assets/products/galleta_red_velvet.jpeg';
import AlfajorDulceLeche from '@/assets/products/alfajor_leche.jpeg';
import RolDeCanela from '@/assets/products/rol_canela.jpeg';
import CookieCakeRedvelvet from '@/assets/products/cookie_cake_redvelvet.jpeg';

export const data: Category[] = [
  {
    id: 1,
    name: "Galletas",
    link: "/catalogo/galletas",
    icon: Cookie,
    img: GalletasImg,
    products: [
      { id: 101, name: "Galleta 1", price: 39.0, img: GalletaRedvelvet, description: "Galleta suave de red velvet con chispas de chocolate blanco." },
      { id: 102, name: "Galleta 2", price: 39.0, img: GalletaRedvelvet, description: "Galleta clásica con sabor intenso a cacao y textura crujiente." },
      { id: 103, name: "Galleta 3", price: 44.0, img: GalletaRedvelvet, description: "Galleta rellena de crema dulce, perfecta para acompañar un café." },
      { id: 104, name: "Galleta 4", price: 54.0, img: GalletaRedvelvet, description: "Galleta gourmet con trozos de nuez y chocolate oscuro." },
      { id: 105, name: "Galleta 5", price: 19.0, img: GalletaRedvelvet, description: "Mini galleta de mantequilla con un toque de vainilla." },
      { id: 106, name: "Galleta 6", price: 39.0, img: GalletaRedvelvet, description: "Galleta de avena y canela, dulce y saludable." },
    ]
  },
  {
    id: 2,
    name: "Alfajores",
    link: "/catalogo/alfajores",
    icon: Alfajor,
    img: AlfajoresImg,
    products: [
      { id: 201, name: "Alfajor 1", price: 29.0, img: AlfajorDulceLeche, description: "Alfajor de maicena relleno de dulce de leche y cubierto con coco." },
      { id: 202, name: "Alfajor 2", price: 29.0, img: AlfajorDulceLeche, description: "Alfajor clásico bañado en chocolate semiamargo." },
      { id: 203, name: "Alfajor 3", price: 29.0, img: AlfajorDulceLeche, description: "Doble capa de alfajor relleno de crema de avellanas." },
      { id: 204, name: "Alfajor 4", price: 15.0, img: AlfajorDulceLeche, description: "Mini alfajor dulce, ideal como snack o postre ligero." },
      { id: 205, name: "Alfajor 5", price: 25.0, img: AlfajorDulceLeche, description: "Alfajor suave con cobertura de azúcar glas." },
    ]
  },
  {
    id: 3,
    name: "Roles",
    link: "/catalogo/roles",
    icon: RolCanela,
    img: RolesImg,
    products: [
      { id: 301, name: "Rol de Canela 1", price: 49.0, img: RolDeCanela, description: "Rol esponjoso con relleno de canela y glaseado de vainilla." },
      { id: 302, name: "Rol de Canela 2", price: 79.0, img: RolDeCanela, description: "Rol extra grande con nuez caramelizada." },
      { id: 303, name: "Rol de Canela 3", price: 39.0, img: RolDeCanela, description: "Rol tradicional con cobertura cremosa." },
      { id: 304, name: "Rol de Canela 4", price: 99.0, img: RolDeCanela, description: "Rol relleno de manzana y canela, ideal para los amantes del strudel." },
    ]
  },
  {
    id: 4,
    name: "Cookie Cakes",
    link: "/catalogo/cookiecakes",
    icon: CookieCake,
    img: CookieCakeImg,
    products: [
      { id: 401, name: "Cookie Cake 1", price: 799.0, img: CookieCakeRedvelvet, description: "Pastel tipo cookie de red velvet con relleno cremoso de vainilla." },
      { id: 402, name: "Cookie Cake 2", price: 499.0, img: CookieCakeRedvelvet, description: "Cookie cake personalizada para celebrar ocasiones especiales." },
    ]
  },
];
