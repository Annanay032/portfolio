import axios from "axios";


const GetBrand = async (props) => {
  const response = await axios({
    method: "POST",
    url: "/api/brand",
    data: {
      name: props.name,
    },
  }).then(
    (response) => {
      console.log(response);
    },
    (error) => {
      console.log(error);
    }
  );
  console.log(response);

};

export default GetBrand;
