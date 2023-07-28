const audio = new Audio('/Audio/audio2.mp3');
const playButton = document.getElementById('play');
const pauseButton = document.getElementById('pause');
const resetButton = document.getElementById('reset');
const progressBar = document.querySelector('.progress');

playButton.addEventListener('click', () => {
	audio.play();
  play.style.display = 'none';
  pause.style.display = 'inline-block';
});

pauseButton.addEventListener('click', () => {
	audio.pause();
  play.style.display = 'inline-block';
  pause.style.display = 'none';
});

resetButton.addEventListener('click', () => {
	audio.currentTime = 0;
	progressBar.style.width = '0%';
});

audio.addEventListener('timeupdate', () => {
	const currentTime = audio.currentTime;
	const duration = audio.duration;
	const progress = (currentTime / duration) * 100;
	progressBar.style.width = `${progress}%`;
});

function forward() {
    window.open("music3.html", "_self");
}

function rewind() {
    window.open("music1.html", "_self");
}

function back() {
    window.open("index.html", "_self");
}