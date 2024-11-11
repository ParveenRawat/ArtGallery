import React, { useState } from "react";

function Card({ name, quantity }) {
  const removeItem = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="grid grid-flow-col">
        <div></div>
        <div>{name}</div>
        <div className="grid grid-flow-col">
          <button>-</button>
          <span>{quantity}</span>
          <button>+</button>
        </div>
        <button onClick={removeItem}>Remove</button>
      </div>
    </>
  );
}

export default Card;
