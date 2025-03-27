import ProductDetail from "@/features/productDetail/components/ProductDetail";
import { productDetail } from "@/services/product";

const Page = async ({ params }) => {
  const { id } = await params;
  console.log(await params);
  const res = await productDetail(id);

  const data = await res.json();

  return (
    <>
      <ProductDetail product={data} />;
    </>
  );
};

export default Page;
