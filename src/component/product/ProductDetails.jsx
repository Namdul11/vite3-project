import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  let params = useParams();
  let [product, setProduct] = useState({});
  const getData = async () => {
    let result = await axios({
      url: `http://localhost:8000/product/${params.id}`,
      method: "get",
    });
    setProduct(result.data.result);
  };
  useEffect(() => {
    getData();
  }, []);
  console.log(product);
  return <div>
    <p>name is {product.name}</p>
    <p>price is {product.price}</p>
    <p>quantity is {product.quantity}</p>
    <p>isDamage is {product.isDamage ? "Yes" : "No"}</p>
  </div>;
}; 

export default ProductDetails;
/* 

*/
