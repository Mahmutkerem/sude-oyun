const loveBox = document.getElementById('loveBox');
const card = document.getElementById('card');
const closeBtn = document.getElementById('closeBtn');
const gitBox = document.getElementById('gitBox');

function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.innerText = Math.random() < 0.5 ? '❤️' : '💜';
  heart.style.left = Math.random() * window.innerWidth + 'px';
  heart.style.top = '-30px';
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 3000);
}

loveBox.addEventListener('click', () => {
  card.classList.remove('hidden');
  for (let i = 0; i < 20; i++) {
    createHeart();
  }
});

closeBtn.addEventListener('click', () => {
  card.classList.add('hidden');
});

function kacGitBox() {
  const boxWidth = gitBox.offsetWidth;
  const boxHeight = gitBox.offsetHeight;
  const padding = 10;

  const maxX = window.innerWidth - boxWidth - padding;
  const maxY = window.innerHeight - boxHeight - padding;
  const minX = padding;
  const minY = padding;

  const randomX = Math.random() * (maxX - minX) + minX;
  const randomY = Math.random() * (maxY - minY) + minY;

  // gitBox position absolute yapılmalı kaçması için
  gitBox.style.position = 'fixed';
  gitBox.style.left = `${randomX}px`;
  gitBox.style.top = `${randomY}px`;
}

gitBox.addEventListener('mouseenter', kacGitBox);
gitBox.addEventListener('touchstart', (e) => {
  e.preventDefault();
  kacGitBox();
});
