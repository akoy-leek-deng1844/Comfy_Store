import { redirect, useLoaderData } from "react-router-dom";
import { customUrl } from "../Utils";
import { toast } from "react-toastify";
import OrdersList from "../Components/OrdersList";
import ComplexPagination from "../Components/ComplexPagination";
import { SectionTitle } from "../Components";

export const ordersQuery = (params, user) => {
  return {
    queryKey: [
      "orders",
      user.username,
      params.page ? parseInt(params.page) : 1,
    ],
    queryFn: ()=> customUrl('/orders', {
     params, headers: {
      Authorization: `Bearer ${user.token}`
    }
   })
  };
}
export const loader = (store, queryClient) => async ({request}) => {
  const user = store.getState().userState.user;
  if (!user) {
    return redirect('/login')
  }
  const params = Object.fromEntries([...new URL(request.url).searchParams.entries()]);
 try {
   const response = await queryClient.ensureQueryData(ordersQuery(params, user));
     return { orders: response.data.data, meta: response.data.meta };

 } catch (error) {
   const errorMessage =
     error?.response?.data?.error?.message ||
     "there was an error accessing your orders";
   toast.error(errorMessage)
   if (error?.response?.status === 401 || 403) {
     return redirect('/login')
   }
 }
}
const Orders = () => {
  const { meta } = useLoaderData();
  if (meta.pagination.total === 0) {
    return <SectionTitle text="Please do some shopping first, you have no orders!"/>
  }
  return <>
    <SectionTitle text="Your orders"/>
    <OrdersList />
    <ComplexPagination/>
  </>
};
export default Orders;
