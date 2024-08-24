import React from "react";

function Card({ srcurl, subtitle, title, desc }) {
  return (
    <>
      <div className="relative m-3 p-10">
        <img
          alt="gallery"
          className="absolute inset-0 h-full w-full object-cover object-center"
          src={srcurl}
        />
        <div className="relative z-10 w-full border-4 border-gray-200 bg-white px-8 py-10 opacity-0 hover:opacity-100">
          <h2 className="title-font mb-1 text-sm font-medium tracking-widest text-indigo-500">
            {subtitle}
          </h2>
          <h1 className="title-font mb-3 text-lg font-medium text-gray-900">
            {title}
          </h1>
          <p className="leading-relaxed">{desc}</p>
        </div>
      </div>
    </>
  );
}

export default Card;
