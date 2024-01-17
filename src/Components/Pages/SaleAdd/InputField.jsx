import React from 'react';
import { Input } from 'antd';

const InputField = ({ placeholder, label, onChange, value }) => (
  <div style={{ display: 'flex', flexDirection: 'column' }}>
    {label && (
      <label
        style={{
          marginBottom: 5,
          fontFamily: 'poppins',
          color: 'white',
          fontWeight: '500',
        }}
      >
        {label}
      </label>
    )}
    <Input
      style={{
        width: 320,
        height: 45,
        marginBottom: 15, // Adjust the spacing as needed
      }}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  </div>
);

export default InputField;
