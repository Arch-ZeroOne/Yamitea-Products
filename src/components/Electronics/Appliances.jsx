import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import AppliancesCard from "./AppliancesCard";
import { Link } from "react-router";
import { useSearchHistory } from "../ContextProvider/ContextProvider";
function Appliances() {
  const [appliances, setAppliances] = useState();
  const [products, setProducts] = useState();
  const [copy, setCopy] = useState();
  const { value } = useSearchHistory();

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
  const shortenString = (name) => {
    return name.split("").splice(0, 8).join("") + "...";
  };
  const handleSearch = (item) => {
    return item.title.includes(value);
  };

  useEffect(() => {
    if (products) {
      const filterAppliances = products.filter(getAppliances);
      setAppliances(filterAppliances);
      setCopy(filterAppliances);
    }
  }, [products]);

  useEffect(() => {
    if (value) {
      const filter = products.filter(handleSearch);
      setAppliances(filter);
    } else {
      setAppliances(copy);
    }
  }, [value]);

  return (
    <>
      <div className="grid grid-cols-1   justify-items-center mt-5 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4   gap-5 ">
        {appliances &&
          appliances.map((product) => (
            <Link to={`/product/${product.id}`}>
              <AppliancesCard
                key={product.id}
                title={shortenString(product.title)}
                price={product.price}
                image={product.image}
              />
            </Link>
          ))}
      </div>
    </>
  );
}

export default Appliances;
