let minutes = 0;
let seconds = 0;
let milliseconds = 0;

let timer = false;
let interval;
let lapCounter = 0;

// Time Display

const minutesDisplay = document.getElementById("minutes");
const secondsDisplay = document.getElementById("seconds");
const millisecondsDisplay = document.getElementById("milliseconds");

// Buttons

const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const resetBtn = document.getElementById("resetBtn");
const lapBtn = document.getElementById("lapBtn");

// Lap Elements

const lapList = document.getElementById("lapList");
const lapCount = document.getElementById("lapCount");

// ================= START =================

startBtn.addEventListener("click", () => {

  if(!timer){

    timer = true;

    interval = setInterval(runStopwatch, 10);

    startBtn.innerText = "Running...";
  }

});

// ================= PAUSE =================

pauseBtn.addEventListener("click", () => {

  timer = false;

  clearInterval(interval);

  startBtn.innerText = "Resume";

});

// ================= RESET =================

resetBtn.addEventListener("click", () => {

  timer = false;

  clearInterval(interval);

  minutes = 0;
  seconds = 0;
  milliseconds = 0;

  lapCounter = 0;

  updateDisplay();

  lapList.innerHTML = "";

  lapCount.innerText = "0 Laps";

  startBtn.innerText = "Start";

});

// ================= LAP =================

lapBtn.addEventListener("click", () => {

  if(timer){

    lapCounter++;

    lapCount.innerText = `${lapCounter} Laps`;

    const li = document.createElement("li");

    li.innerHTML = `
      <span>Lap ${lapCounter}</span>
      <strong>
        ${formatTime(minutes)} :
        ${formatTime(seconds)} :
        ${formatTime(milliseconds)}
      </strong>
    `;

    lapList.prepend(li);

  }

});

// ================= TIMER =================

function runStopwatch(){

  milliseconds++;

  if(milliseconds === 100){

    milliseconds = 0;
    seconds++;

  }

  if(seconds === 60){

    seconds = 0;
    minutes++;

  }

  updateDisplay();

}

// ================= UPDATE DISPLAY =================

function updateDisplay(){

  minutesDisplay.innerText = formatTime(minutes);

  secondsDisplay.innerText = formatTime(seconds);

  millisecondsDisplay.innerText = formatTime(milliseconds);

}

// ================= FORMAT =================

function formatTime(time){

  return time < 10 ? `0${time}` : time;

}