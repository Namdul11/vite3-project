import React from "react";

const ReadAllUser = () => {
  let users = [
    {
      name: "namdul",
      email: "abcd@gmail.com",
      profileImage: "aaaa",
    },
    {
      name: "ram",
      email: "ram@gmail.com",
      profileImage: "aaaa",
    },
    {
      name: "hari",
      email: "hari@gmail.com",
      profileImage: "aaaa",
    },
  ];
  return (
    <div>
      {users.map((item, i) => {
        return (
          <div key={i} className="card">
            <p>name is {item.name}</p>
            <p>email is {item.email}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ReadAllUser;
