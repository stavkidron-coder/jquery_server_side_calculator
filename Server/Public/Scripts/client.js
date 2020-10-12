

$(document).ready(onReady);

let operator = "";

function onReady(){
    console.log('Hello from jQ');

    getInputedNumbers();

    $('#submit').on('click', submitEquation);
    // $('#clear').on('click', clearCalc);
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
        secondNumber: $('#secondValue').val(),
        operator: operator
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





