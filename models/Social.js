const mongoose = require('mongoose');

const socialSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: Number,
    lastAccessed: { type: Date, default: Date.now },
  });

const Social = mongoose.model('Social', socialSchema);

const handleError = (err) => console.error(err);

Social.create(
  {
    name: 'Katie',
    age: 27
  },
  (err) => (err ? handleError(err) : console.log('Created new user'))
);

module.exports = Social;
