const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const router = require('./routes/api');


const app = express();

app.use(cors())
app.use(bodyParser.json());

app.use('/api', router);



app.listen(5000, function () {
    console.log('Server listening on Port 5000')
})