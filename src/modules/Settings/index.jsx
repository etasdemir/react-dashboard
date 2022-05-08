import React, { useState } from 'react';
import {
  Form, Input, Card, Button,
} from 'antd';

import styles from './styles';

function Settings() {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');

  const onSubmit = () => {
    console.log('submitted:', name, address);
    setName('');
    setAddress('');
  };

  return (
    <Card title="Restaurant Details" style={styles.card}>
      <Form layout="vertical">
        <Form.Item label="Name" required>
          <Input placeholder="Enter restaurant name" onChange={(e) => setName(e.target.value)} value={name} />
        </Form.Item>
        <Form.Item label="Address" required>
          <Input placeholder="Enter restaurant address" onChange={(e) => setAddress(e.target.value)} value={address} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" block onClick={onSubmit}>Submit</Button>
        </Form.Item>
      </Form>
    </Card>
  );
}

export default Settings;
