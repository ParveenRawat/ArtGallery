import React from "react";
import { Link } from "react-router-dom";
import { BsChatLeftDotsFill } from "react-icons/bs";
import { PiShareFatFill } from "react-icons/pi";
import Like from "../CardButtons/Like";
function Card({ srcurl, subtitle, title, desc }) {
  return (
    <>
      <div className="relative m-5 h-96 items-center justify-center p-2">
        <img
          alt="gallery"
          className="absolute inset-0 h-full w-full rounded-2xl object-cover shadow-md shadow-black"
          src={srcurl}
        />
        <div className="absolute inset-0 h-full w-full rounded-2xl border-4 border-gray-200 bg-white object-cover px-8 py-10 opacity-0 hover:opacity-80">
          <h2 className="title-font mb-1 text-sm font-medium tracking-widest text-indigo-700">
            {subtitle}
          </h2>
          <h1 className="title-font mb-3 text-xl font-bold text-gray-900">
            {title}
          </h1>
          <p className="leading-relaxed">{desc}</p>
        </div>
        <div className="absolute right-0 top-0 grid grid-rows-3 gap-3 rounded-bl-2xl rounded-tr-2xl bg-black bg-opacity-50 p-2">
          <Like />

          <Link to="/login">
            <BsChatLeftDotsFill color="white" className="size-6" />
          </Link>
          <Link>
            <PiShareFatFill color="white" className="size-6" />
          </Link>
        </div>
      </div>
    </>
  );
}

export default Card;
