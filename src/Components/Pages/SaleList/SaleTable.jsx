import React, { useState, useEffect } from 'react';
import { Table, Menu, Dropdown, Button } from 'antd';
import { SolutionOutlined, SmallDashOutlined, EditOutlined, EyeOutlined, DeleteRowOutlined, DollarOutlined, WalletOutlined, ShoppingOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SaleTable = ({ rowData }) => {

  const [saleadds, setSaleadds] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    Load();
  }, []);

  async function Load() {
    try {
      const result = await axios.get('http://127.0.0.1:8000/api/saleadd');
      const saleAddsWithKeys = result.data.map((item) => ({ ...item, key: item.id }));
      // Reverse the order of the data
      const reversedData = saleAddsWithKeys.reverse();
      setSaleadds(reversedData);
    } catch (error) {
      console.error('Error loading data:', error);
    }
  }
  
  async function onDelete(id) {
    try {
      await axios.delete(`http://127.0.0.1:8000/api/saleadd/${id}`);
      alert('Data has been deleted Successfully');
      Load();
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  }

  const extractDate = (datetimeString) => {
    try {
      const date = new Date(datetimeString);
  
      // Check if the date is valid
      if (isNaN(date)) {
        throw new Error('Invalid date');
      }
  
      // Use toISOString to get YYYY-MM-DD part
      return date.toISOString().split('T')[0];
    } catch (error) {
      console.error('Error extracting date:', error.message);
      return 'Invalid Date';
    }
  };
  

  const columns = [
    {
      title: 'Date',
      dataIndex: 'updated_at',
      render: (value) => extractDate(value),
    },
    {
      title: 'Reference',
      dataIndex: 'customer',
    },
    {
      title: 'Biller',
      dataIndex: 'biller',
    },
    {
      title: 'Customer',
      dataIndex: 'company',
    },
    {
      title: 'Sale Status',
      dataIndex: 'sstatus',
    },
    {
      title: 'Payment Status',
      dataIndex: 'pstatus',
    },
    {
      title: 'Grand Total',
      dataIndex: 'otax',
    },
    {
      title: 'Paid',
      dataIndex: '',
    },
    {
      title: 'Due',
      dataIndex: 'age',
    },
    {
      title: 'Action',
      dataIndex: 'id',
      render: (id, record) => (
        <Dropdown
          overlay={
            <Menu onClick={(e) => handleMenuClick(e, id, record)}>
              <Menu.Item key="1"><SolutionOutlined />  Generate Invoice</Menu.Item>
              <Menu.Item key="2"><EditOutlined />  Edit</Menu.Item>
              <Menu.Item key="3" ><EyeOutlined />  View</Menu.Item>
              <Menu.Item key="4"><DeleteRowOutlined />  Delete</Menu.Item>
              <Menu.Item key="5"><DollarOutlined />  Add Payment</Menu.Item>
              <Menu.Item key="6"><WalletOutlined />  View Payment</Menu.Item>
              <Menu.Item key="7"><ShoppingOutlined />  Add Delivery</Menu.Item>
            </Menu>
          }
        >
          <Button style={{border: 'none'}}>
          <SmallDashOutlined />
          </Button>
        </Dropdown>
      ),
    },
  ];

  const handleMenuClick = async (e, id, record) => {
    console.log('Clicked on menu item:', e.key);
    if (e.key === '4') {
      try {
        await onDelete(id);
      } catch (error) {
        console.error('Error deleting item:', error);
      }
    } else if (e.key === '2') { // Edit action
      try {
        navigate(`/sale/editsale/${id}`,{state:record});
      } catch (error) {
        console.error('Error editing item:', error);
      }
    }
  };

  const pagination = {
    pageSize: 6, // Number of rows per page
  };

  return (
    <div>
      <Table
        columns={columns}
        dataSource={saleadds}
        pagination={pagination}
      />
    </div>
  );
};

export default SaleTable;