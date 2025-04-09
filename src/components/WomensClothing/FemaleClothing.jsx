import React from "react";
import axios from "axios";
import FemaleClothingCard from "./FemaleClothingCard";
import { useState, useEffect } from "react";
import { Link } from "react-router";
import { useSearchHistory } from "../ContextProvider/ContextProvider";

function FemaleClothing() {
  const [products, setProducts] = useState();
  const [copy, setCopy] = useState();
  const [femaleClothing, setFemaleClothing] = useState();
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
        console.log(error);
      });
  }, []);

  const getFemaleLine = (item) => {
    return item.category.includes("women's clothing");
  };
  const shortenString = (name) => {
    return name.split("").splice(0, 8).join("") + "...";
  };
  const handleSearch = (item) => {
    return item.title.includes(value);
  };
  useEffect(() => {
    if (products) {
      const getFemaleClothing = products.filter(getFemaleLine);
      setFemaleClothing(getFemaleClothing);
      setCopy(getFemaleClothing);
    }
  }, [products]);

  useEffect(() => {
    if (value) {
      const filter = femaleClothing.filter(handleSearch);
      setFemaleClothing(filter);
    } else {
      setFemaleClothing(copy);
    }
  }, [value]);

  return (
    <>
      <div className="grid grid-cols-1   justify-items-center mt-5 sm:grid-cols-2 md:grid-cols-4  gap-5">
        {femaleClothing &&
          femaleClothing.map((product) => (
            <Link to={`/product/${product.id}`}>
              <FemaleClothingCard
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

export default FemaleClothing;
