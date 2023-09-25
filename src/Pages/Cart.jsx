import { useSelector } from "react-redux";
import { CartItemsList, CartTotals, SectionTitle } from "../Components";
import { Link } from "react-router-dom";

const Cart = () => {
  const { user } = useSelector((state)=>state.userState)
  const numItemsInCart = useSelector((state) => state.cartState.numItemsInCart);
 
  if (numItemsInCart === 0) {
    return <SectionTitle text="Your cart is empty"/>
  }
  return (
    <>
      <SectionTitle text="Your shopping cart" />
      <div className="grid gap-8 lg:grid-cols-12 mt-8">
        <div className="lg:col-span-8">
          <CartItemsList />
        </div>
        <div className="lg:col-span-4 pl-8">
          <CartTotals />
          {user ? (
            <Link to="./checkout" className="btn btn-primary btn-block mt-8">
              Proceed to checkout
            </Link>
          ) : (
            <Link to="./checkout" className="btn btn-primary btn-block mt-8">
              Please login
            </Link>
          )}
        </div>
      </div>
    </>
  );
};
export default Cart;
