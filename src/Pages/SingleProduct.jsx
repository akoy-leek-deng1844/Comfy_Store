import { Link, useLoaderData } from 'react-router-dom';
import {customUrl, formatPrice, generateNumber } from '../Utils'; 
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../Features/Cart/cartSlice';
export const loader = async ({ params }) => {
  const response = await customUrl(`/products/${params.id}`);
  return { product: response.data.data };
};
const SingleProduct = () => {
  
  const { product } = useLoaderData();
  const { image, price, title, company, description, colors } = product.attributes;
  const [productColor, setProductColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);
  const dispatch = useDispatch();
  const productValues = {
    cardID: product.id + productColor,
    productID: product.id,
    productColor,
    company,
    title,
    image,
    amount,
    price
  }
  const addToCart = () => {
    dispatch(addItem({product:productValues}))
  }

  const handleAmount = (e) => {
    setAmount(parseInt(e.target.value)); 
  }
  const dollarPrice = formatPrice(price)
  return (
    <section>
      <div className="text-md breadcrumbs">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </div>
      <div className="grid mt-6 lg:grid-cols-2 gap-y-8 lg:gap-x-16">
        <img
          src={image}
          alt={title}
          className="w-96 h-96 object-cover lg:w-full rounded-lg"
        />
        <div>
          <h1 className="capitalize font-bold tracking-wide mb-4 text-3xl">
            {title}
          </h1>
          <h4 className="mb-2 font-bold text-lg">{company}</h4>
          <p className="mb-2 text-primary">{dollarPrice}</p>
          <p className="leading-8 ">{description}</p>
          <div>
            <h2 className="mt-3 tracking-wider font-semibold">Colors</h2>
            <div className="mt-2">
              {colors.map((color) => {
                return (
                  <button
                    key={color}
                    type="button"
                    className={`badge w-6 h-6 mr-4 ${
                      color === productColor && "border-2 border-primary"
                    }`}
                    onClick={() => setProductColor(color)}
                    style={{ backgroundColor: color }}
                  ></button>
                );
              })}
            </div>
          </div>
          <div className="form-control max-w-xs">
            <label htmlFor="amount" className="label">
              <h4 className="capitalize text-medium tracking-wider">amount</h4>
            </label>
            <select
              id="amount"
              className="select select-bordered select-secondary"
              value={amount}
              onChange={handleAmount}
            >
              {generateNumber(20)}
            </select>
          </div>
          {/* {ADD TO CART} */}
          <div className="mt-10 ">
            <button
              className="btn btn-secondary btn-md"
              onClick={addToCart}
              
            >
              Add to bag
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default SingleProduct;
