const express = require('express');
const bodyParser = require('body-parser');

const app = express(); // Creates instance of express // utilizing the express module
const port = 5000;

const numberData = require('./modules/numberData'); //referring to numberData.js in modules

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true}));

app.get('/inputedNumbers', (req, res) => { //brings in inputedNumbers array
    res.send(numberData);
});

app.listen(port, () => { //listen keeps server open
    console.log('Up and running on port', port); //message confirming that server is running   
});