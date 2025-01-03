const video = document.querySelector('video');
const playButton = document.createElement('button');
const rewindButton = document.createElement('button');
const forwardButton = document.createElement('button');
const volumeInput = document.createElement('input');
const playbackSpeedInput = document.createElement('input');
const progressBar = document.createElement('div');
const progressFilled = document.createElement('div');

// Add necessary attributes and classes
playButton.classList.add('player__button', 'toggle');

playButton.textContent = '►';

rewindButton.textContent = '« 10s';
rewindButton.classList.add('rewind');

forwardButton.textContent = '25s »';

volumeInput.type = 'range';
volumeInput.min = 0;
volumeInput.max = 1;
volumeInput.step = 0.05;
volumeInput.value = 1;

playbackSpeedInput.type = 'range';
playbackSpeedInput.min = 0.5;
playbackSpeedInput.max = 2;
playbackSpeedInput.step = 0.1;
playbackSpeedInput.value = 1;

progressBar.classList.add('progress');
progressFilled.classList.add('progress__filled');
progressFilled.style.width = '0%';
progressBar.appendChild(progressFilled);

document.body.querySelector('.wrapper').append(playButton, rewindButton, forwardButton, volumeInput, playbackSpeedInput, progressBar);

// Play and Pause functionality
function togglePlay() {
  if (video.paused) {
    video.play();
    playButton.textContent = '❚ ❚';
  } else {
    video.pause();
    playButton.textContent = '►';
  }
}

// Update progress bar
function updateProgressBar() {
  const percent = (video.currentTime / video.duration) * 100;
  progressFilled.style.width = ${percent}%;
}

// Scrub functionality
function scrub(event) {
  const scrubTime = (event.offsetX / progressBar.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

// Volume control
function handleVolumeChange() {
  video.volume = volumeInput.value;
}

// Playback speed control
function handleSpeedChange() {
  video.playbackRate = playbackSpeedInput.value;
}

// Rewind 10 seconds
function rewind() {
  video.currentTime = Math.max(0, video.currentTime - 10);
}

// Forward 25 seconds
function forward() {
  video.currentTime = Math.min(video.duration, video.currentTime + 25);
}

// Event listeners
playButton.addEventListener('click', togglePlay);
video.addEventListener('timeupdate', updateProgressBar);
progressBar.addEventListener('click', scrub);
volumeInput.addEventListener('input', handleVolumeChange);
playbackSpeedInput.addEventListener('input', handleSpeedChange);
rewindButton.addEventListener('click', rewind);
forwardButton.addEventListener('click', forward);

// Update video source
video.src = 'https://www.w3schools.com/html/mov_bbb.mp4'; 