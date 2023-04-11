const mongoose = require('mongoose');

const socialSchema = new mongoose.Schema({
    item: { type: String, required: true },
    // stockCount: Number,
    // price: Number,
    // inStock: Boolean,
    lastAccessed: { type: Date, default: Date.now },
  });

const Social = mongoose.model('Social', socialSchema);

const handleError = (err) => console.error(err);

Social.create(
  {
    item: 'banana',
    stockCount: 10,
    price: 1,
    inStock: true,
  },
  (err) => (err ? handleError(err) : console.log('Created new document'))
);

module.exports = Social;
