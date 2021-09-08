import React, { useState } from 'react';
//import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Form, Input} from 'antd';

const SpecProd = (props) => {
  // const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState("inline");
  const [valueS1, setValueS1] = useState("");
  const [valueS2, setValueS2] = useState("");

  // const onFormLayoutChange = ({ layout }) => {
  //   setFormLayout(layout);
  // };



  const formItemLayout =
    formLayout === 'horizontal'
      ? {
          labelCol: {
            span: 4,
          },
          wrapperCol: {
            span: 14,
          },
        }
      : null;
  const buttonItemLayout =
    formLayout === 'horizontal'
      ? {
          wrapperCol: {
            span: 14,
            offset: 4,
          },
        }
      : null;
    

    const S1Change = (e) => {
        setValueS1(e.target.value);
        props.updateSpecName(valueS1);
    };

    const S2Change = (e) => {
        setValueS2(e.target.value);
        props.updateSpecValue(valueS2);
    };







  return (
    <>
      <Form
        // {...formItemLayout}
        layout={formLayout}
        // form={form}
        // initialValues={{
        //   layout: formLayout,
        // }}
        // onValuesChange={onFormLayoutChange}
      >
        <Form.Item label="Spec-1">
          {/* <Radio.Group value={formLayout}>
            
            <Radio.Button value="inline">Inline</Radio.Button>
          </Radio.Group> */}
        </Form.Item>
        <Form.Item label="Name">
          <Input placeholder="input placeholder" onChange={S1Change}/>
        </Form.Item>
        <Form.Item label="Value">
          <Input placeholder="input placeholder" onChange={S2Change} />
        </Form.Item>
       
      </Form>

      {/* <Form
        // {...formItemLayout}
        layout={formLayout}
        // form={form}
        // initialValues={{
        //   layout: formLayout,
        // }}
        // onValuesChange={onFormLayoutChange}
      >
        <Form.Item label="Spec-2"> */}
          {/* <Radio.Group value={formLayout}>
            
            <Radio.Button value="inline">Inline</Radio.Button>
          </Radio.Group> */}
        {/* </Form.Item>
        <Form.Item label="Name">
          <Input placeholder="input placeholder" />
        </Form.Item>
        <Form.Item label="Value">
          <Input placeholder="input placeholder" />
        </Form.Item>
       
      </Form> */}
    </>
  );
};

export default SpecProd;