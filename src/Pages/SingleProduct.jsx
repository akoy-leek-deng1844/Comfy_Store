import { useLoaderData } from 'react-router-dom';
import {customUrl } from '../Utils'; 
export const loader = async ({ params }) => {
  console.log(params);
  const response = await customUrl(`/products/${params.id}`);
  return { product: response.data.data };
};
const SingleProduct = () => {
  const { product } = useLoaderData();
  console.log(product);
  return <div>
    <h1>helloo</h1>
  </div>;
};
export default SingleProduct;
