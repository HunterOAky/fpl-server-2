const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;
const fplApiUrl = 'https://fantasy.premierleague.com/api/bootstrap-static/';

// Add the provided cookie to the request headers
const axiosWithCookies = axios.create({
  headers: {
    'Cookie': 'datadome=trbmkvlFw5w6SkAOL4ivZHvjTdtbcGmh_OdaUYhPZ~7_1m6YoSKFoBAI8LLkKO2g981uDGSCPjby_7i2SODdLeWaYBa4FHkU~kd1K9Y_LVwoonofXGqfCIVcMnbGxm3e; pl_profile="eyJzIjogIld6SXNOelU1TWprMk56UmQ6MXJHZkR1OmZSR3QydW5CSzJzbE1OTWszNzdNWkVXcFI4TlRtckxGMTNkSkM1Y1FaUDQiLCAidSI6IHsiaWQiOiA3NTkyOTY3NCwgImZuIjogIkFhcm9uIiwgImxuIjogIk9rb3JvaCIsICJmYyI6IDN9fQ=="; csrftoken=lpj5wOUKbC7JspidoTMu7Nxc5xngDe22; sessionid=.eJxVy8sKwjAQheF3yVrKpJnc3LkXFIrrkMkkRCylGLsS3910p8vDd_63CHF71bC1_Ax3FkdhtR-9sSgOv0QxPfKy-zqXdR52Ga7nW7c2TZdTn_9Bja32t7QAlBwrsgjRIFEsDCyRWWbjJYNxAKw9oTI0RquT0ly4WCzeOSk-XwpxMzQ:1rGfDu:5929-nIma9IbKmDAkD-EKaMglAaif67gWMPSwth3hyY',
  },
});

app.get('/', async (req, res) => {
  try {
    // Make a GET request to the FPL API using the Axios instance
    const response = await axiosWithCookies.get(fplApiUrl);

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
