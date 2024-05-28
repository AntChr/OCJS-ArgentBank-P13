import axios from 'axios';


const postAPI = async (url, payload) => {
    try {
      const response = await axios.post(url, payload);
      return response;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };


const urlLogin = "http://localhost:3001/api/v1/user/login"
const urlSignUp ="http://localhost:3001/api/v1/user/signup"


  
  export const loginUser = async (email, password) => {
    try {
      const payload = { email, password };
      const login = await postAPI(urlLogin, payload);
      return { login, error: false };
    } catch (error) {
      return { login: {}, error };
    }
  };

  export const signUpUser = async (email, password, firstname, lastname) => {
    try {
      const payload = { email, password, firstname, lastname };
      const login = await postAPI(urlSignUp, payload);
      return { login, error: false };
    } catch (error) {
      return { login: {}, error };
    }
  };