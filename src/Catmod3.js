import React, { useState } from "react";
import "antd/dist/antd.css";
import "./index.css";
import { Form, Input } from "antd";

const Catmod3 = (props) => {
  // const [form] = Form.useForm();
  // const [formLayout, setFormLayout] = useState();
  const [value, setValue] = useState("");
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  

  // const onFormLayoutChange = ({ change }) => {
  //   setFormLayout(change);
  // };
  //    const alert = () => {
  //        console.log('Successfully Submitted')

  //    } ;
  const onChange = (e) => {
    setValue(e.target.value);
    props.updateProductName(value);
  };


  const priceChange = (e) => {
    setValue1(e.target.value);
    props.updateProductPrice(value1);
  };

  const ratingsChange = (e) => {
    setValue2(e.target.value);
    props.updateProductRatings(value2);
  };

  //   const brandmod =() => {
  //         <Brandmod/>
  //     };
  // const formItemLayout =
  //       {
  //         labelCol: {
  //           span: 5,
  //         },
  //         wrapperCol: {
  //           span: 15,
  //         },
  //       };

  return (
    <>
      <Form
      // layout="flex"
      // display="flex"
      // {...formItemLayout}
      // layout={formLayout}
      // form={form}
      // initialValues={{
      //   layout: formLayout,
      // }}
      // onValuesChange={onFormLayoutChange}dfd
      >
        <Form.Item 
        style={{width:'100%',span:'100%',}}
        // className="createProdName"
        label="Product Name">
          <Input
          
            value={value}
            placeholder="Type in Product Name"
            onChange={onChange}
          />
        </Form.Item>
        </Form>
        <Form
        layout="flex"
        >
        <Form.Item 
       
        style={{width:'100%',span:'100%'}}
        
        label="Price">
          <Input
          
            value={value1}
            placeholder="Type in Product Price"
            onChange={priceChange}
          />
        </Form.Item>
        </Form>
        <Form
        layout="flex"
        style={{layout:"flex",span:'100%'}}>
        <Form.Item 
        style={{width:'100%',span:'100%'}}
        layout="flex"
        label="Ratings">
          <Input
            value={value2}
            placeholder="rate it"
            onChange={ratingsChange}
          />
        </Form.Item>

        </Form>

        {/* <Form.Item label="Input">
          <Input placeholder="Type in Product ID" />
        </Form.Item>

        <Form.Item label="Input">
          <Input placeholder="Type in Product" />
        </Form.Item>

        <Form.Item label="Brand">
          <Input placeholder="Select Brand" />
        </Form.Item>

        <Form.Item label="Category">
          <Input placeholder="Select Category" />
        </Form.Item> */}
      
    </>
  );
};
export default Catmod3;