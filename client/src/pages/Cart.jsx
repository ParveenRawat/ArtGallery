import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, updateQuantity, clearCart } from "../slices/cartSlice";
import Card from "../components/CartCard/Card";

const Cart = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemove = (title) => {
    dispatch(removeFromCart({ title }));
  };

  const handleQuantityChange = (title, quantity) => {
    dispatch(updateQuantity({ title, quantity }));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
      {cartItems.length > 0 ? (
        <>
          <div className="grid gap-6">
            {cartItems.map((item) => (
              <div key={item.title} className="relative">
                {/* Use Card component for cart items */}
                <Card
                  srcurl={item.srcurl}
                  title={item.title}
                  subtitle={item.subtitle}
                  desc={item.desc}
                />
                <div className="absolute top-0 right-0 p-2">
                  {/* Quantity input */}
                  <input
                    type="number"
                    value={item.quantity}
                    min="1"
                    className="w-16 border rounded px-2 text-center"
                    onChange={(e) =>
                      handleQuantityChange(item.title, Number(e.target.value))
                    }
                  />
                  {/* Remove button */}
                  <button
                    className="ml-2 bg-red-500 text-white px-3 py-1 rounded"
                    onClick={() => handleRemove(item.title)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
          {/* Clear Cart Button */}
          <button
            className="mt-4 bg-gray-800 text-white px-4 py-2 rounded"
            onClick={handleClearCart}
          >
            Clear Cart
          </button>
        </>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default Cart;
