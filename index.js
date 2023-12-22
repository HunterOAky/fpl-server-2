const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;
const apiUrl = 'https://fplgameweekupdateleague.azurewebsites.net/api/LeagueFunction';

app.get('/', async (req, res) => {
  try {
    // Make a GET request to the specified API endpoint with the given headers
    const response = await axios.get(apiUrl, {
      params: {
        leagueId: 279926,
        entry: 2675959,
        compareEntry: 2675959,
        currentweek: 2,
        doNotCache: 0,
        refreshEntry: 0,
        filterFrom: 0,
        filterTo: 0,
        liveFeedEventTimestamp: '',
        fetchMoreTeams: undefined,
        prevSeasonNum: 5,
        sortOrder: 'orderByNet',
        currentPage: 1,
      },
      headers: {
        FunctionKey: 'db059d47-8b44-476a-9dfc-509bceb87bee',
      },
    });

    // Extract relevant data from the API response
    const responseData = response.data;

    // Send the data as the response
    res.json(responseData);
  } catch (error) {
    // Handle errors
    console.error('Error making GET request:', error.message);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
