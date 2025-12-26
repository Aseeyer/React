import { useGetProductsQuery } from "../features/products/productApi";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import { Link } from "react-router-dom";

const Home = () => {
  const { data, isLoading } = useGetProductsQuery();
  const dispatch = useDispatch();

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 p-6">
      {data.products.map(product => (
        <div key={product.id} className="border p-4 rounded">
          <Link to={`/product/${product.id}`}>
            <img src={product.thumbnail} className="h-40 mx-auto" />
            <h3 className="font-bold mt-2">{product.title}</h3>
          </Link>

          <p>${product.price}</p>

          <button
            onClick={() => dispatch(addToCart(product))}
            className="bg-black text-white px-4 py-2 mt-2"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Home;
