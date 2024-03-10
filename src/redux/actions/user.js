import toast from 'react-hot-toast';
import { server } from '../stores';
import axios from 'axios';

export const login = (email, password) => async dispatch => {
  try {
    dispatch({ type: 'loginRequest' });
    const { data } = await axios.post(
      `${server}/login`,
      { email, password },
      {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      }
    );
    dispatch({ type: 'loginSuccess', payload: data });
  } catch (error) {
    dispatch({ type: 'loginFail', payload: error.response.data.message });
  }
};

export const register = formdata => async dispatch => {
  try {
    dispatch({ type: 'registerRequest' });
    const { data } = await axios.post(`${server}/register`, formdata, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      withCredentials: true,
    });
    console.log(data);
    dispatch({ type: 'registerSuccess', payload: data });
  } catch (error) {
    dispatch({ type: 'registerFail', payload: error.response.data.message });
  }
};

export const loadUser = () => async dispatch => {
  try {
    dispatch({ type: 'loadUserRequest' });
    const { data } = await axios.get(`${server}/me`, {
      withCredentials: true,
    });
    dispatch({ type: 'loadUserSuccess', payload: data.user });
  } catch (error) {
    dispatch({ type: 'loadUserFail', payload: error.response.data.message });
  }
};

export const logout = () => async dispatch => {
  try {
    dispatch({ type: 'logoutRequest' });
    const { data } = await axios.get(`${server}/logout`, {
      withCredentials: true,
    });
    dispatch({ type: 'logoutSuccess', payload: data.message });
  } catch (error) {
    dispatch({ type: 'logoutFail', payload: error.response.data.message });
  }
};

export const buySubscription = () => async dispatch => {
  try {
    dispatch({ type: 'buySubscriptionRequest' });
    const { data } = await axios.get(`${server}/subscription`, {
      withCredentials: true,
    });
    console.log(data);
    dispatch({ type: 'buySubscriptionSuccess', payload: data.subscriptionId });
  } catch (error) {
    dispatch({
      type: 'buySubscriptionFail',
      payload: error.response?.data?.message,
    });
    toast.error('Error during subscription. Please try again.');
  }
};
export const cancelSubscription = () => async dispatch => {
  try {
    dispatch({ type: 'cancelSubscriptionRequest' });
    const { data } = await axios.delete(`${server}/subscribe/cancel`, {
      withCredentials: true,
    });
    console.log(data);
    dispatch({ type: 'cancelSubscriptionSuccess', payload: data.message });
  } catch (error) {
    dispatch({
      type: 'cancelSubscriptionFail',
      payload: error.response.data.message,
    });
    console.log(error);
  }
};
