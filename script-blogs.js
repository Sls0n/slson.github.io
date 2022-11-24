'use strict';

// Selectors
const main = document.querySelector('.blogs-text');
const header = document.querySelector('.header');
// const navHeight = header.getBoundingClientRect().height + 40;
const stars = document.querySelector('.stars-box');
const starsChildren = Array.from(stars.children);

// Star Toggle
document.querySelector('.header__icon').addEventListener('click', function (e) {
  if (e.target.classList.contains('header--icon')) {
    stars.classList.toggle('none');
  }
});

// Sticky Navigation Implementation
// const stickyNav = function (entries) {
//   const [entry] = entries;
//   if (!entry.isIntersecting) {
//     header.classList.add('header__sticky');
//   } else {
//     header.classList.remove('header__sticky');
//   }
// };

// const mainObserver = new IntersectionObserver(stickyNav, {
//   root: null,
//   threshold: 0,
//   rootMargin: `${navHeight}px`
// });

// mainObserver.observe(main);
