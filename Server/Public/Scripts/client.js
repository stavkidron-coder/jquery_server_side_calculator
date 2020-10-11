

$(document).ready(onReady);

function onReady(){
    console.log('Hello from jQ');

    getInputedNumbers();

    $('#submit').on('click', submitEquation);
    $('#clear').on('click', clearCalc);
    $('#addBtn').on('click', add);
    $('#subtractBtn').on('click', subtract);
    $('#multiplyBtn').on('click', multiply);
    $('#divideBtn').on('click', divide);
}

let total = 0;

function getInputedNumbers(){
    //get numbers
    
    $.ajax({ //connects client to server
        method: 'GET',
        url: '/inputedNumbers'
    }).then(function (response){
        console.log(response);
        appendToDom(response);    
    }).catch(function (error){
        alert(error);
    });
}

function submitTotal(){
    $.ajax({ //connects client to server
        method: 'POST',
        url: '/total',
        data: total
    }).then(function (response){
        console.log(response);
        //perform get request to get updated array
        getInputedNumbers();  
    }).catch(function (error){
        alert(error);
    });
}

function appendToDom(array){   
    $('#displayHistory').empty(); // empties the ul so that only the last submit is displayed
    for (let i = 0; i < array.length; i++) {
        $('#displayHistory').append(`
            <li>${array[i].firstNumber} ${array[i].secondNumber}</li>
        `)      
    }
}

function submitEquation(){

    let numbers = {
        firstNumber: $('#firstValue').val(),
        secondNumber: $('#secondValue').val()
    };

    //post inputedNumbers
    $.ajax({ //connects client to server
        method: 'POST',
        url: '/inputedNumbers',
        data: numbers
    }).then(function (response){
        console.log(response);
        //perform get request to get updated array
        getInputedNumbers();  
    }).catch(function (error){
        alert(error);
    });

    $('#firstValue').val('');
    $('#secondValue').val('');
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


function clearCalc(){ // sets the number inputs to an empty string
    $('#firstValue').val(''),
    $('#secondValue').val('')
}

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