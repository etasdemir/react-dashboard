import React from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

function AddNewDish() {
  return (
    <Link to="create">
      <Button type="primary">Add Dish</Button>
    </Link>
  );
}

export default AddNewDish;
