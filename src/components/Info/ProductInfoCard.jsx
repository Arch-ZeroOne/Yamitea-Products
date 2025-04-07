import React, { useEffect } from "react";

function ProductInfoCard({ img, name, price, description, rating, stocks }) {
  return (
    <div className="flex justify-around items-center w-[90%] mr-auto ml-auto p-5 mt-8 border border-gray-300 h-120 rounded-lg">
      <img src={img} className="h-80"></img>
      <div className="w-xl  flex flex-col items-center gap-7">
        <h1 className="text-3xl/10 font-bold text-center ">{name}</h1>
        <section className="flex flex-col gap-1">
          <h2 className="font-bold text-lg self-start">Product Description:</h2>
          <p className="text-md/7">{description}</p>
        </section>
        <p className="font-bold text-lg">${price}</p>
        <section className="flex gap-5 items-center font-bold">
          <button className="bg-black text-white w-[180px] p-4 rounded-lg text-md">
            Buy
          </button>
          <button className="border border-gray-400 w-xss p-4 w-[180px] rounded-lg">
            Add to Cart
          </button>
        </section>
      </div>
    </div>
  );
}

export default ProductInfoCard;
