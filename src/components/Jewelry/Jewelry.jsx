import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import JewelryCard from "./JewelryCard";
import Navbar from "../Navbar";

function Jewelry() {
  const [products, setProducts] = useState();
  const [jewelry, setJewelry] = useState();

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
        console.log(error);
      });
  }, []);

  const filterJewelry = (item) => {
    return item.category.includes("jewelery");
  };
  const shortenString = (name) => {
    return name.split("").splice(0, 8).join("") + "...";
  };

  useEffect(() => {
    if (products) {
      const getJewelry = products.filter(filterJewelry);
      setJewelry(getJewelry);
    }
  }, [products]);
  return (
    <>
      <Navbar />
      <div className="grid grid-cols-1   justify-items-center mt-5 sm:grid-cols-3 gap-5 ">
        {jewelry &&
          jewelry.map((product) => (
            <JewelryCard
              title={shortenString(product.title)}
              price={product.price}
              image={product.image}
            />
          ))}
      </div>
    </>
  );
}

export default Jewelry;
