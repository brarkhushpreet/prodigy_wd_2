let [minutes, seconds, centisecs] = [0, 0, 0];
let displayTime = document.getElementById("displayTime");
let timer = null;
let lapCount = 1;

let isRunning = false; //to track whether it's running or not

function stopwatch() {
    centisecs++;
    if (centisecs == 100) {
        centisecs = 0;
        seconds++;
        if (seconds == 60) {
            seconds = 0;
            minutes++;
        }
    }
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let c = centisecs < 10 ? "0" + centisecs : centisecs;
    displayTime.innerHTML = m + ":" + s + ":" + c;
}

function watchStart() {
    if (isRunning) {  //watch pause
        clearInterval(timer);
        document.getElementById("startBtn").src = "images/start.png"; //change to start image

    } else {
        if (timer !== null) {    //watch start
            clearInterval(timer);
        }
        timer = setInterval(stopwatch, 10);
        document.getElementById("startBtn").src = "images/pause.png"; //change to pause image
    }
    isRunning = !isRunning; //change state of running
}

function watchReset() {
    clearInterval(timer);
    [minutes, seconds, centisecs] = [0, 0, 0];
    displayTime.innerHTML = "00:00:00";
    lapCount = 1;
    document.getElementById("lapsContainer").innerHTML = "";
    document.getElementById("lapCount").innerText = "Laps:";

}

function watchLap() {
    let lapTime = displayTime.innerHTML;
    let lapContainer = document.getElementById("lapsContainer");
    let lapParagraph = document.createElement("p");
    lapParagraph.innerText = "Lap " + lapCount + ": " + lapTime;
    lapContainer.appendChild(lapParagraph);
    lapCount++;
}