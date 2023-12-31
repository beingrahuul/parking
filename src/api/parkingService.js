import axios from 'axios';

const API_URL = 'http://localhost:8080/api'; // Adjust this to your backend API

export const createParking = (parkingData) => {
  return axios.post(`${API_URL}/parking/create`, parkingData, {
    withCredentials: true,
  });
};

export const getParkings = () => {
  return axios.get(`${API_URL}/parking`, {
    withCredentials: true
  });
};

export const createSlot = (slotData) => {
  return axios.post(`${API_URL}/slot/create`, slotData, {
    withCredentials: true,
  });
};

export const getParkingSlots = (id) => {
  return axios.get(`${API_URL}/parking/getSlots/${id}`, {
    withCredentials: true
  });
};


export const getParkingSlotDetails = (slotId) => {
  return axios.get(`${API_URL}/slot/${slotId}`, {
    withCredentials: true
  });
};