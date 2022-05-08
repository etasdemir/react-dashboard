import React from 'react';
import {
  Card, Descriptions, Divider, List, Button,
} from 'antd';
import { useParams } from 'react-router-dom';

import dishes from '../../assets/dishes.json';
import styles from './styles';

function DetailedOrder() {
  const { id } = useParams();

  return (
    <Card style={styles.title} title={`Order ${id}`}>
      <Descriptions bordered column={{ lg: 1, md: 1, sm: 1 }}>
        <Descriptions.Item label="Customer">Eren</Descriptions.Item>
        <Descriptions.Item label="Customer Address">Eryaman/Ankara</Descriptions.Item>
      </Descriptions>
      <Divider />
      <List
        dataSource={dishes}
        renderItem={(dishItem) => (
          <List.Item>
            <div style={{ fontWeight: 'bold' }}>
              {dishItem.name} x{dishItem.quantity}
            </div>
            <div>${dishItem.price}</div>
          </List.Item>
        )}
      />
      <Divider />
      <div style={styles.totalSumContainer}>
        <h2>Total:</h2>
        <h2 style={styles.totalPriceText}>$15.00</h2>
      </div>
      <Divider />
      <div style={styles.orderButton}>
        <Button block type="danger" size="large">
          Decline Order
        </Button>
        <Button block type="primary" size="large">
          Accept Order
        </Button>
      </div>
      <Button block type="primary" size="large">
        Food Ready
      </Button>
    </Card>
  );
}

export default DetailedOrder;
