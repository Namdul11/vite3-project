import React, { useState } from "react";

const CreateProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [isDamage, setIsDamage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: name,
      price: price,
      quantity: quantity,
      isDamage: isDamage,
    };
    console.log(data);
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
