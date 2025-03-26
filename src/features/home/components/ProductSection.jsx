import ProductCard from "./ProductCard";
import Container from "@/components/Container";
import { searchQueryToQueryString } from "@/utils/url";

const ProductSection = async ({ data }) => {
  
  // const isLoading = !res.ok;

  return (
    <>
      <Container>
        <section className=" grid max-md:grid-cols-1 max-lg:grid-cols-2 grid-cols-4 gap-5">
          {data?.map((product) => (
            <div key={product.id} className=" col-span-1">
              <ProductCard product={product} />
            </div>
          ))}
        </section>
      </Container>
    </>
  );
};

export default ProductSection;
