import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import MenClothingCard from "./MenClothingCard";
function MenClothing() {
  const [products, setProducts] = useState();
  const [menClothing, setMenClothing] = useState();

  useEffect(() => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "https://fakestoreapi.com/products",
      headers: {
        "x-rapidapi-key": "b87e99e919msh6176ee1540351d0p17b2b8jsn6ad19e3992f3",
        "x-rapidapi-host":
          "ai-text-to-image-generator-flux-free-api.p.rapidapi.com",
        "Content-Type": "application/json",
      },
    };
    axios
      .request(config)
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const getMenClothing = (item) => {
    return item.category === "men's clothing";
  };
  const shortenString = (name) => {
    return name.split("").splice(0, 8).join("") + "...";
  };

  useEffect(() => {
    if (products) {
      const getMaleClothing = products.filter(getMenClothing);
      setMenClothing(getMaleClothing);
    }
  }, [products]);

  return (
    <div className="grid grid-cols-1   justify-items-center mt-5 sm:grid-cols-2 md:grid-cols-4   gap-5 ">
      {menClothing &&
        menClothing.map((product) => (
          <MenClothingCard
            title={shortenString(product.title)}
            price={product.price}
            image={product.image}
          />
        ))}
    </div>
  );
}

export default MenClothing;
