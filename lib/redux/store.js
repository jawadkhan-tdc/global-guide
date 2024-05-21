import { configureStore } from "@reduxjs/toolkit";
import companyReducer from "./slices/companySlice/companySlice";
const store = configureStore({
  reducer: {
    company: companyReducer,
  },
});

export default store;
