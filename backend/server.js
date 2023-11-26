const express = require('express');
const mongoose = require('mongoose');
const Product = require('./productModel');

const app = express();
app.use(express.json());

// Підключення до бази даних
mongoose.connect('mongodb+srv://YuraRo:div9hE0WPJ9wu7VA@hozhyy.aghpykj.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Отримання об'єкта підключення
const db = mongoose.connection;

// Обробка подій підключення
db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', () => {
  console.log('Connected to the database');
});

// Отримати всі продукти
// Отримати всі продукти
app.get('/api/products', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


// Створити новий продукт
app.post('/api/products', async (req, res) => {
  try {
    const { id, image, title, category, price } = req.body;
    const newProduct = new Product({ id, image, title, category, price });
    const savedProduct = await newProduct.save();
    res.json(savedProduct);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

