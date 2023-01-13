import { configureStore } from '@reduxjs/toolkit';

import emailReducer from '../features/emailClient/EmailSlice.js';
export const store = configureStore({
  reducer: {
    emails: emailReducer,
  },
});


