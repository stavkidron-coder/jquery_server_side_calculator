console.log('Hello from js');

$(document).ready(onReady);

function onReady(){
    console.log('Hello from jQ');

    getInputedNumbers();
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
