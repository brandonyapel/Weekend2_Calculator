console.log('client.js loaded')

$(document).ready(readyNow)

function readyNow () {
    console.log('jquery loaded')


    //load Calculation history
    $.ajax({
        method: 'GET',
        url: 'calculator/history',
        success: function (response) {
            for (let historyIndex = 0; historyIndex < response.length; historyIndex++) {
                var historyAppendItem = '';
                historyAppendItem += '<tr>';
                historyAppendItem +='<td>'+response[historyIndex].x+'</td>';
                historyAppendItem +='<td>'+response[historyIndex].operatorSign+'</td>';
                historyAppendItem +='<td>'+response[historyIndex].y+'</td>';
                historyAppendItem +='<td>=</td>';
                historyAppendItem +='<td>'+response[historyIndex].answer+'</td>';
                historyAppendItem +='</tr>';
                $('#history').append(historyAppendItem);
                
            }
        }
    })

    //class eventlisteners
    $('.numberButton').on('click',numberButtonClick)
    $('.operatorButton').on('click',operatorButtonClick)
    $('.trigonomotryButton').on('click',trigonomotryButtonClick)

    //id eventlisteners
    $('#buttonEquals').on('click', buttonEqualsClick);
    $('#buttonCE').on('click', buttonCEClick);
    $('#buttonπ').on('click', buttonπClick);
};//end readyNow

var screenNumber = '';
var equationObject = {x: 0,y: 0,operator: ''};

function buttonπClick () {
    $('#screen').val('3.14159265358979323846264338327950288419716939937510582');
}

function buttonCEClick () {
    $('#screen').val('');
    quationObject = {x: 0,y: 0,operator: ''};
};//end buttonCEClicked()

function buttonEqualsClick () {
    
    equationObject.y = Number($('#screen').val());
    console.log(equationObject.operator);
    $.ajax({
        method: 'POST',
        url: 'calculator/'+equationObject.operator,
        data: { x: equationObject.x, y: equationObject.y},
        success: function (response) {
            console.log(equationObject.x + ' '+equationObject.operator+' ' + equationObject.y + ' = ' + response.answer );
            $('#screen').val(response.answer);
            $('#screen').attr('placeholder', 'Ready to Calculate');
            var historyAppendItem = '';
            historyAppendItem += '<tr>';
            historyAppendItem +='<td>'+equationObject.x+'</td>';
            historyAppendItem +='<td>'+equationObject.operatorSign+'</td>';
            historyAppendItem +='<td>'+equationObject.y+'</td>';
            historyAppendItem +='<td>=</td>';
            historyAppendItem +='<td>'+response.answer+'</td>';
            historyAppendItem +='</tr>';
            $('#history').append(historyAppendItem);
        }//end success function
    })//end .ajax
};//end buttonEqualsClick()


function numberButtonClick () {
    var numberClicked = $(this).text();
    screenNumber =  $('#screen').val().toString() + numberClicked;
    $('#screen').val(screenNumber);
};//end numberButtonClicked()

function operatorButtonClick () {
    equationObject.x = Number($('#screen').val());
    console.log('equationObject.x =', equationObject.x);
    equationObject.operatorSign = $(this).text();
    $('#screen').attr('placeholder',equationObject.x + ' ' + equationObject.operatorSign);
    if(equationObject.operatorSign == '+'){
        equationObject.operator = 'add'
    }else if(equationObject.operatorSign == '/'){
        equationObject.operator = 'divide'
    }else if(equationObject.operatorSign == '*'){
        equationObject.operator = 'multiply'
    }else if(equationObject.operatorSign == '-'){
        equationObject.operator = 'subtract'
    }
    $('#screen').val('');
   
};//end operatorButtonClick

function trigonomotryButtonClick () {
    equationObject.x = '';
    equationObject.operatorSign = $(this).text();
    equationObject.operatorSign = $(this).text();
    console.log()
    $('#screen').attr('placeholder',$(this).text());
    $('#screen').val('');
}