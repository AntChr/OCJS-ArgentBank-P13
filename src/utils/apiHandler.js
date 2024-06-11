import axios from 'axios';
import { store } from '../app/store';
import { setToken, clearToken, selectToken } from '../features/counter/authSlice';


const postAPI = async (url, payload) => {
    try {
      const response = await axios.post(url, payload);
      return response;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };


const urlLogin = "http://localhost:3001/api/v1/user/login";
const urlSignUp ="http://localhost:3001/api/v1/user/signup";
const urlUserInfo = "http://localhost:3001/api/v1/user/profile";


  
  export const loginUser = async (email, password) => {
    try {
      const payload = { email, password };
      const response = await postAPI(urlLogin, payload);
      const token = response.data.body.token;
      store.dispatch(setToken(token));
      return { login: response, error: false };
    } catch (error) {
      return { login: {}, error };
    }
  };

  export const signUpUser = async (email, password, firstname, lastname) => {
    try {
      const payload = { email, password, firstname, lastname };
      const response = await postAPI(urlSignUp, payload);
    const token = response.data.token;
    store.dispatch(setToken(token));
    return { login: response, error: false };
    } catch (error) {
      return { login: {}, error };
    }
  };

  export const getUserInfo = async () => {
    try {
      const state = store.getState();
    const token = selectToken(state);
      if (!token) throw new Error("No token found");
  
      const headers = {
        'Authorization': `Bearer ${token}`
      };
  
      const response = await axios.get(urlUserInfo, { headers });
      return { userInfo: response.data, error: false };
    } catch (error) {
      return { userInfo: {}, error };
    }
  };

  export const updateUserInfo = async (userInfo) => {
    try {
      const state = store.getState();
      const token = selectToken(state);
      if (!token) throw new Error("No token found");
  
      const headers = {
        'Authorization': `Bearer ${token}`
      };
  
      const response = await axios.put(urlUserInfo, userInfo, { headers });
      return { userInfo: response.data, error: false };
    } catch (error) {
      return { userInfo: {}, error };
    }
  };