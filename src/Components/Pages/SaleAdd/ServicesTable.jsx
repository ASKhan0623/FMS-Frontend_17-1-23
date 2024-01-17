import React from 'react';
import { Input, Select, Button, Form, Space, Typography } from 'antd';
import { PlusOutlined, PlusCircleOutlined, DeleteRowOutlined } from '@ant-design/icons';

const { Option } = Select;
const { Text } = Typography;

const ServicesTable = ({ services, handleServiceChange, handleServicesData, removeService, onDataChange, }) => {
  const submit =(e)=>{
    handleServicesData(e);
  }

  const [form] = Form.useForm();
   
  // const onValuesChange = (changedValues, allValues) => {
  //   if (changedValues.uprice || changedValues.quantity) {
  //     const updatedFields = allValues.users.map((field) => {
  //       const { uprice, quantity } = field;
  //       const total = uprice && quantity ? uprice * quantity : undefined;
  //       return {
  //         ...field,
  //         total,
  //       };
  //     });

  //     form.setFieldsValue({
  //       users: updatedFields,
  //     });

  //     onDataChange({
  //       fields: updatedFields,
  //     });
  //   }
  // };
  

  return(
 
  <Form
    name="dynamic_form_nest_item"
    autoComplete="off"
    // onFinish={console.log(values)}
    onFinish={submit}
    // onValuesChange={onValuesChange}
    style={{
      width: '100%',
      marginTop: 20,
    }}
  >
    <div style={{ overflowX: 'auto' }}>
      <Space
        style={{
          display: 'flex',
          alignItems: 'baseline',
          marginBottom: 8,
        }}
        align="baseline"
      >
        <Text strong style={{ color: 'white', }}>Services</Text>
        <Text strong style={{ color: 'white', marginLeft: 340, }}>Unit Price</Text>
        <Text strong style={{ color: 'white', marginLeft: 80, }}>Quantity</Text>
        <Text strong style={{ color: 'white', marginLeft: 80, }}>Currency</Text>
        <Text strong style={{ color: 'white', marginLeft: 20, }}>R.O.E</Text>
        <Text strong style={{ color: 'white', marginLeft: 105, }}>Total</Text>
        <Text strong style={{ color: 'white', marginLeft: 125, }}>Action</Text>
      </Space>
    </div>
    <Form.List name="users">
      {(fields, { add, remove }) => (
        <>
          {fields.map(({ key, name,...restField }) => (
            <Space
              key={key}
              style={{
                display: 'flex',
                alignContent: 'center',
                justifyContent: 'space-evenly',
                // marginLeft: 25,
              }}
              align="baseline"
            >
              <Form.Item
                {...restField}
                name={[name, 'services']}
                style={{ minWidth: 400 }}
              >
                <Input placeholder="Add Services" />
              </Form.Item>
              <Form.Item
                 {...restField}
                 name={[name, 'uprice']}
                 style={{ Width: 50 }}
               >
                 <Input placeholder="Unit Price" />
               </Form.Item>
               <Form.Item
                 {...restField}
                 name={[name, 'quantity']}
                 style={{ Width: 50 }}
               >
                 <Input placeholder="Quantity" />
               </Form.Item>
               <Form.Item
                 {...restField}
                 name={[name, 'selection']}
                 style={{ Width: 50 }}
                 rules={[
                   {
                     required: true,
                     message: 'Missing selection',
                   },
                 ]}
               >
                 <Select placeholder="Select">
                   <Option value="USD">USD</Option>
                   <Option value="GBP">GBP</Option>
                   <Option value="PKR">PKR</Option>
                 </Select>
               </Form.Item>
               <Form.Item
                 {...restField}
                 name={[name, 'roe']}
                 style={{ Width: 50 }}
               >
                 <Input placeholder="R.O.E" />
               </Form.Item>
               <Form.Item
                 {...restField}
                 name={[name, 'total']}
                 style={{ Width: 100 }}
               >
                 <Input placeholder="Total" />
               </Form.Item>
               <Button style={{ width: "40px", color: "white", fontWeight: "Bold", fontSize: "14px", background: " #a881af", border: "none", }}>
               <DeleteRowOutlined onClick={() => {
                        remove(name);
                        const updatedFields = form.getFieldValue('fields').filter((field) => field.name !== name);
                        console.log(updatedFields);
                        onDataChange({
                          fields: updatedFields,
                        });
                      }} style={{ fontSize: 14, color: 'white', fontWeight: 'bold', }} />   
               </Button>
               <Form.Item>
                <button type='submit' style={{width: "40px", height: "30.5px", borderRadius: "6px", cursor: "pointer", color: "white", fontWeight: "Bold", fontSize: "14px", border: "none", background: "#5dbea3" }}>
                <PlusCircleOutlined style={{fontWeight: "bold"}}/>
                </button>
               </Form.Item>
            </Space>
          ))}
          <Form.Item>
            <Button
              type="dashed"
              onClick={() => {
                add();
              }}
              block
              icon={<PlusOutlined />}
              style={{ width: 180, marginLeft: 20 }}
            >
              Add Services
            </Button>
          </Form.Item>
        </>
      )}
    </Form.List>
  </Form>
)}

export default ServicesTable;
