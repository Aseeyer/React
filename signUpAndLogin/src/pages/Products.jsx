import { useGetProductsQuery } from "../features/products/productApi";
import { Link } from "react-router-dom";

const Products = () => {
  const { data, isLoading, error } = useGetProductsQuery();

  if (isLoading) return <p>Loading products...</p>;
  if (error) return <p>Something went wrong</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>Products</h2>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "20px" }}>
        {data.products.map((product) => (
          <Link key={product.id} to={`/product/${product.id}`}>
            <div style={{ border: "1px solid #ddd", padding: "10px" }}>
              <img src={product.thumbnail} width="100%" />
              <h4>{product.title}</h4>
              <p>${product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Products;
