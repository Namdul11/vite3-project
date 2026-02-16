import axios from "axios";
import { useEffect, useState } from "react";

const ReadAllProduct = () => {
 /*  let products = [
    { id: 1, name: "Laptop", price: 10000, quantity: 10, isDamage: false },
    { id: 2, name: "Mobile", price: 5000, quantity: 20, isDamage: true },
    { id: 3, name: "Tablet", price: 8000, quantity: 15, isDamage: false },
    { id: 4, name: "Desktop", price: 15000, quantity: 5, isDamage: true },
  ]; */
  let [products, setProducts] = useState([]);
  /* 
  hit api on payload
  api give data
  set data to product */
  const getData = async () => {
    let result = await axios({
      url: "http://localhost:8000/product",
      method: "get",
    });
    setProducts(result.data.result);

  }
  useEffect(() => {
      getData();
  },[]);

  return (
    <div>
      {products.map((item, i) => {
        return (
          <div key={i} className="card">
            <p>name is {item.name}</p>
            <p>price is {item.price}</p>
            <p>quantity is {item.quantity}</p>
          </div> 
        );
      })}
    </div>
  );
};

export default ReadAllProduct;
