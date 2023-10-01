import { Form, redirect } from "react-router-dom"
import FormInput from "./FormInput"
import SubmitBtn from "./SubmitBtn"
import { customUrl, formatPrice } from "../Utils";
import { clearItems } from "../Features/Cart/cartSlice";
import { toast } from "react-toastify";
export const action = (store, queryClient) => async ({request}) => {
  const formData = await request.formData();
  const { address, name } = Object.fromEntries(formData);
  const user = store.getState().userState.user;
  const { cartItems, numItemsInCart, orderTotal } = store.getState().cartState;
  const info = {
    address,
    name,
    cartItems,
    numItemsInCart,
    chargeTotal: orderTotal,
    orderTotal: formatPrice(orderTotal),
  };
  try {
     const response = await customUrl.post(
       "/orders",
       { data: info },
       {
         headers: {
           Authorization: `Bearer ${user.token}`,
         },
       }
    );
    queryClient.removeQueries(['orders'])
    store.dispatch(clearItems())
    toast.success('Order successfully placed')
  } catch (error) {
    console.log(error);
    const errorMessage =
      error?.response?.data?.error?.message ||
      "there was an error placing your order";

    toast.error(errorMessage);
    return redirect('/login');
  }
  return redirect('/orders');
}
const CheckoutForm = () => {
  return (
    <Form method="POST" className="flex flex-col gap-y-4">
      <h4 className="font-medium text-xl">Shipping Information</h4>

      <FormInput label="User name" type="text" name="name" />
      <FormInput label="Address" type="text" name="address" />
      <div className="mt-4">
        <SubmitBtn text="place your order" />
      </div>
    </Form>
  );
}
export default CheckoutForm