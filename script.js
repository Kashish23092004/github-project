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
const slides = document.querySelectorAll('.testimonial-slide');
const dots = document.querySelectorAll('.dot');
let current = 0;
let interval = null;

function showSlide(idx) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === idx);
    dots[i].classList.toggle('active', i === idx);
  });
  current = idx;
}

function nextSlide() {
  let idx = current + 1;
  if(idx >= slides.length) idx = 0;
  showSlide(idx);
}

dots.forEach((dot, i) => {
  dot.addEventListener('click', () => {
    clearInterval(interval);
    showSlide(i);
    startAuto();
  })
});

function startAuto() {
  interval = setInterval(nextSlide, 5000);
}
showSlide(0);
startAuto();