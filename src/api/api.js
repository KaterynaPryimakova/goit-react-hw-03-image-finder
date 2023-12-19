import axios from 'axios';

const KEY = '40508767-6cd82c1efe9e2d82c03812311';
axios.defaults.baseURL = `https://pixabay.com/api/?${KEY}`;

export const fetchImagesWithQuery = async searchQuery => {
  const response = await axios.get(`/q=${searchQuery}`);
  return response.data.hits;
};
