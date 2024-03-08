import { createSlice } from '@reduxjs/toolkit';

type CartItem = {
  id: string;
  title: string;
  price: number;
  quantity: number;
};

type CartState = {
  items: CartItem[];
};

const initialState: CartState = {
  items: [],
};

const reducers = {
    addToCart() {
        
    },
    removeFromCart() {

    }
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers,
});
