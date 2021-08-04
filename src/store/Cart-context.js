import { createContext } from 'react';

// step-1
const CartContext = createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
  clearItems: () => {},
});

export default CartContext;
