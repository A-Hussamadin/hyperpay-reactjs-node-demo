const express = require('express');
var https = require('https');
var querystring = require('querystring');
const router = express.Router();


router.post('/checkout', function (req, res) {
    request(function (responseData) {
        console.log(responseData);
        res.json(responseData);
    });
})

function request(callback) {
    var path = '/v1/checkouts';
    var data = querystring.stringify({
        'authentication.userId': '8a8294174d0595bb014d05d829e701d1',
        'authentication.password': '9TnJPc2n9h',
        'authentication.entityId': '8a8294174d0595bb014d05d82e5b01d2',
        'amount': '92.00',
        'currency': 'EUR',
        'paymentType': 'DB'
    });
    var options = {
        port: 443,
        host: 'test.oppwa.com',
        path: path,
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Content-Length': data.length
        }
    };
    var postRequest = https.request(options, function (res) {
        res.setEncoding('utf8');
        res.on('data', function (chunk) {
            jsonRes = JSON.parse(chunk);
            return callback(jsonRes);
        });
    });
    postRequest.write(data);
    postRequest.end();
}



router.post('/result', function (req, res) {
    console.log(req.body);
    resultRequest(req.body.resourcePath, function (responseData) {
        res.json(responseData);
    });
})


function resultRequest(resourcePath, callback) {
    var path = resourcePath;
    path += '?authentication.userId=8a8294174d0595bb014d05d829e701d1'
    path += '&authentication.password=9TnJPc2n9h'
    path += '&authentication.entityId=8a8294174d0595bb014d05d82e5b01d2'
    var options = {
        port: 443,
        host: 'test.oppwa.com',
        path: path,
        method: 'GET',
    };
    var postRequest = https.request(options, function (res) {
        res.setEncoding('utf8');
        res.on('data', function (chunk) {
            jsonRes = JSON.parse(chunk);
            return callback(jsonRes);
        });
    });
    postRequest.end();
}

module.exports = router;