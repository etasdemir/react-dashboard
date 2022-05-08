import React, { useState } from 'react';
import {
  Form, Input, Card, Button, InputNumber,
} from 'antd';

import styles from './styles';

const { TextArea } = Input;

function NewDish() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);

  const onSubmit = () => {
    console.log('submitted', name, description, price);
    setName('');
    setDescription('');
    setPrice(0);
  };

  return (
    <Card title="New Dish Item" style={styles.card}>
      <Form layout="vertical">
        <Form.Item label="Name" required>
          <Input placeholder="Enter dish name" value={name} onChange={(e) => setName(e.target.value)} />
        </Form.Item>
        <Form.Item label="Description" required>
          <TextArea placeholder="Enter description name" rows={4} value={description} onChange={(e) => setDescription(e.target.value)} />
        </Form.Item>
        <Form.Item label="Price ($)" required>
          <InputNumber value={price} onChange={setPrice} />
        </Form.Item>
        <Button type="primary" block onClick={onSubmit}>Submit</Button>
      </Form>
    </Card>
  );
}

export default NewDish;
