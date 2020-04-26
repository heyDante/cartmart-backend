require('dotenv').config();

const express = require('express');
const axios = require('axios');

const app = express();

app.get('/api/cartmart', (req, res) => {
  const apiUrl = 'http://api.ninjastore.in/product';
  const apiKey = process.env.API_KEY;
  (async () => {
    const response = await axios.get(apiUrl, {
      headers: {
        'api-key': apiKey
      }
    });
    res.send(response.data)
  })();
});

module.exports = app;

