import axios from 'axios';
import React from 'react';
import { Button, Flex } from 'antd';
import { Link } from 'react-router-dom';
import '../../Pages/PageComponent.css';

const SaleAddBtn = ({}) => (
  <Flex gap="small" wrap="wrap">
    <Link to="/sale/addsale">
      <Button type="primary" className='SubmitBtn CustomButtonColor'>Sale Add</Button>
    </Link>
  </Flex>
);
export default SaleAddBtn;
