import axios from "axios";
import React, { useEffect, useState } from "react";

 const ReadAllUser = () => {
 /* let users = [
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
  ]; */
  let [users, setUsers] = useState([]);
  /* 
  hit api on payload
  api give data
  set data to user */
  const getData = async () => {
    let result = await axios({
      url: "http://localhost:8000/user",
      method: "get",
    });
    setUsers(result.data.result);

  }
  useEffect(() => {
      getData();
  },[]);
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
