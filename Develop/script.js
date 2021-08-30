var inputEl = document.getElementsByTagName('input');

//To display current date in the header
var now = moment().format('MMMM Do YYYY');
var currentDateEl = document.getElementById('currentDay');
currentDateEl.textContent = now;

//Function to check the hour and change color accordingly
function checkHour() {

    //Find hour to set colors
    var timeCheck = moment().hour();

    //For loop to check each index against the current hour
    for (i = 0; i < 9; i++) {

        var id = i.toString();
        var idCheck = document.getElementById(id);
        //add 9 to i to reflect written time on the schedule
        var scheduleTime = i + 9;

        //Add 9 to i to reflect written time on the schedule
        if (timeCheck > (scheduleTime)) {
            idCheck.setAttribute('style', 'background-color:grey;');
        } else if (timeCheck === (i + 9)) {
            idCheck.setAttribute('style', 'background-color:green;');
        } else {
            idCheck.setAttribute('style', 'background-color:#17a2b8;');
        }
    }
}

//check for each hour
function eachHour() {
    var minutesLeft = moment().format('mm');
    var timeLeft = (60 - minutesLeft) * 1000;
    setTimeout(setInterval(checkHour, (1000 * 60 * 60)), timeLeft);
}

//save tasks to local storage
function saveTask(id) {
    var savedTaskValue = document.getElementById(id).value.trim();
    localStorage.setItem(id, savedTaskValue);
}

//write tasks to placeholder text in order to persist
function writeTask() {
    for(i = 0; i < inputEl.length; i++) {
        var idNum = i.toString() + 'Text';
        var goals = localStorage.getItem(idNum);
        if (goals === null) {
            goals = "";
        }
        inputEl[i].setAttribute('placeholder', goals);
    }
}


checkHour();

eachHour();

writeTask();