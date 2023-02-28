import {createSlice} from '@reduxjs/toolkit';

export const initialCartState = {
  basket: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialCartState,
  reducers: {
    setBasket: (state, action) => {
      state.basket = action?.payload;
    },
  },
});

export default cartSlice.reducer;
export const {setBasket} = cartSlice?.actions;
