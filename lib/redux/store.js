import {configureStore} from '@reduxjs/toolkit';
import companyReducer from './slices/companySlice/companySlice';

const reducer = {
  company: companyReducer,
};

export const reduxStore = configureStore({
  reducer,
});
