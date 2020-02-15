var now = new Date();
$('#month').value = now.getMonth();

$('#year').value = now.getFullYear();

var myDate = new Date($('#year').value, $('#month').value);
var showDate = new Date($('#year').value, $('#month').value);

function $(value){
    return document.querySelector(value);
}

function $_(value) {
    return document.querySelectorAll(value);
}

function orderCalender() {

    myDate = new Date($('#year').value, $('#month').value);
    showDate = new Date($('#year').value, $('#month').value);

    $('#wk1').innerHTML = '';
    $('#wk2').innerHTML = '';
    $('#wk3').innerHTML = '';
    $('#wk4').innerHTML = '';
    $('#wk5').innerHTML = '';
    $('#wk6').innerHTML = '';

    var i;
    var day = 1 - myDate.getDay();

    for (i = 1; i <= 6; i++) {

        var dcount = 7;

        while (dcount > 0) {

        var newDate = new Date(myDate.getFullYear(), myDate.getMonth(), day);

        if (myDate.getMonth() != newDate.getMonth()) {
            $('#wk' + i).innerHTML = $('#wk' + i).innerHTML + '<td id="d' + newDate.getFullYear() + '' + newDate.getMonth() + '' + newDate.getDate() + '" class="disabled"><span>' + newDate.getDate() + '</span></td>';
        }
        else {
            $('#wk' + i).innerHTML = $('#wk' + i).innerHTML + '<td id="d' + newDate.getFullYear() + '' + newDate.getMonth() + '' + newDate.getDate() + '" class="" onclick="$(\'#day\').value=\'' + newDate.getDate() + '\'; selectDate()"><span>' + newDate.getDate() + '</span></td>';
        }

        var dcount = dcount - 1;
        var day = day + 1;
        }
    }

    return addEvent();
}

function addEvent() {

    var eventDate;

    eventDates.forEach(function (eventInfo){
        eventDate = new Date(eventInfo[0], eventInfo[1]-1, eventInfo[2]);
        var id = eventDate.getFullYear() + '' + eventDate.getMonth() + '' + eventDate.getDate();

        if (showDate.getFullYear() == eventDate.getFullYear() && showDate.getMonth() == eventDate.getMonth()) {
            $('#d' + id).className = 'active';
            $('#d' + id).setAttribute("title", eventInfo[3]);
        }
        else {
        }
    });
    
}

orderCalender();

$('#month').addEventListener("change", function(){
    return orderCalender();
});

$('#year').addEventListener("change", function(){
    return orderCalender();
});

$('.calender #prev').addEventListener("click", function(){
    if ($('#month').value == '0') {
        $('#month').value = '11';
        $('#year').value = $('#year').value * 1 - 1;
    }
    else {
        $('#month').value = $('#month').value * 1 - 1;
    }
    return orderCalender();
});

$('.calender #next').addEventListener("click", function(){
    if ($('#month').value == '11') {
        $('#month').value = '0';
        $('#year').value = $('#year').value * 1 + 1;
    }
    else {
        $('#month').value = $('#month').value * 1 + 1;
    }
    return orderCalender();
});



var bookingDate = $('#bookingDate');
var year = $('#year');
var month = $('#month');
var day = $('#day');
var calender = $(".calender");

calender.style.display = "none";

bookingDate.addEventListener('click', function () {
    calender.className = "calender pick-date";
    bookingDate.style.display = "none";
});

function closeCalender() {
    calender.className = "calender";
    bookingDate.style.display = "block";
};

$('#day').onchange = function () {
    // alert('I got here');
    bookingDate.value = year.value + "-" + (month.value + 1) + "-" + day.value;
};

function selectDate() {

    bookingDate.value = year.value + '-' + ('0' + (month.value * 1 + 1)).slice(-2) + '-' + ('0' + day.value).slice(-2);

    closeCalender()
}