export const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '43737494-85d29f20d3f5cd14873374038';

export const options = {
  params: {
    key: API_KEY,
    q: '',
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: 1,
    per_page: 40,
  },
};
