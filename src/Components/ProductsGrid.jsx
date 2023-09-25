import { Link, useLoaderData } from "react-router-dom"
import { formatPrice } from "../Utils";

const ProductsGrid = () => {
    const {products} = useLoaderData()
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 pt-8">
      {products.map((product) => {
        const { title, image, price } = product.attributes;
        const dollarPrice = formatPrice(price)
        return (
          <Link
            to={`/products/${product.id}`}
            key={product.id}
            className="card w-full shadow-lg hover:shadow-2xl transition duration-300"
          >
            <figure className="px-3 pt-4">
              <img
                src={image}
                alt={title}
                className="h-64 md:h-48 w-full object-cover rounded-b-xl"
              />
            </figure>
            <div className="card-body items-center">
              <h2 className="tracking-wider capitalize card-title">{title}</h2>
              <span className="text-secondary">{dollarPrice}</span>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
export default ProductsGrid