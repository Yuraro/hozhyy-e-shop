import axios from 'axios';

// Приклад GET-запиту
axios.get('/api/products')
  .then(response => {
    console.log(response.data);
    // Тут можна виконати щось з отриманими даними
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });

// Приклад POST-запиту
axios.post('/api/products', { name: 'New Product' })
  .then(response => {
    console.log(response.data);
    // Тут можна виконати щось з отриманими даними
  })
  .catch(error => {
    console.error('Error posting data:', error);
  });
