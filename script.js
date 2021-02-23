var hh = 0;
var mn = 0;
var ss = 0;

var counterp1 = 1;
var counterp2 = 1;

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

var temp = 1000; //1hr em milesimos
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

function p1() {
    document.getElementById('counter-P1').innerText = counterp1++;
}

function p2() {
    document.getElementById('counter-P2').innerText = counterp2++;
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

// Set the date we're counting down to
var countDownDate = new Date("Jan 5, 2022 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    document.getElementById("counter-regressive").innerHTML = days + "d " + hours + "h " +
        minutes + "m " + seconds + "s ";

    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("counter-regressive").innerHTML = "EXPIRED";
    }
}, 1000);

document.getElementById('date').innerText = ("Today is " + weekday[now.getDay()] + ", " + now.getDate() + " of " + month[now.getMonth()] + " in " + now.getFullYear())

document.getElementById('hr').innerText = ("Now is " + now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds());
