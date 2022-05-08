import React from 'react';
import { Menu } from 'antd';
import { useNavigate } from 'react-router-dom';

const menuItems = [
  {
    key: '/',
    label: 'Orders',
  },
  {
    key: 'menu',
    label: 'Menu',
  },
  {
    key: 'order-history',
    label: 'Order History',
  },
  {
    key: 'settings',
    label: 'Settings',
  },
];

function SideMenu() {
  const navigate = useNavigate();
  const onMenuItemClick = (menuItem) => {
    navigate(menuItem.key);
  };

  return (
    <Menu items={menuItems} onClick={onMenuItemClick} />
  );
}

export default SideMenu;
