import type { Product } from '@/interfaces/Product';

export interface Category{
  id: number,
  name: string,
  products: Product[],
  link: string,
  img: string,
  icon: string,
}
