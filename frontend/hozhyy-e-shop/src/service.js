// service.js
import axios from 'axios';

const API_URL = 'http://localhost:3000/api/products';

export const fetchProducts = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; // Прокидуємо помилку для обробки її в компоненті React
  }
};

