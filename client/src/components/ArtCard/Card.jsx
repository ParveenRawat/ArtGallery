import React from "react";

function Card({ srcurl, subtitle, title, desc }) {
  return (
    <>
      <div className="relative h-96 items-center justify-center p-2 m-5" >
        <img
          alt="gallery"
          className="absolute inset-0 h-full w-full rounded-2xl object-cover shadow-md shadow-black"
          src={srcurl}
        />
        <div className="inset-0 absolute h-full w-full border-4 border-gray-200 bg-white object-cover px-8 py-10 opacity-0 hover:opacity-80 rounded-2xl">
          <h2 className="title-font mb-1 text-sm font-medium tracking-widest text-indigo-700">
            {subtitle}
          </h2>
          <h1 className="title-font mb-3 text-xl font-bold text-gray-900">
            {title}
          </h1>
          <p className="leading-relaxed">{desc}</p>
        </div>
      </div>
    </>
  );
}

export default Card;
