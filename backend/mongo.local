const mongoose = require('mongoose');


const connectionString = 'mongodb+srv://YuraRo:div9hE0WPJ9wu7VA@hozhyy.aghpykj.mongodb.net/?retryWrites=true&w=majority';

// Підключення до бази даних
mongoose.connect(connectionString, {
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

// Експорт об'єкта підключення для використання в інших частинах вашого коду
module.exports = db;
