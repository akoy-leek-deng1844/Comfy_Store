import Filters from "../Components/Filters";
import ProductsContainer from "../Components/ProductsContainer";
import ProductsPagination from "../Components/ProductsPagination";
import { customUrl } from "../Utils";

const allProductsQuery = (queryparams) => {
  const { search, category, company, shipping, sort, price, page } = queryparams;
  return {
    queryKey: [
      "allProducts",
      search ?? "",
      category ?? "all",
      shipping ?? false,
      sort ?? "a-z",
      price ?? 100000,
      company ?? "all",
      page ?? 1
    ],
    queryFn: ()=> customUrl(url, {
    params:queryparams
  })
  };
}

const url = "/products"; 

export const loader = (queryClient)=> async ({ request }) => {
  const params = Object.fromEntries([...new URL(request.url).searchParams.entries()])
  const response = await queryClient.ensureQueryData(allProductsQuery(params));
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
