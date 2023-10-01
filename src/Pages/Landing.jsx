import { FeaturedProducts, Hero } from "../Components";
import { customUrl } from "../Utils";
const url = '/products?featured=true'
const LandingQuery = {
  queryKey: ['featuredProducts'],
  queryFn: ()=> customUrl(url)
}
export const loader = (queryClient) => async () => {
  const response = await queryClient.ensureQueryData(LandingQuery);
  const products = response.data.data;
  return { products };
};
const Landing = () => {
  
  return (
    <>
      <Hero />
      <FeaturedProducts/>
    </>
  )
};
export default Landing;
