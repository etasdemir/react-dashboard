import React from 'react';
import { Tag } from 'antd';

function OrderStatus({ status }) {
  const statusState = {};
  switch (status) {
    case 'Accepted':
    case 'Delivered':
      statusState.color = 'green';
      break;
    case 'Pending':
      statusState.color = 'orange';
      break;
    case 'Declined':
      statusState.color = 'red';
      break;
    default:
      statusState.color = 'red';
      break;
  }
  return <Tag color={statusState.color}>{status}</Tag>;
}

export default OrderStatus;
