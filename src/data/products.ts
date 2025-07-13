import type { Category } from '@/interfaces/Category';

import Cookie from '@/assets/categories/Cookie.svg?raw';
import Alfajor from '@/assets/categories/alfajor.svg?raw';
import CookieCake from '@/assets/categories/cake.svg?raw';
import RolCanela from '@/assets/categories/rol.svg?raw';

export const data: Category[] = [
  {
    id: 1,
    name: "Galletas",
    link: "/catalogo/galletas",
    icon: Cookie,
    products: [
      { id: 101, name: "Galleta 1", price: 39.0},
      { id: 102, name: "Galleta 2", price: 39.0},
      { id: 103, name: "Galleta 3", price: 44.0},
      { id: 104, name: "Galleta 4", price: 54.0},
      { id: 105, name: "Galleta 5", price: 19.0},
      { id: 106, name: "Galleta 6", price: 39.0},
    ]
  },
  {
    id: 2,
    name: "Alfajores",
    link: "/catalogo/alfajores",
    icon: Alfajor,
    products: [
      { id: 201, name: "Alfajor 1", price: 29.0},
      { id: 202, name: "Alfajor 2", price: 29.0},
      { id: 203, name: "Alfajor 3", price: 29.0},
      { id: 204, name: "Alfajor 4", price: 15.0},
      { id: 205, name: "Alfajor 5", price: 25.0},
    ]
  },
  {
    id: 3,
    name: "Roles",
    link: "/catalogo/roles",
    icon: RolCanela,
    products: [
      { id: 301, name: "Alfajor 1", price: 49.0},
      { id: 302, name: "Alfajor 2", price: 79.0},
      { id: 303, name: "Alfajor 3", price: 39.0},
      { id: 304, name: "Alfajor 4", price: 99.0},
    ]
  },
  {
    id: 4,
    name: "Cookie Cakes",
    link: "/catalogo/cookiecakes",
    icon: CookieCake,
    products: [
      { id: 401, name: "Cookie cake 1", price: 799.0},
      { id: 402, name: "Cookie caKe 2", price: 499.0},
    ]
  },
  {
    id: 5,
    name: "Prueba",
    link: "/catalogo/prueba",
    icon: Cookie,
    products: [
      {id: 999, name: "Chupame el pito", price: 99.9},
    ]
  }
]
