import React from "react";

function Card({ srcurl, subtitle, title, desc }) {
  return (
    <>
      <div className="relative m-5 h-96 p-2">
        <img
          alt="gallery"
          className="absolute h-full w-full object-cover object-center"
          src={srcurl}
        />
        <div className="absolute h-full w-full border-4 border-gray-200 bg-white px-8 py-10 opacity-0 hover:opacity-80">
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
