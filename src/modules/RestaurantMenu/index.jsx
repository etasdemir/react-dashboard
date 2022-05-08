import React from 'react';
import { Button, Card, Table } from 'antd';

import dishes from '../../assets/dishes.json';
import styles from './styles';
import AddNewDish from './AddNewDish';

function RestaurantMenu() {
  const tableColums = [
    {
      title: 'Menu Item',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      render: (price) => `$${price}`,
    },
    {
      title: 'Action',
      key: 'action',
      render: () => <Button danger>Remove</Button>,
    },
  ];

  return (
    <Card title="Menu" style={styles.card} extra={<AddNewDish />}>
      <Table dataSource={dishes} columns={tableColums} row="id" />
    </Card>
  );
}

export default RestaurantMenu;
