const video = document.getElementById('heroVideo');
const container = document.getElementById('videoContainer');
const playOverlay = document.getElementById('videoPlayOverlay');

playOverlay.addEventListener('click', () => {
  if (video.paused) {
    video.play();
    container.classList.add('playing');
  }
});
video.addEventListener('click', () => {
  if (video.paused) {
    video.play();
    container.classList.add('playing');
  } else {
    video.pause();
    container.classList.remove('playing');
  }
});

video.addEventListener('play', () => container.classList.add('playing'));
video.addEventListener('pause', () => container.classList.remove('playing'));

if (!video.paused) {
  container.classList.add('playing');
}
