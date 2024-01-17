import React from 'react';
import { UploadOutlined } from '@ant-design/icons';
import { Button, Upload } from 'antd';

const AttachDoc = ({ label }) => (
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
    <Upload>
      <Button icon={<UploadOutlined />} style={{ width: 320, height: 45, marginBottom: 15 }}>
        Upload
      </Button>
    </Upload>
  </div>
);

export default AttachDoc;
