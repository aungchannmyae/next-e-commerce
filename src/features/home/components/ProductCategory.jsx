import Container from "@/components/Container";

import ProductCategoryBox from "./ProductCategoryBox";
import { Suspense } from "react";

const ProductCategory = async ({ productLength }) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/categories`);
  const data = await res.json();

  return (
    <Container className={` overflow-visible`}>
      <Suspense>
        <ProductCategoryBox data={data} />
      </Suspense>

      <div>
        <span className=" text-black text-sm inline-flex items-center gap-1">
          Total ({productLength}) Items
        </span>
      </div>
    </Container>
  );
};

export default ProductCategory;
