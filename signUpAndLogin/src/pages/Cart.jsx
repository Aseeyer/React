import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, increaseQty, decreaseQty } from "../features/cart/cartSlice";

const Cart = () => {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  if (cartItems.length === 0) {
    return <h2>Your cart is empty</h2>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>

      {cartItems.map(item => (
        <div
          key={item.id}
          className="flex items-center gap-4 border-b py-4"
        >
          <img src={item.thumbnail} className="w-20 h-20 object-cover" />

          <div className="flex-1">
            <h3 className="font-semibold">{item.title}</h3>
            <p>${item.price}</p>

            <div className="flex gap-2 mt-2">
              <button
                onClick={() => dispatch(decreaseQty(item.id))}
                className="px-2 border"
              >−</button>

              <span>{item.quantity}</span>

              <button
                onClick={() => dispatch(increaseQty(item.id))}
                className="px-2 border"
              >+</button>
            </div>
          </div>

          <button
            onClick={() => dispatch(removeFromCart(item.id))}
            className="text-red-500"
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
