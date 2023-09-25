import { useSelector } from "react-redux"
import CardItem from "./CartItem";

const CartItemsList = () => {
    const cartItems = useSelector((state) => state.cartState.cartItems);

  return (
      <div>
          {cartItems.map((item) => {
              return <CardItem key={item.cardID} cardItem={item} />
          })}
    </div>
  )
}
export default CartItemsList