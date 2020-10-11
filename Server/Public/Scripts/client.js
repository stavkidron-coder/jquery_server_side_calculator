console.log('Hello from js');

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

function appendToDom(array){
    console.log(array);
    
    for (let i = 0; i < array.length; i++) {
        $('#displayHistory').append(`
            <li>${array[i].firstNumber} ${array[i].secondNumber}</li>
        `)
        
    }
}

function submitEquation(){
    console.log('clicked submitEquation');
    // if add button = checked, add numbers
    if($('#addBtn').is(':checked')){
        let total = add();
        console.log(total);
    }
    
    else if($('#subtractBtn').is(':checked')){
        let total = subtract();
        console.log(total);
    }
    
    else if($('#multiplyBtn').is(':checked')){
        let total = multiply();
        console.log(total);
    }
    
    else if($('#divideBtn').is(':checked')){
        let total = divide();
        console.log(total);
    }

    $('#firstValue').val('');
    $('#secondValue').val('');
    // if subtract button = checked, subtract number
    // if multiply button = checked, multiply numbers
    // if divide button = checked, divide numbers
}

function clearCalc(){ // sets the number inputs to an empty string
    $('#firstValue').val(''),
    $('#secondValue').val('')
}

function add(){
    console.log('clicked addBtn');
    if($('#addBtn').is(':checked')){
        let total = Number($('#firstValue').val()) + Number($('#secondValue').val());
        return total;
    }
}

function subtract(){
    console.log('clicked subtractBtn');
    if($('#subtractBtn').is(':checked')){
        let total = Number($('#firstValue').val()) - Number($('#secondValue').val());
        return total;
    }
}

function multiply(){
    console.log('clicked multiplyBtn');
    if($('#multiplyBtn').is(':checked')){
        let total = Number($('#firstValue').val()) * Number($('#secondValue').val());
        return total;
    }
}

function divide(){
    console.log('clicked divideBtn');
    if($('#divideBtn').is(':checked')){
        let total = Number($('#firstValue').val()) / Number($('#secondValue').val());
        return total;
    }
}