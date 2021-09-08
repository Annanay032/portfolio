
import React, { useState } from "react";
import { Modal, Button } from "antd";
import Catmod2 from "./Catmod2";
import DropCat from "./DropCat";
import GetBrand from "./axbrand";
//import onChange from "./Catmod2"
// import { values } from "sequelize/types/lib/operators";

const Brandmod = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [value, setValue] = useState("");


  const showModal = () => {
    setIsModalVisible(true);
  };

  const Prod = (e) => {
    setValue(e)
  };


  const handleOk = () => {
    setIsModalVisible(false);
    GetBrand({name: value});
    
    // console.log("Successfully Added");
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Create Brand
      </Button>

      <Modal
        title="Create Brand"
        visible={isModalVisible}
        onOk={handleOk}
        okText="Submit"
        onCancel={handleCancel}
      >
        <h1>
          <Catmod2 updateProductName={Prod} />
          
        </h1>
      </Modal>
    </>
  );
};

export default Brandmod;