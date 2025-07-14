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
import Pastel from '@/assets/products/pastel.jpeg';

export const data: Category[] = [
  {
    id: 1,
    name: "Galletas",
    link: "/catalogo/galletas",
    icon: Cookie,
    img: GalletasImg,
    products: [
      { id: 101, name: "Galleta 1", price: 39.0, img: GalletaRedvelvet},
      { id: 102, name: "Galleta 2", price: 39.0, img: GalletaRedvelvet},
      { id: 103, name: "Galleta 3", price: 44.0, img: GalletaRedvelvet},
      { id: 104, name: "Galleta 4", price: 54.0, img: GalletaRedvelvet},
      { id: 105, name: "Galleta 5", price: 19.0, img: GalletaRedvelvet},
      { id: 106, name: "Galleta 6", price: 39.0, img: GalletaRedvelvet},
    ]
  },
  {
    id: 2,
    name: "Alfajores",
    link: "/catalogo/alfajores",
    icon: Alfajor,
    img: AlfajoresImg,
    products: [
      { id: 201, name: "Alfajor 1", price: 29.0, img: AlfajorDulceLeche},
      { id: 202, name: "Alfajor 2", price: 29.0, img: AlfajorDulceLeche},
      { id: 203, name: "Alfajor 3", price: 29.0, img: AlfajorDulceLeche},
      { id: 204, name: "Alfajor 4", price: 15.0, img: AlfajorDulceLeche},
      { id: 205, name: "Alfajor 5", price: 25.0, img: AlfajorDulceLeche},
    ]
  },
  {
    id: 3,
    name: "Roles",
    link: "/catalogo/roles",
    icon: RolCanela,
    img: RolesImg,
    products: [
      { id: 301, name: "Alfajor 1", price: 49.0, img: RolDeCanela},
      { id: 302, name: "Alfajor 2", price: 79.0, img: RolDeCanela},
      { id: 303, name: "Alfajor 3", price: 39.0, img: RolDeCanela},
      { id: 304, name: "Alfajor 4", price: 99.0, img: RolDeCanela},
    ]
  },
  {
    id: 4,
    name: "Cookie Cakes",
    link: "/catalogo/cookiecakes",
    icon: CookieCake,
    img: CookieCakeImg,
    products: [
      { id: 401, name: "Cookie cake 1", price: 799.0, img: CookieCakeRedvelvet},
      { id: 402, name: "Cookie caKe 2", price: 499.0, img: CookieCakeRedvelvet},
    ]
  },
  {
    id: 5,
    name: "Prueba",
    link: "/catalogo/prueba",
    icon: Cookie,
    img: "data:image/jpeg;base64,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",
    products: [
      {id: 999, name: "Chupame el pito", price: 99.9, img: Pastel},
    ]
  }
]
