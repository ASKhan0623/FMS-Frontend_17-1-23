import React from 'react';
import { Select } from 'antd';

const SelectField = ({ options, placeholder, label, onChange, value }) => (
  <div style={{ display: 'flex', flexDirection: 'column' }}>
    {label && <label style={{ marginBottom: 5, fontFamily: 'poppins', color: 'white', fontWeight: '500', }}>{label}</label>}
    <Select
      showSearch
      style={{
        width: 320,
        height: 45,
        marginBottom: 15, // Adjust the spacing as needed
      }}
      placeholder={placeholder}
      optionFilterProp="children"
      filterOption={(input, option) => (option?.label ?? '').includes(input)}
      filterSort={(optionA, optionB) =>
        (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
      }
      options={options}
      value={value}
      onChange={onChange}
    />
  </div>
);

export default SelectField;
