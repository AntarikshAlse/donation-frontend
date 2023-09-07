import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api'; // Update with your backend API URL

export const getDonations = (userId: number) => {
  return axios.get(`${API_BASE_URL}/donations?userId=${userId}`);
};

export const addDonation = (donationData: any) => {
  return axios.post(`${API_BASE_URL}/donations`, donationData);
};

export const getThankYouMessage = (userId: number) => {
  return axios.get(`${API_BASE_URL}/thankyou?userId=${userId}`);
};