var hh = 0;
var mn = 0;
var ss = 0;

now = new Date;
var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

var month = new Array();
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";

var temp = 1; //1hr em milesimos
var cronometro;

function start() {
    cronometro = setInterval(() => { timer(); }, temp);
}

function breaks() {
    clearInterval(cronometro);
}

function stop() {
    clearInterval(cronometro);
    hh = 0;
    mn = 0;
    ss = 0;
    document.getElementById('counter').innerText = '00:00:00';
}

function timer() {
    ss++;
    if (ss == 60) {
        ss = 0;
        mn++;
        if (mn == 60) {
            mn = 0;
            hh++;
        }
    }
    var format = (hh < 10 ? '0' + hh : hh) + ':' + (mn < 10 ? '0' + mn : mn) + ':' + (ss < 10 ? '0' + ss : ss);

    document.getElementById('counter').innerText = format;
    return format
}

document.getElementById('date').innerText = ("Today is " + weekday[now.getDay()] + ", " + now.getDate() + " of " + month[now.getMonth()] + " in " + now.getFullYear())
