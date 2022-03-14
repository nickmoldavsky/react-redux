import { createSlice } from '@reduxjs/toolkit';

const initialUiState = { showCart: false };

const uiSlice = createSlice({
  name: 'ui',
  initialState: initialUiState,
  reducers: {
    showCart(state, action) {
      state.showCart = !state.showCart;
    }
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;