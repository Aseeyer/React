import { useParams } from "react-router-dom";
import { useGetProductByIdQuery } from "../features/products/productApi";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { data, isLoading, isError } = useGetProductByIdQuery(id);

  if (isLoading) return <p>Loading product...</p>;
  if (isError) return <p>Something went wrong.</p>;

  return (
    <div style={{ padding: "20px" }}>
      <img src={data.thumbnail} alt={data.title} width={250} />

      <h2>{data.title}</h2>
      <p>{data.description}</p>
      <h3>${data.price}</h3>

      <button
        onClick={() => dispatch(addToCart(data))}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductDetails;
