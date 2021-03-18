window.onload = () => {
  const block3 = document.getElementById('block3');
  block3.addEventListener('click', () => {
    block3.classList.add('jump-up');
    setTimeout(() => {
      block3.classList.remove('jump-up');
    }, 3000);
  });

  const block2 = document.getElementById('block2');
  const block2Song = document.getElementById('block2-song');
  let audioOn = false;
  block2.onclick = () => {
    if (audioOn) {
      block2Song.pause();
    } else {
      block2Song.play();
    }
    audioOn = !audioOn;
  }
}