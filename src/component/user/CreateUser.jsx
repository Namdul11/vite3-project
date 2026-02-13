import React from "react";
import { useState } from "react";

const CreateUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profileImage, setProfileImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: name,
      email: email,
      password: password,
      profileImage: profileImage,
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
            <label htmlFor="email">Email :</label>
            <input
              type="text"
              name=""
              id="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <div>
              <label htmlFor="password">Password :</label>
              <input
                type="text"
                id="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <div>
              <label htmlFor="profileImage">ProfileImage :</label>
              <input
                type="text"
                id="profileImage"
                value={profileImage}
                onChange={(e) => {
                  setProfileImage(e.target.value);
                }}
              />
            </div>
          </div>
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    </>
  );
};

export default CreateUser;
