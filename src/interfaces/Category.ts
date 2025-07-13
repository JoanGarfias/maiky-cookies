import type { Product } from '@/interfaces/Product';

export interface Category{
  id: number,
  name: string,
  products: Product[],
  link: string,
  icon: string,
}
