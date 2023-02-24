import axios from "axios";
//import React, { useEffect } from "react";
//import onChange from "./Catmod";

const GetProd = async (props) => {
  console.log({ props });
  const response = await axios({
    method: "POST",
    url: "/api/products",
    data: {
      title: props.title,
      price: props.price,
      ratings: props.ratings,
      specs: props.specs,
      categoryId: props.categoryId,
      brandId: props.brandId,
    },
  }).then(
    (response) => {
      //  axios({
      //   method: "GET",
      //   url: "/api/products",
      //   data: {
      //     title: props.title,
      //     price: props.price,
      //     ratings: props.ratings,
      //     specs: props.specs,
      //     categoryId: props.categoryId,
      //     brandId: props.brandId,
      //   },

      // })
      console.log(response);
    },
    (error) => {
      console.log(error);
    }
  );
  console.log(response);

};

export default GetProd;
