//use useffect,useState, useParams,useNavigate,toast

import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const UpdateProduct = () => {
 const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [isDamage, setIsDamage] = useState(false);

  const params = useParams();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name,
      price,
      quantity, 
      isDamage,
    };
    try {
      let result = await axios({
        url: `http://localhost:8000/product/${params.id}`,
        method: "patch",  
        data: data,
      }); 
      toast.success(result.data.message);
      navigate(`/product/${params.id}`);
    } catch (error) {
      toast.error(error.response.data.message);

    }
  };
  const getData = async () => {
    let result = await axios({
      url: `http://localhost:8000/product/${params.id}`,
      method: "get",
    });
    setName(result.data.result.name);
    setPrice(result.data.result.price);
    setQuantity(result.data.result.quantity);
    setIsDamage(result.data.result.isDamage);
  }
  useEffect(() => {
    getData();
  },[]);  
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name :</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="price">Price :</label>
        <input
          type="number"
          id="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="quantity">Quantity :</label>
        <input
          type="number"
          id="quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="isDamage">Is Damage :</label>
        <input
          type="checkbox"
          id="isDamage"
          checked={isDamage}
          onChange={(e) => setIsDamage(e.target.checked)}
        />
      </div>
      <button type="submit">Update Product</button>
    </form>
  );  
};
export default UpdateProduct;
