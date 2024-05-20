import {createAsyncThunk} from '@reduxjs/toolkit';
import {Helpers} from '../../../helpers';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

export const uploadPicture = createAsyncThunk(
  '/image/upload',
  async ({imagePath, type, imageName}) => {
    try {
      const formData = new FormData();
      formData.append('image', {
        type: type,
        uri: imagePath,
        name: imageName,
      });
      const response = await axios.post(
        `${Helpers.BaseUrl}/image/upload`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      );
      return response.data;
    } catch (error) {
      console.error('Error uploading image', error);
      throw error;
    }
  },
);

export const deletePicture = createAsyncThunk(
  '/image/delete',
  async imageId => {
    try {
      const response = await axios.delete(
        `${Helpers.BaseUrl}/image/delete/${imageId}`,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
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

export const getClientSecret = createAsyncThunk(
  '/payment/paymentIntent',
  async formData => {
    try {
      const token = await AsyncStorage.getItem('token');
      const response = await axios.post(
        `${Helpers.BaseUrl}/payment/paymentIntent/`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
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

export const genericSearch = createAsyncThunk(
  '/search/general',
  async queryText => {
    try {
      const token = await AsyncStorage.getItem('token');
      const response = await axios.post(
        `${Helpers.BaseUrl}/search/general?query=${queryText}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
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
