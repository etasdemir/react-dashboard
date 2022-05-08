import React from 'react';
import { Routes, Route } from 'react-router-dom';

import RestaurantMenu from '../modules/RestaurantMenu';
import DetailedOrder from '../modules/DetailedOrder';
import Orders from '../modules/Orders';
import NewDish from '../modules/NewDish';
import OrderHistory from '../modules/OrderHistory';
import Settings from '../modules/Settings';

function AppRoutes() {
  return (
    <Routes>
      <Route path="" element={<Orders />} />
      <Route path="order/:id" element={<DetailedOrder />} />
      <Route path="menu" element={<RestaurantMenu />} />
      <Route path="menu/create" element={<NewDish />} />
      <Route path="order-history" element={<OrderHistory />} />
      <Route path="settings" element={<Settings />} />
    </Routes>
  );
}

export default AppRoutes;
