import React, { useState } from "react";
import { Modal, Button, message, Form, Input  } from "antd";
// import Catmod from "./Catmod";
import { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import 'animate.css';
// import dropCat from "./DropCat";
import GetCat from "./axios";

const Mod = () => {
  const [form] = Form.useForm();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [value, setValue] = useState();

  const showModal = () => {
    setIsModalVisible(true);
  };

 

  const Update = (e) => {
    setValue(e);
    // console.log("", e);
  };

  const handleOk = (e) => {

    e.preventDefault();
    if (value === "" || !value) {
      message.error("This is an error message");
      return;
    }
    setIsModalVisible(false);
    setValue("");
   
    GetCat({title: value });

    store.addNotification({
      title: 'Dropbox',
      message: 'Category Created',
      type: 'default',                         // 'default', 'success', 'info', 'warning'
      container: 'top-center',                // where to position the notifications
      animationIn: ["animated", "fadeIn"],     // animate.css classes that's applied
      animationOut: ["animated", "fadeOut"],   // animate.css classes that's applied
      dismiss: {
        duration: 3000
      }
    })
    setIsModalVisible(false);


    console.log("Successfully Added");
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const onChange = (e) => {
    setValue(e.currentTarget.value);
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
      <h1>
      <Form form={form}>
        <Form.Item label="Brand">
          <Input
            placeholder="Type in Brand"
            value={value}
            onChange={onChange}
            updateCategoryName={Update} 
          />
        </Form.Item>
      </Form>
    </h1>
      </Modal>

      {/* <Button onClick={GetCat}>Submit</Button> */}
    </>
  );
};

export default Mod;