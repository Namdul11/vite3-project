import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

const CreateProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [isDamage, setIsDamage] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name: name,
      price: price,
      quantity: quantity,
      isDamage: isDamage,
    };

    try {
      let result = await axios({
        url: "http://localhost:8000/product",
        method: "post",
        data: data,
      });
      setName("");//value haru backend ko clear  bayera tala toast message auna lai
      setPrice("");
      setQuantity("");
      setIsDamage(false);
      toast.success(result.data.message);//backend bitra ko result ->data bita ko->message
      //console.log(result);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <>
            
      <form onSubmit={handleSubmit}>
                
        <div>
                    
          <div>
                        <label htmlFor="name">Name :</label>
                        
            <input
              type="text"
              name=""
              id="name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
                      
          </div>
                    
          <div>
                        <label htmlFor="price">Price :</label>
                        
            <input
              type="text"
              name=""
              id="price"
              value={price}
              onChange={(e) => {
                setPrice(e.target.value);
              }}
            />
                      
          </div>
                    
          <div>
                        <label htmlFor="quantity">Quantity :</label>
                        
            <input
              type="text"
              name=""
              id="quantity"
              value={quantity}
              onChange={(e) => {
                setQuantity(e.target.value);
              }}
            />
                      
          </div>
                    
          <div>
                        <label htmlFor="isDamage">isDamage :</label>
                        
            <input
              type="checkbox"
              name=""
              id="isDamage"
              checked={isDamage}
              onChange={(e) => {
                setIsDamage(e.target.checked);
              }}
            />
                      
          </div>
                  
        </div>
                
        <div>
                    <button>Submit</button>
                  
        </div>
              
      </form>
          
    </>
  );
};

export default CreateProduct;
