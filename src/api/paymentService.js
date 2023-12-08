import axios from 'axios';

const API_URL = 'http://localhost:8080/api'; // Adjust this to your backend API

export const createPaymentLink = (items) => {
  return axios.post(`${API_URL}/payment/checkout`, items, {
    withCredentials: true,
  });
};
