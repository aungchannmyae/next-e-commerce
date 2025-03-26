import { productApi } from "./home";

export const productDetail = (id) => {
  return fetch(`${productApi}/${id}`);
};
