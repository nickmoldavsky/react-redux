import { configureStore } from '@reduxjs/toolkit';

import counterReducer from './cart';
import uiReducer from './ui';


const store = configureStore({
  reducer: { counter: counterReducer,  ui: uiReducer},
});

export default store;