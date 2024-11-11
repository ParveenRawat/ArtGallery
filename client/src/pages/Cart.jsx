import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "../components/CartCard/Card";

function Cart() {
  const { cartItems } = useSelector((state) => state.cart);

  console.log(cartItems);

  const cartCards = cartItems.map((cartItem) => (
    <Card name={cartItem.name} qty="12" />
  ));

  return (
    <>
      <div>{cartCards}</div>
    </>
  );
}

export default Cart;
