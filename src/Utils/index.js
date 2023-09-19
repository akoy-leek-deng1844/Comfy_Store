import axios from "axios";
const productionUrl = "https://strapi-store-server.onrender.com/api";
export const customUrl = axios.create({
    baseURL: productionUrl
});

export const formatPrice = (price) => {
    const dollars = Intl.NumberFormat('en-US', {
        style: "currency",
        currency: 'USD'
    }).format((price / 100).toFixed(2))
    return dollars
}