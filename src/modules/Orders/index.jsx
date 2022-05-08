import React from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './styles';
import OrderTable from '../../components/OrderTable';

import orders from '../../assets/orders.json';

function Orders() {
  const navigate = useNavigate();

  const onOrderRowRender = (order) => ({
    onClick: () => {
      navigate(`order/${order.orderID}`);
    },
  });

  return (
    <OrderTable onRow={onOrderRowRender} data={orders} />
  );
}

export default Orders;
