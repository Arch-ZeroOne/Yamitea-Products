import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import ProductInfoCard from "./ProductInfoCard";
function ProductInfo() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `https://fakestoreapi.com/products/${id}`,
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
        setProduct(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);
  useEffect(() => {
    console.log(product);
  }, [product]);
  return (
    <div>
      {product &&
        product.map((item) => (
          <ProductInfoCard key={item.id} name={item.name} img={item.img} />
        ))}
    </div>
  );
}

export default ProductInfo;
