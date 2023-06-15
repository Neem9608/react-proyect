import React from 'react';

import { IconButton } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';

const Cart = () => {
  return (
    <IconButton aria-label="delete">
      <Badge badgeContent={99} color="error">
      
          <ShoppingCartIcon htmlColor='#fff' />
      </Badge>
    </IconButton>
  );
};

export default Cart;
