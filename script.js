document.querySelector('.staricon').addEventListener('click', function () {
  let stars = document.querySelector('#stars');
  let stars3 = document.querySelector('#stars3');
  document.querySelector('#stars3');
  if (
    stars.style.visibility === 'hidden' &&
    stars3.style.visibility === 'hidden'
    // For the toggle thing!
  ) {
    stars.style.visibility = 'visible';
    stars3.style.visibility = 'visible';
  } else {
    stars.style.visibility = 'hidden';
    stars3.style.visibility = 'hidden';
  }
});
