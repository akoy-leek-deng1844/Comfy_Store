import Filters from "../Components/Filters";
import ProductsContainer from "../Components/ProductsContainer";
import ProductsPagination from "../Components/ProductsPagination";
import { customUrl } from "../Utils";
const url = "/products"; 

export const loader = async ({ request }) => {
  const params = Object.fromEntries([...new URL(request.url).searchParams.entries()])
  const response = await customUrl(url, {
    params
  });
  const products = response.data.data;
  const meta = response.data.meta;
  return { products, meta, params };
};
const Products = () => {
  return (
    <>
      <Filters />
      <ProductsContainer />
      <ProductsPagination />
    </>
  );
};
export default Products;
