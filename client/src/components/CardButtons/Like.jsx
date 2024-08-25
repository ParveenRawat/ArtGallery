import React from "react";
import { useState } from "react";
import { AiFillHeart } from "react-icons/ai";

function Like() {
  const [liked, setLiked] = useState(false);
  const handleClick = () => {
    setLiked(!liked);
  };
  return liked ? (
    <AiFillHeart
      color="#ff0000"
      className="size-7 hover:cursor-pointer"
      onClick={handleClick}
    />
  ) : (
    <AiFillHeart
      color="#bcbcbc"
      className="size-7 hover:cursor-pointer"
      onClick={handleClick}
    />
  );
}

export default Like;
