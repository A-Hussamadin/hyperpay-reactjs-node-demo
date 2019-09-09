const express = require('express');
var https = require('https');
var querystring = require('querystring');
const router = express.Router();
const axios = require('axios');

router.post('/checkout', function(req, res) {
  request(function(responseData) {
    console.log(responseData);
    res.json(responseData);
  });
});

function request(callback) {
  var path = '/v1/checkouts';
  var data = querystring.stringify({
    entityId: '8a82941750616e5a01506185ccc3007c',
    amount: '92.00',
    currency: 'SAR',
    paymentType: 'DB',
  });
  var options = {
    port: 443,
    host: 'test.oppwa.com',
    path: path,
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Content-Length': data.length,
      Authorization:
        'Bearer OGE4Mjk0MTc1MDYwODIzYTAxNTA2MDg2NmE0ODAwMmN8WlI5eld5UlA=',
    },
  };
  var postRequest = https.request(options, function(res) {
    res.setEncoding('utf8');
    res.on('data', function(chunk) {
      jsonRes = JSON.parse(chunk);
      return callback(jsonRes);
    });
  });
  postRequest.write(data);
  postRequest.end();
}

router.post('/result', function(req, res) {
  console.log(req.body);
  resultRequest(req.body.resourcePath, function(responseData) {
    res.json(responseData);
  });
});

function resultRequest(resourcePath, callback) {
  var path = resourcePath;
  path += '?entityId=8a82941750616e5a01506185ccc3007c';
  //   var options = {
  //     port: 443,
  //     host: 'test.oppwa.com',
  //     path: path,
  //     method: 'GET',
  //     headers: {
  //       Authorization:
  //         'Bearer OGE4Mjk0MTc1MDYwODIzYTAxNTA2MDg2NmE0ODAwMmN8WlI5eld5UlA=',
  //     },
  //   };
  //   var postRequest = https.request(options, function(res) {
  //     res.setEncoding('utf8');
  //     res.on('data', function(chunk) {
  //       jsonRes = JSON.parse(chunk);
  //       return callback(jsonRes);
  //     });
  //   });
  //   postRequest.end();
  const url = 'https://test.oppwa.com' + path;
  axios
    .get(url, {
      headers: {
        Authorization:
          'Bearer OGE4Mjk0MTc1MDYwODIzYTAxNTA2MDg2NmE0ODAwMmN8WlI5eld5UlA=',
      },
    })
    .then(function(response) {
      // handle success
      // console.log(response);
      try {
        resDate = JSON.parse(response);
      } catch (e) {
        resData = response;
        // console.log(resData.data.id);
      }

      return callback(resData.data);
    })
    .catch(function(error) {
      // handle error
      //

      console.log(error);
    });
}

module.exports = router;
