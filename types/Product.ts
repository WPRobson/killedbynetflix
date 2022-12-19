export enum ProductType {
  SERIES = 'series',
  FILM = 'film',
}

export interface Product {
  name: string;
  description: string;
  dateClose: string;
  dateOpen: string;
  link: string;
  seasons: Number;
  type: ProductType;
}

export type ProductWithSlug = Product & { slug: string };
