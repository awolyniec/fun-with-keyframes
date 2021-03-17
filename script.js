window.onload = () => {
  const block3 = document.getElementById('block3');
  block3.addEventListener('click', () => {
    block3.classList.add('jump-up');
    setTimeout(() => {
      block3.classList.remove('jump-up');
    }, 3000);
  });
}