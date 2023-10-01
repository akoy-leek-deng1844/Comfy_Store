import { useSelector } from "react-redux";
import { CartTotals, CheckoutForm, SectionTitle } from "../Components";
import { redirect } from "react-router-dom";
import { toast } from "react-toastify";

export const loader = (store) => () => {
  const user = store.getState().userState.user;
  if (!user) {
    
    toast.warn('Please login to checkout!')
    return redirect('/login');
  }
  return null;
}
const CheckOut = () => {
  const cartTotal = useSelector((state) => state.cartState.cartTotal);
  if (cartTotal === 0) {
    return <SectionTitle text="Your cart is empty"/>
  }
  return (
    <>
      <SectionTitle text="Proceed to checkout" />
      <div className="grid mt-8 gap-8 md:grid-cols-2">
        <CheckoutForm />
        <CartTotals/>
      </div>
    </>
  );
};
export default CheckOut;
