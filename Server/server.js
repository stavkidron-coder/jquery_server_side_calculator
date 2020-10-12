const express = require('express');
const bodyParser = require('body-parser');

const app = express(); // Creates instance of express // utilizing the express module
const port = 5000;

const numberData = require('./modules/numberData'); //referring to numberData.js in modules
const inputedNumbers = require('./modules/numberData');

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true}));

app.get('/inputedNumbers', (req, res) => { //brings in inputedNumbers array
    res.send(numberData);
});

app.post('/inputedNumbers', (req, res) => {
    console.log(req.body);
    inputedNumbers.push(req.body);
    res.sendStatus(200);    
});

app.post('/total', (req, res) => {
    console.log(req.body);
    total = req.body;
    res.sendStatus(200);
});

app.listen(port, () => { //listen keeps server open
    console.log('Up and running on port', port); //message confirming that server is running   
});


///////////////////////////////////////////////////////////
// LOGIC //
///////////////////////////////////////////////////////////

function execute(){
    $('#addBtn').on('click', add);
    $('#subtractBtn').on('click', subtract);
    $('#multiplyBtn').on('click', multiply);
    $('#divideBtn').on('click', divide);
}


function equateTotal(){

    // if nothing inputed, log "no numbers inputed"
    if($('#firstValue').val() === '' && $('#secondValue').val() === '') {
        console.log('No numbers inputed');
        return;
    }
    
    // if add button = checked, add numbers
    else if($('#addBtn').is(':checked')){
        total = add();
        operator = "+";
        return total;
    }
    
    // if subtract button = checked, subtract number
    else if($('#subtractBtn').is(':checked')){
        total = subtract();
        console.log(total);
        // clear inputs after hitting submit button
        $('#firstValue').val('');
        $('#secondValue').val('');
        return total;
    }
    
    // if multiply button = checked, multiply numbers
    else if($('#multiplyBtn').is(':checked')){
        let total = multiply();
        console.log(total);
        // clear inputs after hitting submit button
        $('#firstValue').val('');
        $('#secondValue').val('');
        return total;
    }
    
    // if divide button = checked, divide numbers
    else if($('#divideBtn').is(':checked')){
        let total = divide();
        console.log(total);
        // clear inputs after hitting submit button
        $('#firstValue').val('');
        $('#secondValue').val('');
        return total;
    }
}

// function clearCalc(){ // sets the number inputs to an empty string
//     $('#firstValue').val(''),
//     $('#secondValue').val('')
// }

function add(){
    if($('#addBtn').is(':checked')){
        let total = Number($('#firstValue').val()) + Number($('#secondValue').val());
        return total;
    }
}

function subtract(){
    if($('#subtractBtn').is(':checked')){
        let total = Number($('#firstValue').val()) - Number($('#secondValue').val());
        return total;
    }
}

function multiply(){
    if($('#multiplyBtn').is(':checked')){
        let total = Number($('#firstValue').val()) * Number($('#secondValue').val());
        return total;
    }
}

function divide(){
    if($('#divideBtn').is(':checked')){
        let total = Number($('#firstValue').val()) / Number($('#secondValue').val());
        return total;
    }
}