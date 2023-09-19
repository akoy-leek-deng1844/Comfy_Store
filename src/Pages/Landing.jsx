import { FeaturedProducts, Hero } from "../Components";
import { customUrl } from "../Utils";
const url = '/products?featured=true'
export const loader = async () => {
  const response = await customUrl(url);
  const products = response.data.data
  return {products}
}
const Landing = () => {
  
  return (
    <>
      <Hero />
      <FeaturedProducts/>
    </>
  )
};
export default Landing;
