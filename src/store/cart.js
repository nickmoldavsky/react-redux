import { createSlice } from '@reduxjs/toolkit';

const initialCounterState = { counter: 0, showCounter: true, price: 0 };

const counterSlice = createSlice({
  name: 'counter',
  initialState: initialCounterState,
  reducers: {
    increment(state, action) {
      state.counter++;
      state.price = state.price + action.payload;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

export const counterActions = counterSlice.actions;

export default counterSlice.reducer;