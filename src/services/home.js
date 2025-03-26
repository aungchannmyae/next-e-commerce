export const categoryApi = `${process.env.NEXT_PUBLIC_API_URL + "/categories"}`;
export const productApi = `${process.env.NEXT_PUBLIC_API_URL + "/products"}`;

export const categoryFetcher = (url) => fetch(url).then((res) => res.json());
export const productFetcher = (url) => fetch(url).then((res) => res.json());