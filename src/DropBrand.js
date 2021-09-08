import { Select } from "antd";
import "antd/dist/antd.css";
import { useEffect, useState } from "react";
import axios from "../node_modules/axios/index";

const DropBrand = (props) => {
  //const [posts,setPosts] = useState([])
  const { Option } = Select;
  function handleChange(value) {
    console.log(`Selected ${value}`);
    props.getBrandId(value)
  }
  

  const [brandItems, setbrandItems] = useState([]);

  useEffect(() => {
    async function getCharacter() {
    const { data } = await axios.get("api/brand");
    setbrandItems(data);
    }
    getCharacter();
  }, []);

  return (
    <Select defaultValue="Brand" style={{ width: 120 }} onChange={handleChange}>
      {brandItems.map((brandItem) => (
        <Option key={brandItem.id} value={brandItem.id}>
          {console.log("value", brandItem)}
          {brandItem.name}
        </Option>
      ))}
    </Select>
  );
};

export default DropBrand;
