import axios from 'axios';

const API_URL = 'http://localhost:8080/api/auth/'; // Replace with the actual URL of your backend

export const register = (userData) => {
  return axios.post(`${API_URL}register`, userData, {
    withCredentials: true
  });
};

export const login = (userData) => {
  return axios.post(`${API_URL}login`, userData, {
    withCredentials: true
  });
};
