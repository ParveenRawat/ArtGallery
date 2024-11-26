import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../slices/cartSlice";

function Card({ srcurl, title, subtitle, desc }) {

    const dispatch = useDispatch()

    const handleAddToCart = () => {
        dispatch(addToCart({ title, subtitle, desc, srcurl }));
    };

    return (
        <div className="relative m-5 h-96 items-center justify-center p-2">
            <img
                alt="gallery"
                className="absolute inset-0 h-full w-full rounded-2xl object-cover shadow-md shadow-black"
                src={srcurl}
            />
            <div className="absolute inset-0 h-full w-full rounded-2xl border-4 border-gray-200 bg-white px-8 py-10 opacity-0 hover:opacity-80">
                <h2 className="text-sm font-medium tracking-widest text-indigo-700 mb-1">
                    {subtitle}
                </h2>
                <h1 className="text-xl font-bold text-gray-900 mb-3">{title}</h1>
                <p className="leading-relaxed">{desc}</p>
                <button
                    className="mt-2 bg-blue-500 text-white px-3 py-1 rounded"
                    onClick={handleAddToCart}
                >
                    Add to Cart
                </button>
            </div>
        </div>
    );
}

export default Card;
