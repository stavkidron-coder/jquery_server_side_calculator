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
}

function clearCalc(){
    console.log('clicked clearCalc');
}

function add(){
    console.log('clicked addBtn');
}

function subtract(){
    console.log('clicked subtractBtn');
}

function multiply(){
    console.log('clicked multiplyBtn');
}

function divide(){
    console.log('clicked divideBtn');
}