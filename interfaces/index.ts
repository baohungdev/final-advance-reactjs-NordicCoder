export type IProduct = {
  promotionPercent?: number;
  id: number;
  name: string;
  sku?: string;
  price: number;
  finalPrice?: number;
  description?: string;
  imgUrl: string;
  imgUrlMob?: string;
  namePath: string;
};

export type IProductDetail = {
  id: number;
  sku: string;
  name: string;
  image: string;
  images: Array<string>;
  price: number;
  finalPrice: number;
  description: string;
  imgUrl: string;
  imgUrlMob: string;
  promotionPercent: number;
};
