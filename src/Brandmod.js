import React, { useState } from "react";
import { Modal, Button, message, Form, Input } from "antd";
// import Catmod2 from "./Catmod2";
// import DropCat from "./DropCat";
import GetBrand from "./axbrand";
import { store } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import "animate.css";

const Brandmod = () => {
  const [form] = Form.useForm();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [value, setValue] = useState();

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = (e) => {
    e.preventDefault();
    if (value === "" || !value) {
      message.error("This is an error message");
      return;
    }
    setIsModalVisible(false);
    setValue("");
    GetBrand({ name: value });

    store.addNotification({
      title: "Dropbox",
      message: "Brand Created",
      type: "default", // 'default', 'success', 'info', 'warning'
      container: "top-center", // where to position the notifications
      animationIn: ["animated", "fadeIn"], // animate.css classes that's applied
      animationOut: ["animated", "fadeOut"], // animate.css classes that's applied
      dismiss: {
        duration: 3000,
      },
    });

    // console.log("Successfully Added");
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
          <Form form={form}>
            <Form.Item label="Brand">
              <Input
                placeholder="Type in Brand"
                value={value}
                onChange={onChange}
              />
            </Form.Item>
          </Form>
        </h1>
      </Modal>
    </>
  );
};

export default Brandmod;
