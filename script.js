const track = document.getElementById('packageTrack');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
let index = 0;

function step() {
  const card = track.querySelector('.package-card');
  const gap = 22;
  return card ? card.getBoundingClientRect().width + gap : 0;
}
function visible() {
  return window.innerWidth <= 650 ? 1 : window.innerWidth <= 900 ? 2 : 3;
}
function maxIndex() {
  return Math.max(0, track.children.length - visible());
}
function move() {
  index = Math.min(Math.max(index, 0), maxIndex());
  track.style.transform = `translateX(-${index * step()}px)`;
}
next.addEventListener('click', () => { index++; move(); });
prev.addEventListener('click', () => { index--; move(); });
window.addEventListener('resize', () => { index = Math.min(index, maxIndex()); move(); });

document.querySelector('.menu').addEventListener('click', () => {
  const nav = document.querySelector('nav');
  const open = nav.style.display === 'flex';
  nav.style.display = open ? '' : 'flex';
  if (!open) {
    nav.style.position = 'absolute';
    nav.style.top = '70px';
    nav.style.left = '0';
    nav.style.right = '0';
    nav.style.padding = '18px';
    nav.style.background = '#fff';
    nav.style.flexDirection = 'column';
    nav.style.boxShadow = '0 15px 30px rgba(0,0,0,.1)';
  }
});
