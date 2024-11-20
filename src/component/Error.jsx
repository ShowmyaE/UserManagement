import React from 'react';

const Error = ({ message }) => {
  return (
    <div style={{ color: 'red' }}>
      <strong>{message}</strong>
    </div>
  );
};

export default Error;