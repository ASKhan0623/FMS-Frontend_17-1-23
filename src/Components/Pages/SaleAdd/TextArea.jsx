import React from 'react';
import { Input } from 'antd';
const { TextArea } = Input;

const MultiLineField = ({ textAreas }) => (
  <>
    {textAreas.map((textArea, index) => (
      <div key={index}>
        {textArea.label && (
          <label style={{ display: 'block', marginBottom: 5, color: 'white', fontWeight: 500, }}>{textArea.label}</label>
        )}
        <TextArea
          showCount={textArea.showCount || false}
          maxLength={textArea.maxLength || 100}
          onChange={textArea.onChange || (() => {})}
          placeholder={textArea.placeholder || 'Type here...'}
          style={{
            height: textArea.height || 45,
            resize: textArea.resize || 'none',
            width: 590,
            marginTop: 5, // Adjust the spacing as needed
          }}
        />
        <br />
        <br />
      </div>
    ))}
  </>
);

export default MultiLineField;

