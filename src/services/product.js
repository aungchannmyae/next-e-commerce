import { productApi } from "./home";

export const productDetail = (slug) => {
  return fetch(`${productApi}/slug/${slug}`);
};
