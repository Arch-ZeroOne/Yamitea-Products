import React, { useEffect } from "react";

function ProductInfoCard({ img, name, price, description, rating, stocks }) {
  return (
    <div className="flex justify-around  mb-10 mr-auto ml-auto  mt-8 border border-gray-300  rounded-xl p-7 max-sm:flex-col sm:flex-col w-full md:flex-row md:w-200 h-100 sm:h-200 sm:items-center  ">
      <img src={img} className="h-50 max-sm:40 md:h-90 mt-20 self-center"></img>
      <div className="w-md  flex flex-col items-center gap-7 mt-10 lg:text-xl">
        <h1 className="text-lg font-bold text-center md:text-xl sm:max-sm:text-sm">
          {name}
        </h1>
        <section className="flex flex-col gap-1 max-sm:text-center ">
          <h2 className="text-md font-bold">Product Description:</h2>
          <p className="text-sm w-100 md:text-md">{description}</p>
        </section>
        <section className="flex gap-8 sm:max-sm:flex-col">
          <p className="font-medium text-lg">Available: {stocks}</p>

          <p className="font-medium text-lg ">${price}</p>
        </section>
        <section className="flex gap-5 items-center font-bold max-sm:flex-col">
          <button className="bg-black text-white w-[180px] p-4 rounded-lg text-md l">
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
