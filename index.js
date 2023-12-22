const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;
const fplApiUrl = 'https://fantasy.premierleague.com/api/bootstrap-static/';

app.get('/', async (req, res) => {
  try {
    // Make a GET request to the FPL API
    const response = await axios.get(fplApiUrl);

    // Extract relevant data from the API response
    const responseData = response.data;

    // Send the data as the response
    res.json(responseData);
  } catch (error) {
    // Handle errors
    console.error('Error fetching data from FPL API:', error.message);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
