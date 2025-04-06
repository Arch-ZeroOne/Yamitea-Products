import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import AppliancesCard from "./AppliancesCard";
import Navbar from "../Navbar";

function Appliances() {
  const [appliances, setAppliances] = useState();
  const [products, setProducts] = useState();

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

  const getAppliances = (item) => {
    return item.category.includes("electronics");
  };

  useEffect(() => {
    if (products) {
      const filterAppliances = products.filter(getAppliances);
      setAppliances(filterAppliances);
    }
  }, [products]);
  const shortenString = (name) => {
    return name.split("").splice(0, 8).join("") + "...";
  };

  return (
    <>
      <Navbar />
      <div className="grid grid-cols-1   justify-items-center mt-5 sm:grid-cols-2 md:grid-cols-3   gap-5 ">
        {appliances &&
          appliances.map((product) => (
            <AppliancesCard
              title={shortenString(product.title)}
              price={product.price}
              image={product.image}
            />
          ))}
      </div>
    </>
  );
}

export default Appliances;
