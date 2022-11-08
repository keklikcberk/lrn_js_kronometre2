let timerText = document.querySelector("#timertext");
let startButton = document.querySelector("#start-btn");
let stopButton = document.querySelector("#stop-btn");
let resetButton = document.querySelector("#reset-btn");
let interval = null;
isWorking = false;
forButtonDisable();




startButton.addEventListener("click", startBtnActive);

function startBtnActive() {
  interval= setInterval(timeStart, 100);
  isWorking = true;
  forButtonDisable();
    
}

function timeStart() {
    timerText.innerHTML = Number(timerText.innerHTML) +1;
}



stopButton.addEventListener("click", stopBtnActive);

function stopBtnActive() {
    clearInterval(interval);
    isWorking = false;
    forButtonDisable();
}


resetButton.addEventListener("click", resetBtnActive);

function resetBtnActive() {
    stopBtnActive()
    timerText.innerHTML = 0;
    
    forButtonDisable();
    
}


function forButtonDisable() {
    if (isWorking === false) {
        stopButton.disabled = true;
        startButton.disabled = false;
    }
    else{
        startButton.disabled = true;
        stopButton.disabled = false;
    }
}