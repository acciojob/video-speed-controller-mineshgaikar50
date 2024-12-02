// Get DOM elements
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const toggle = player.querySelector('.toggle');
const progress = player.querySelector('.progress');
const progressFilled = player.querySelector('.progress__filled');
const volume = player.querySelector('.volume');
const playbackSpeed = player.querySelector('.playbackSpeed');
const skipButtons = player.querySelectorAll('.skip');

// Toggle Play/Pause
function togglePlay() {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

// Update the Play/Pause button
function updateToggleButton() {
    toggle.textContent = video.paused ? '►' : '❚ ❚';
}

// Update progress bar
function updateProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progress.value = percent;
    progressFilled.style.width = `${percent}%`;
}

// Set video progress
function setProgress(e) {
    const newTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = newTime;
}

// Change volume
function changeVolume() {
    video.volume = this.value;
}

// Change playback speed
function changePlaybackSpeed() {
    video.playbackRate = this.value;
}

// Skip video
function skip() {
    video.currentTime += parseFloat(this.dataset.skip);
}

// Event Listeners
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateToggleButton);
video.addEventListener('pause', updateToggleButton);
video.addEventListener('timeupdate', updateProgress);

toggle.addEventListener('click', togglePlay);

progress.addEventListener('click', setProgress);

volume.addEventListener('input', changeVolume);
playbackSpeed.addEventListener('input', changePlaybackSpeed);

skipButtons.forEach(button => button.addEventListener('click', skip));
