const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
  // Додайте інші поля, які вам потрібні для продуктів
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
