import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from 'lib/services/api';

export const fetchCompanyData = createAsyncThunk(
  'company/fetchCompany',
  async (id) => {
    try {
      const response = await api.get(`/company/${id}`);
      return response.data;
    } catch (error) {
      return (error.response.data);
    }
  }
);
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
export const { updateCompany } = companySlice.actions;