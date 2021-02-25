const express = require('express');
const router = express.Router();
const config = require('config');
var qs = require('qs');
const axios = require('axios');

// @route   POST api/data
// @desc    Get data from 'dev-epm.red.sa' end point
// @access  Private

router.get('/', async (req, res) => {
  try {
    // first, get the token
    const response = await axios({
      method: 'post',
      url: 'https://dev-sso-aqari.red.sa/connect/token',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      // 'client_id' and 'client_secret' values are stored in '../config/default.json'
      data: qs.stringify({
        client_id: config.get('client_id'),
        client_secret: config.get('client_secret'),
        grant_type: 'client_credentials',
      }),
    });
    // get the token returned within the authentication endpoint response
    let token = response.data.access_token;
    const returned_data = await axios({
      method: 'get',
      url: 'https://dev-epm.red.sa/api/api/v1/Status/assessment',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    // send the data object within the response of our endpoint.
    res.json(returned_data.data);
  } catch (error) {
    console.log(error);
    res.status(500).send('Server error');

  }
});

module.exports = router;
