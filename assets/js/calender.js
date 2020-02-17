let datePickerBtn = _('.datePicker')

datePickerBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        calenderInit(btn);
    });
});

let calenderInit = (btn) => {
    let now = new Date();

    month = now.getMonth();
    year = now.getFullYear();

    // let calender = c('div'); calender.classList.add('pickDate', 'calender'); calender.append(clhead(), clweeks(), cldays(month, year));

    modalContent.innerHTML = '';

    modalContent.classList.add('pickDate', 'calender'); modalContent.append(clhead(), clweeks(), cldays(month, year));

    // modalContent.append(calender);

    modalBtn.click();
}


let clhead = () => {

    let arr_left_i = c('i'); arr_left_i.classList.add('fas', 'fa-chevron-left');
    let arr_left = c('div'); arr_left.classList.add('arr_left'); arr_left.append(arr_left_i);

    let monthBtn = c('button'); monthBtn.textContent = 'may';
    let yearBtn = c('button'); yearBtn.textContent = '2020';
    let m_and_y = c('div'); m_and_y.append(monthBtn, yearBtn);

    let arr_right_i = c('i'); arr_right_i.classList.add('fas', 'fa-chevron-right');
    let arr_right = c('div'); arr_right.classList.add('arr_right'); arr_right.append(arr_right_i);

    let holder = c('div'); holder.classList.add('clhead'); holder.append(arr_left, m_and_y, arr_right);

    return holder;
}


let clweeks = () => {
    
    let weeks = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    let holder = c('div'); holder.classList.add('clweeks');

    weeks.forEach(week => {
        let cell = c('div');
        cell.textContent = week;

        holder.append(cell);
    });

    return holder;
}


let cldays = (month, year) => {

    let holder = c('div'); holder.classList.add('cldays');

    let day = 0;

    let date = 1;

    let selectedDate = new Date(year, month, date);

    while (selectedDate.getMonth() == month) {

        if (selectedDate.getDay() != day) {
            console.log('selectedDate.getDay(): ' + selectedDate.getDay());
            console.log('Day not: ' + day);
            day++;
        }
        else {
            
            let cell = c('div');
            cell.textContent = date;

            
            console.log('New Year ' + year);
            console.log('New Month ' + month);
            console.log('New Date ' + date);

            if (date == 1) {
                console.log('First Day: ' + day);
                cell.style.gridColumn = (day + 1) + '/' + (day + 2);
            }
    
            holder.append(cell);

            if (day == 6) {
                day = 0;
            }
            else {
                day++;
            }

            date++;

            selectedDate = new Date(year, month, date);
        }
    }

    return holder;
}


let clmonths = () => {
    
    let weeks = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    let holder = c('div'); holder.classList.add('clweeks');

    weeks.forEach(week => {
        let cell = c(div);
        cell.textContent = week;

        holder.append(cell);
    });

    return holder;
}


let clyears = () => {
    
    let weeks = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    let holder = c('div'); holder.classList.add('clweeks');

    weeks.forEach(week => {
        let cell = c(div);
        cell.textContent = week;

        holder.append(cell);
    });

    return holder;
}










// $('#month').value = now.getMonth();

// $('#year').value = now.getFullYear();

// var myDate = new Date($('#year').value, $('#month').value);
// var showDate = new Date($('#year').value, $('#month').value);

// function orderCalender() {

//     myDate = new Date($('#year').value, $('#month').value);
//     showDate = new Date($('#year').value, $('#month').value);

//     $('#wk1').innerHTML = '';
//     $('#wk2').innerHTML = '';
//     $('#wk3').innerHTML = '';
//     $('#wk4').innerHTML = '';
//     $('#wk5').innerHTML = '';
//     $('#wk6').innerHTML = '';

//     var i;
//     var day = 1 - myDate.getDay();

//     for (i = 1; i <= 6; i++) {

//         var dcount = 7;

//         while (dcount > 0) {

//         var newDate = new Date(myDate.getFullYear(), myDate.getMonth(), day);

//         if (myDate.getMonth() != newDate.getMonth()) {
//             $('#wk' + i).innerHTML = $('#wk' + i).innerHTML + '<td id="d' + newDate.getFullYear() + '' + newDate.getMonth() + '' + newDate.getDate() + '" class="disabled"><span>' + newDate.getDate() + '</span></td>';
//         }
//         else {
//             $('#wk' + i).innerHTML = $('#wk' + i).innerHTML + '<td id="d' + newDate.getFullYear() + '' + newDate.getMonth() + '' + newDate.getDate() + '" class="" onclick="$(\'#day\').value=\'' + newDate.getDate() + '\'; selectDate()"><span>' + newDate.getDate() + '</span></td>';
//         }

//         var dcount = dcount - 1;
//         var day = day + 1;
//         }
//     }

//     return addEvent();
// }

// function addEvent() {

//     var eventDate;

//     eventDates.forEach(function (eventInfo){
//         eventDate = new Date(eventInfo[0], eventInfo[1]-1, eventInfo[2]);
//         var id = eventDate.getFullYear() + '' + eventDate.getMonth() + '' + eventDate.getDate();

//         if (showDate.getFullYear() == eventDate.getFullYear() && showDate.getMonth() == eventDate.getMonth()) {
//             $('#d' + id).className = 'active';
//             $('#d' + id).setAttribute("title", eventInfo[3]);
//         }
//         else {
//         }
//     });
    
// }

// orderCalender();

// $('#month').addEventListener("change", function(){
//     return orderCalender();
// });

// $('#year').addEventListener("change", function(){
//     return orderCalender();
// });

// $('.calender #prev').addEventListener("click", function(){
//     if ($('#month').value == '0') {
//         $('#month').value = '11';
//         $('#year').value = $('#year').value * 1 - 1;
//     }
//     else {
//         $('#month').value = $('#month').value * 1 - 1;
//     }
//     return orderCalender();
// });

// $('.calender #next').addEventListener("click", function(){
//     if ($('#month').value == '11') {
//         $('#month').value = '0';
//         $('#year').value = $('#year').value * 1 + 1;
//     }
//     else {
//         $('#month').value = $('#month').value * 1 + 1;
//     }
//     return orderCalender();
// });



// var bookingDate = $('#bookingDate');
// var year = $('#year');
// var month = $('#month');
// var day = $('#day');
// var calender = $(".calender");

// calender.style.display = "none";

// bookingDate.addEventListener('click', function () {
//     calender.className = "calender pick-date";
//     bookingDate.style.display = "none";
// });

// function closeCalender() {
//     calender.className = "calender";
//     bookingDate.style.display = "block";
// };

// $('#day').onchange = function () {
//     // alert('I got here');
//     bookingDate.value = year.value + "-" + (month.value + 1) + "-" + day.value;
// };

// function selectDate() {

//     bookingDate.value = year.value + '-' + ('0' + (month.value * 1 + 1)).slice(-2) + '-' + ('0' + day.value).slice(-2);

//     closeCalender()
// }