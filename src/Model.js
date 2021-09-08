import React, { useState } from "react";
import { Modal, Button } from "antd";
import Catmod from "./Catmod";
// import dropCat from "./DropCat";
import GetCat from "./axios";

const Mod = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const [value, setValue] = useState();

  const Update = (e) => {
    setValue(e);
    // console.log("", e);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    GetCat({title: value });

    console.log("Successfully Added");
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Create Category
      </Button>

      <Modal
        title="Create Category"
        visible={isModalVisible}
        onOk={handleOk}
        okText="Submit"
        onCancel={handleCancel}
      >
        <Catmod updateCategoryName={Update} />
      </Modal>

      {/* <Button onClick={GetCat}>Submit</Button> */}
    </>
  );
};

export default Mod;