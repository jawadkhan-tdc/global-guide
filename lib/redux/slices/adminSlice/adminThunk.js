import {createAsyncThunk} from '@reduxjs/toolkit';
import {Helpers} from '../../../helpers';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

export const addCompany = createAsyncThunk('/company', async companyData => {
  try {
    const token = await AsyncStorage.getItem('token');
    const response = await axios.post(
      `${Helpers.BaseUrl}/company`,
      companyData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      },
    );
    if (response?.data) {
      return response.data;
    }
  } catch (error) {
    console.log('errrr is ', error);
    throw error;
  }
});

export const updateCompany = createAsyncThunk(
  '/company',
  async ({companyId, formData}) => {
    try {
      const token = await AsyncStorage.getItem('token');
      const response = await axios.patch(
        `${Helpers.BaseUrl}/company/${companyId}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        },
      );
      if (response?.data) {
        return response.data;
      }
    } catch (error) {
      console.log('errrr is ', error);
      throw error;
    }
  },
);

export const deleteCompany = createAsyncThunk('/company', async companyId => {
  try {
    const token = await AsyncStorage.getItem('token');
    const response = await axios.delete(
      `${Helpers.BaseUrl}/company/${companyId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      },
    );
    if (response?.data) {
      return response.data;
    }
  } catch (error) {
    console.log('errrr is ', error);
    throw error;
  }
});

export const getCompanyById = createAsyncThunk('/company', async () => {
  try {
    const token = await AsyncStorage.getItem('token');
    const response = await axios.get(
      `${Helpers.BaseUrl}/company/${companyId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      },
    );
    if (response?.data) {
      return response.data;
    }
  } catch (error) {
    console.log('errrr is ', error);
    throw error;
  }
});

export const getAllCompanies = createAsyncThunk('/company', async () => {
  try {
    const token = await AsyncStorage.getItem('token');
    const response = await axios.get(`${Helpers.BaseUrl}/company`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    if (response?.data) {
      return response.data;
    }
  } catch (error) {
    console.log('errrr is ', error);
    throw error;
  }
});

export const addDistillery = createAsyncThunk('/distillery', async formData => {
  try {
    const token = await AsyncStorage.getItem('token');
    const response = await axios.post(
      `${Helpers.BaseUrl}/distillery`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      },
    );
    if (response?.data) {
      return response.data;
    }
  } catch (error) {
    console.log('errrr is ', error);
    throw error;
  }
});

export const updateDistillery = createAsyncThunk(
  '/distillery',
  async ({distilleryId, formData}) => {
    try {
      const token = await AsyncStorage.getItem('token');
      const response = await axios.patch(
        `${Helpers.BaseUrl}/distillery/${distilleryId}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        },
      );
      if (response?.data) {
        return response.data;
      }
    } catch (error) {
      console.log('errrr is ', error);
      throw error;
    }
  },
);

export const removeDistillery = createAsyncThunk(
  '/distillery',
  async distilleryId => {
    try {
      const token = await AsyncStorage.getItem('token');
      const response = await axios.delete(
        `${Helpers.BaseUrl}/distillery/${distilleryId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        },
      );
      if (response?.data) {
        return response.data;
      }
    } catch (error) {
      console.log('errrr is ', error);
      throw error;
    }
  },
);

export const getAllDistilleries = createAsyncThunk('/distillery', async () => {
  try {
    const token = await AsyncStorage.getItem('token');
    const response = await axios.get(`${Helpers.BaseUrl}/distillery`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    if (response?.data) {
      return response.data;
    }
  } catch (error) {
    console.log('errrr is ', error);
    throw error;
  }
});

export const addMerchant = createAsyncThunk('/merchant', async formData => {
  try {
    const token = await AsyncStorage.getItem('token');
    const response = await axios.post(`${Helpers.BaseUrl}/merchant`, formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    if (response?.data) {
      return response.data;
    }
  } catch (error) {
    console.log('errrr is ', error);
    throw error;
  }
});

export const updateMerchant = createAsyncThunk(
  '/merchant',
  async ({merchantId, formData}) => {
    try {
      const token = await AsyncStorage.getItem('token');
      const response = await axios.patch(
        `${Helpers.BaseUrl}/merchant/${merchantId}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        },
      );
      if (response?.data) {
        return response.data;
      }
    } catch (error) {
      console.log('errrr is ', error);
      throw error;
    }
  },
);

export const removeMerchant = createAsyncThunk(
  '/merchant',
  async merchantId => {
    try {
      const token = await AsyncStorage.getItem('token');
      const response = await axios.delete(
        `${Helpers.BaseUrl}/merchant/${merchantId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        },
      );
      if (response?.data) {
        return response.data;
      }
    } catch (error) {
      console.log('errrr is ', error);
      throw error;
    }
  },
);

export const getAllMerchants = createAsyncThunk('/merchant', async () => {
  try {
    const token = await AsyncStorage.getItem('token');
    const response = await axios.get(`${Helpers.BaseUrl}/merchant`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    if (response?.data) {
      return response.data;
    }
  } catch (error) {
    console.log('errrr is ', error);
    throw error;
  }
});

export const addRelease = createAsyncThunk('/release', async releaseData => {
  try {
    const token = await AsyncStorage.getItem('token');
    const response = await axios.post(
      `${Helpers.BaseUrl}/release`,
      releaseData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      },
    );
    if (response?.data) {
      return response.data;
    }
  } catch (error) {
    console.log('errrr is ', error);
    throw error;
  }
});

export const updateRelease = createAsyncThunk(
  '/release',
  async ({releaseId, formData}) => {
    try {
      const token = await AsyncStorage.getItem('token');
      const response = await axios.patch(
        `${Helpers.BaseUrl}/release/${releaseId}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        },
      );
      if (response?.data) {
        return response.data;
      }
    } catch (error) {
      console.log('errrr is ', error);
      throw error;
    }
  },
);

export const deleteRelease = createAsyncThunk('/release', async releaseId => {
  try {
    const token = await AsyncStorage.getItem('token');
    const response = await axios.delete(
      `${Helpers.BaseUrl}/release/${releaseId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      },
    );
    if (response?.data) {
      return response.data;
    }
  } catch (error) {
    console.log('errrr is ', error);
    throw error;
  }
});

export const getReleaseById = createAsyncThunk('/release', async () => {
  try {
    const token = await AsyncStorage.getItem('token');
    const response = await axios.get(
      `${Helpers.BaseUrl}/release/${releaseId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      },
    );
    if (response?.data) {
      return response.data;
    }
  } catch (error) {
    console.log('errrr is ', error);
    throw error;
  }
});

export const getAllReleases = createAsyncThunk('/release', async () => {
  try {
    const token = await AsyncStorage.getItem('token');
    const response = await axios.get(`${Helpers.BaseUrl}/release`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    if (response?.data) {
      return response.data;
    }
  } catch (error) {
    console.log('errrr is ', error);
    throw error;
  }
});
