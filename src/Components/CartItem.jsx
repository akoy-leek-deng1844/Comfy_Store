import { useDispatch } from "react-redux";
import { formatPrice, generateNumber } from "../Utils";
import { editItem, removeItem } from "../Features/Cart/CartSlice";

const CardItem = ({cardItem}) => {
  const {cardID, image, price, title, company, productColor, amount } = cardItem;
  const dispatch = useDispatch();
  const handleRemoveItem = () => {
    dispatch(removeItem({cardID}))
  }
  const handleEditItem = (e) => {
    dispatch(editItem({cardID, amount:parseInt(e.target.value)}))
  }
  return (
    <article className="mb-12 flex  gap-y-4 sm:flex-row flex-wrap  border-b border-base-300 pb-6 last:border-b-0 items-center">
      <img
        className="h-64 w-full sm:h-36 sm:w-36 rounded-lg object-cover"
        src={image}
        alt={title}
      />
      <div className="flex justify-between w-full sm:w-auto items-center sm:gap-x-10 md:gap-x-12">
        <div className="sm:ml-16 sm:w-46">
          {/* TITLE */}
          <h3 className="capitalize font-medium">{title}</h3>
          {/* COMPANY */}
          <h4 className="capitalize text-sm text-neutral-content mt-2 ">
            {company}
          </h4>
          {/* COLOR */}
          <p className="mt-4 flex gap-x-2 items-center">
            <span>Color:</span>{" "}
            <span
              className="badge badge-sm"
              style={{ backgroundColor: productColor }}
            ></span>
          </p>
        </div>
        {/* AMOUNT */}
        <div className="px-3">
          <div className="form-control sm:ml-12 max-w-xs items-center mx-auto">
            <label htmlFor="amount" className="label p-0">
              <span className="label-text">Amount</span>
            </label>
            <select
              name="amount"
              id="amount"
              className="mt-2 select select-bordered select-xs"
              value={amount}
              onChange={handleEditItem}
            >
              {generateNumber(amount + 10)}
            </select>

            <button className="link link-primary link-hover text-sm mt-2" onClick={handleRemoveItem}>
              remove
            </button>
          </div>
        </div>
        <p className="font-medium mb-12 lg:ml-13 xl:ml-16">
          {formatPrice(price)}
        </p>
      </div>
    </article>
  );
}
export default CardItem