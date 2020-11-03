window.addEventListener("load", function(){
    loadConfig();
});

function loadConfig() {
    if (localStorage.getItem('timer')) {
        let timer = localStorage.getItem('timer');
        document.getElementById(timer).classList.add("btn-primary");
    } else {
        localStorage.setItem('timer', '20');
        loadConfig();
    }
}

function setTime(time) {
    let timer = localStorage.getItem('timer');
    document.getElementById(timer).classList.remove("btn-primary");
    localStorage.setItem('timer', time);
    loadConfig();
}

function startTimer() {
    let timer = localStorage.getItem('timer');

    startTimer();

    var timerInterval = setInterval(function() {
        clearInterval(timerInterval);
        startReminder();
    }, (timer*60000));
}

function startReminder() {
    var win = window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank');
    win.focus();
}

function startTimer() {
    document.getElementById('timerButton').style.visibility = 'hidden';
    var minute = (localStorage.getItem('timer')-1);
    var sec = 60;
    var intervalToShowCounter = setInterval(function() {
      document.getElementById("timer").innerHTML = minute + " : " + sec;
      sec--;
      if (sec == 00) {
        minute --;
        sec = 60;
        if (minute == 0) {
            document.getElementById("timer").innerHTML = "";
            document.getElementById('timerButton').style.visibility = 'visible';
            startTimer();
            clearInterval(intervalToShowCounter);
        }
      }
    }, 1000);
}