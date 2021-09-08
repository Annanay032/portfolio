import { Select } from "antd";
import "antd/dist/antd.css";
import { useEffect, useState } from "react";
import axios from "../node_modules/axios/index";

const DropCat = (props) => {
  const { Option } = Select;
  const [catItems, setCatItems] = useState([]);

  useEffect(() => {
    async function getCharacters() {
      const { data } = await axios.get("api/category");
      // const response = await fetch("api/category");
      // const body = await response.json();
      // setItems(body.results.map(({ title }) => ({ value: title })));
      setCatItems(data);
    }
    getCharacters();
  }, []);

  function handleChange(value) {
    console.log(`Selected ${value}`);
   props.getCategoryId(value)
  }

  return (
   
      <Select
        defaultValue="Category"
        style={{ width: 120 }}
        onChange={handleChange}
      >
        {catItems.map((catItem) => (
          <Option key={catItem.id} value={catItem.id}>
            {console.log("value", catItem)}
            {catItem.title}
          </Option>
        ))}
      </Select>
    
  );
};

export default DropCat;
