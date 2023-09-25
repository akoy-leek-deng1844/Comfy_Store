import { createSlice } from "@reduxjs/toolkit";
import { json } from "react-router-dom";
import { toast } from "react-toastify";
const defaultState = {
  cartItems: [],
  numItemsInCart: 0,
  cartTotal: 0,
  shipping: 500,
  tax: 0,
  orderTotal: 0,
};
const getCartfromLocalStorage = () => {
    return JSON.parse(localStorage.getItem("cartItems")) || defaultState;  
}
const cartSlice = createSlice({
    name: 'cart',
    initialState: getCartfromLocalStorage(),
    reducers: {
        addItem: (state, action) => {
            const { product } = action.payload;
            const item = state.cartItems.find((item) => item.cardID === product.cardID);
            if (item) {
                item.amount += product.amount;
            } else {
                state.cartItems.push(product)
            }
            state.numItemsInCart += product.amount; 
            state.cartTotal += product.price * product.amount;
            cartSlice.caseReducers.calculateTotals(state);
            toast.success('item added to cart')

        },
        calculateTotals: (state)=> {
            state.tax = 0.1 * state.cartTotal;
            state.orderTotal = state.cartTotal + state.tax + state.shipping;
            localStorage.setItem("cartItems", JSON.stringify(state));
        },
        clearItems: () => {
           localStorage.setItem("cartItems", JSON.stringify(defaultState));
            return defaultState
        },
        removeItem: (state, action) => {
            const { cardID } = action.payload;
            const product = state.cartItems.find((item) => item.cardID === cardID);
            state.cartItems = state.cartItems.filter((item) => item.cardID !== cardID);
            state.numItemsInCart -= product.amount;
            state.cartTotal -= product.price * product.amount;
            cartSlice.caseReducers.calculateTotals(state)
        },
        editItem: (state, action) => {
            const { cardID, amount } = action.payload;
            const item = state.cartItems.find((item) => item.cardID === cardID);
            state.numItemsInCart += amount - item.amount;
            state.cartTotal += item.price * (amount - item.amount);
            item.amount = amount;
            cartSlice.caseReducers.calculateTotals(state);
        }
    }
})
export const { addItem, removeItem, editItem, clearItems } = cartSlice.actions;
export default cartSlice.reducer;