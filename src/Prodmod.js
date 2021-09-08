import React, { useState } from "react";
import { Modal, Button } from "antd";
import Catmod3 from "./Catmod3";
import DropCat from "./DropCat";
import DropBrand from "./DropBrand";
import GetProd from "./axprod";
// import onChange from "./Catmod3";
import SpecProd from "./Spec";

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

  const handleOk = () => {
    setIsModalVisible(false);
    console.log('title', value);
    console.log('price',value1);
    console.log('ratings',value2);
    console.log('categoryId',categoryId);
    console.log('brandId',brandId);
    console.log('specs',{name: valueS1, value: valueS2});
    GetProd({
      title: value,
      price: value1,
      ratings: value2,
      categoryId: categoryId ,
      brandId:  brandId,
      specs: [{ name: valueS1, value: valueS2 }],
    });

     console.log(categoryId);
     console.log(brandId);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Create Product
      </Button>

      <Modal
        title="Create Product"
        visible={isModalVisible}
        onOk={handleOk}
        okText="Submit"
        onCancel={handleCancel}
      >
        <h1>
          <>
            <Catmod3
              updateProductName={Prod}
              updateProductPrice={Price}
              updateProductRatings={Ratings}
              //updateProductSpec1={Spec1}
          
            />
            <DropCat getCategoryId= {AcategoryId}/>
            <DropBrand  getBrandId= {AbrandId} />
            <SpecProd updateSpecName={SpecName} updateSpecValue={SpecValue} />
          </>
        </h1>
      </Modal>
    </>
  );
};

export default Prodmod;


