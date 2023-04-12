const express = require('express');
const db = require('./config/connection');

const { Social } = require('./models');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/all-users', (req, res) => {
  Social.find({}, (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).json(result);
    }
  });
});