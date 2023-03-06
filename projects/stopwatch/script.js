const display = document.querySelector('.display');
const startButton = document.querySelector('.start');
const stopButton = document.querySelector('.stop');
const resetButton = document.querySelector('.reset');
const timerList = document.querySelector('.timer-list');
const newTimerInput = document.querySelector('.new-timer-input');
const addTimerButton = document.querySelector('.add-timer-button');
const darkModeButton = document.querySelector('.dark-mode-button');

let startTime;
let timerIntervalId;
let timers = [];

function formatTime(time) {
  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time - (hours * 3600)) / 60);
  const seconds = time - (hours * 3600) - (minutes * 60);

  const formattedHours = hours.toString().padStart(2, '0');
  const formattedMinutes = minutes.toString().padStart(2, '0');
  const formattedSeconds = seconds.toString().padStart(2, '0');

  return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}

function startTimer() {
  startTime = Date.now();

  timerIntervalId = setInterval(() => {
    const elapsedTime = Math.floor((Date.now() - startTime) / 1000);
    display.textContent = formatTime(elapsedTime);
    document.title = display.textContent;
  }, 1000);
}

function stopTimer() {
  clearInterval(timerIntervalId);
}

function resetTimer() {
  clearInterval(timerIntervalId);
  display.textContent = '00:00:00';
}

function addTimer(name) {
  const timer = {
    name,
    time: 0,
    intervalId: null,
  };

  timers.push(timer);

  const li = document.createElement('li');
  li.classList.add('timer');

  const nameSpan = document.createElement('span');
  nameSpan.classList.add('timer-name');
  nameSpan.textContent = name;

  const timeSpan = document.createElement('span');
  timeSpan.classList.add('timer-time');
  timeSpan.textContent = '00:00:00';

  const startButton = document.createElement('button');
  startButton.textContent = 'Start';

  const stopButton = document.createElement('button');
  stopButton.textContent = 'Stop';

  const resetButton = document.createElement('button');
  resetButton.textContent = 'Reset';

  li.appendChild(nameSpan);
  li.appendChild(timeSpan);
  li.appendChild(startButton);
  li.appendChild(stopButton);
  li.appendChild(resetButton);

  timerList.appendChild(li);

  startButton.addEventListener('click', () => {
    timer.intervalId = setInterval(() => {
      timer.time++;
      timeSpan.textContent = formatTime(timer.time);
    }, 1000);
  });

  stopButton.addEventListener('click', () => {
    clearInterval(timer.intervalId);
  });

  resetButton.addEventListener('click', () => {
   timer.time = 0;
timeSpan.textContent = '00:00:00';
});
}

function addNewTimer() {
  const name = newTimerInput.value.trim();

  if (!name) {
    return;
  }

  addTimer(name);
  newTimerInput.value = '';
}

function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
}

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);
addTimerButton.addEventListener('click', addNewTimer);
darkModeButton.addEventListener('click', toggleDarkMode);
