import React from "react";

function Card({ name, qty }) {
  return (
    <>
      <div>
        <div>cartCard</div>
        <div></div>
        <div>{name}</div>
        <div>{qty}</div>
        <button>Delete</button>
      </div>
    </>
  );
}

export default Card;
