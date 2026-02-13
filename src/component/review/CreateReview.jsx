import { useState } from "react";

const CreateReview = () => {
  const [user, setUser] = useState("");
  const [product, setProduct] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      user: user,
      product: product,
      description: description,
    };
    console.log(data);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <div>
            <label htmlFor="user">User :</label>
            <input
              type="text"
              name=""
              id="user"
              value={user}
              onChange={(e) => {
                setUser(e.target.value);
              }}
            />
          </div>
          <div>
            <label htmlFor="product">Product :</label>
            <input
              type="text"
              name=""
              id="product"
              value={product}
              onChange={(e) => {
                setProduct(e.target.value);
              }}
            />
          </div>
          <div>
            <label htmlFor="description">Description :</label>
            <textarea
              name=""
              id="description"
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            ></textarea>
          </div>
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    </>
  );
};

export default CreateReview;