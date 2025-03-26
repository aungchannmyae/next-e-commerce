
import ProductDetail from "@/features/productDetail/components/ProductDetail";
import { productDetail } from "@/services/product";

const Page = async ({ params }) => {
  const productId = await params.id;
  const res = await productDetail(productId);
  if (!res.ok) {
    return <div>Failed to load product</div>;
  }

  const data = await res.json();

  return (
    <>

        <ProductDetail product={data} />;

    </>
  );
};

export default Page;
