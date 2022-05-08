import React from 'react';

import styles from './styles';
import OrderTable from '../../components/OrderTable';

import orderHistory from '../../assets/order-history.json';

function OrderHistory() {
  return (
    <OrderTable data={orderHistory} />
  );
}

export default OrderHistory;
