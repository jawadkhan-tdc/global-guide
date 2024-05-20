import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  company: {},
  loading: false,
  loggedIn: false,
  error: null,
  signupStatus: '',
};

const companySlice = createSlice({
  name: 'company',
  initialState,
  reducers: {
    updateCompany: (state, action) => {
      state.company = action.payload;
    },
  },
});

export default companySlice.reducer;
export const {updateCompany} = companySlice.actions;
