import {combineReducers} from 'redux';
import {configureStore} from '@reduxjs/toolkit';
import cartSlice from './slices/cart-slice';

const reducers = combineReducers({
  cart: cartSlice,
});

export const store = configureStore({
  reducer: reducers,
});

export default store;
