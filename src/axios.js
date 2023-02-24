import axios from "axios";
//import React, { useState } from "react";
//import Catmod from "./Catmod";
//import handleOk from "./Model";

// const client = axios.create({
//   baseURL: "http://localhost:5200"
// });

const GetCat = async (props) => {
  console.log(props.title);
  const response = await axios({
    method: "POST",
    url: "/api/category",

    data: {
      title: props.title,
    },
  }).then(
    (response) => {
      console.log("oh", response);
    },
    (error) => {
      console.log(error);
    }
  );

  // fetch("http://localhost:5000/categories")
  //   .then((res) => res.json())
  //   .then((res) => console.log(res));
  console.log(response)
};

//   .catch((err) => {
//     console.log("Err", err);
//   });
//   console.log(response);
// };

export default GetCat;
