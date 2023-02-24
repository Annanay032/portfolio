import React, { useState } from "react";
import { Modal, Button , message, Form, Input} from "antd";
import DropCat from "./DropCat";
import DropBrand from "./DropBrand";
import GetProd from "./axprod";
// import onChange from "./Catmod3";
import { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import 'animate.css';

const Prodmod = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const [value, setValue] = useState();
  const [value1, setValue1] = useState();
  const [value2, setValue2] = useState();
  
  const [brandId, setBrandId] = useState();
  const [categoryId, setCategoryId] = useState();
  
  const [valueS1, setValueS1] = useState();
  const [valueS2, setValueS2] = useState();

  const Prod = (e) => {
    setValue(e);
  };

  const Price = (e) => {
    setValue1(e);
  };

  const Ratings = (e) => {
    setValue2(e);
  };

 const AbrandId = (e) => {
  setBrandId(e);
 };

 const AcategoryId = (e) => {
  setCategoryId(e);
 };
  

  const SpecName = (e) => {
    setValueS1(e);
  };

  const SpecValue = (e) => {
    setValueS2(e);
  };

  const onChange = (e) => {
    setValue(e.target.value);

  };


  const priceChange = (e) => {
    setValue1(e.target.value);
   
  };

  const ratingsChange = (e) => {
    setValue2(e.target.value);
    
  };

  const handleOk = (e) => {
    e.preventDefault();
    if (value === ""& value1 === ""& value2 === "" & categoryId === ""& brandId === ""|| !value & !value1 & !value2 & !valueS1 & !valueS2 & !categoryId & !brandId ) {
      message.error("Add all fields");
      return;
    }
     store.addNotification({
      title: 'Product',
      message: 'Product Created',
      type: 'default',                         // 'default', 'success', 'info', 'warning'
      container: 'top-center',                // where to position the notifications
      animationIn: ["animated", "fadeIn"],     // animate.css classes that's applied
      animationOut: ["animated", "fadeOut"],   // animate.css classes that's applied
      dismiss: {
        duration: 3000
      }
    })

    setIsModalVisible(false);
    setValue("");
    setValue1("");
    setValue2("");
    setCategoryId("");
    setBrandId("");
    setValueS1("");
    setValueS2("");

    // console.log('title', value);
    // console.log('price',value1);
    // console.log('ratings',value2);
    // console.log('categoryId',categoryId);
    // console.log('brandId',brandId);
    // console.log('specs',{name: valueS1, value: valueS2});
    GetProd({
      title: value,
      price: value1,
      ratings: value2,
      categoryId: categoryId ,
      brandId:  brandId,
      specs: [valueS1, valueS2], 
      
    });

     console.log(categoryId);
     console.log(brandId);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const S1Change = (e) => {
    setValueS1(e.target.value);
  
};

const S2Change = (e) => {
    setValueS2(e.target.value);
    
};


  return (
    <>
      <Button type="primary" onClick={showModal}>
        Create Product
      </Button>

      <Modal
     layout="flex"
      // className="styleCreateProd"
        title="Create Product"
        visible={isModalVisible}
        onOk={handleOk}
        okText="Submit"
        onCancel={handleCancel}
      >
      <div 
      layout="flex">
        <h1
        // layout="flex"
        >
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

            updateProductName={Prod}
              updateProductPrice={Price}
              updateProductRatings={Ratings}
              //updateProductSpec1={Spec1}
          
          />
        </Form.Item>

        </Form>
  
            </h1>
            <h2
            layout="flex"
           >
            
            <div
            style={{margin:'10px', display:'flex'}}
            >
            Category  <DropCat 
            // classname="styleCreateProd1"
            getCategoryId= {AcategoryId}/>
            </div>
          <div
          style={{width:'100%',span:'100%',margin:'20px'}}
          >
            Brand <DropBrand 
            // classname="styleCreateProd2"
            getBrandId= {AbrandId} />
            </div>
            </h2>
            <h4
            layout="inline">
            <Form
        // {...formItemLayout}
        layout="flex"
        

        // form={form}
        // initialValues={{
        //   layout: formLayout,
        // }}
        // onValuesChange={onFormLayoutChange}
      >
        <Form.Item 

        label="Spec-1">
          {/* <Radio.Group value={formLayout}>
            
            <Radio.Button value="inline">Inline</Radio.Button>
          </Radio.Group> */}
        </Form.Item>
        <Form.Item 
       
        label="Name">
          <Input placeholder="input placeholder" value={valueS1} onChange={S1Change}/>
        </Form.Item>
        <Form.Item label="Value">
          <Input placeholder="input placeholder" value={valueS2} onChange={S2Change} 
          updateSpecName={SpecName} updateSpecValue={SpecValue}/>
        </Form.Item>
       
      </Form>
            
          
        </h4>
        </div>
      </Modal>
    </>
  );
};

export default Prodmod;


