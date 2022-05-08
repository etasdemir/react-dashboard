import React from 'react';
import { Card, Table } from 'antd';

import OrderStatus from '../OrderStatus';
import styles from './styles';

const orderColumn = [
  {
    title: 'Order ID',
    dataIndex: 'orderID',
    key: 'orderID',
  },
  {
    title: 'Delivery Address',
    dataIndex: 'deliveryAddress',
    key: 'orderID',
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'orderID',
    render: (price) => `$${price}`,
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'orderID',
    render: (status) => <OrderStatus status={status} />,
  },
];

function OrderTable(props) {
  const { title, onRow, data } = props;

  return (
    <Card title={title} style={styles.title}>
      <Table
        dataSource={data}
        columns={orderColumn}
        rowKey="orderID"
        onRow={onRow}
      />
    </Card>
  );
}

export default OrderTable;
