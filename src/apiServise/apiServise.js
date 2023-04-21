import axios from 'axios';

const searchParams = new URLSearchParams({
  key: '33369895-08f083aac748bf074ebfa9156',
  image_type: 'photo',
  orientation: 'horizontal',
  per_page: 12,
});

axios.defaults.baseURL = 'https://pixabay.com/api/';

export const fetchImg = async (query, page) => {
  const response = await axios.get(`?q=${query}&page=${page}&${searchParams}`);
  const data = response.data;

  return data;
};