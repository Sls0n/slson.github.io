// Selectors

const main = document.querySelector('.main');
const header = document.querySelector('.header');
const navHeight = header.getBoundingClientRect().height;

// const starsBox = document.querySelector('.stars-box')
const stars = document.querySelector('.stars-box');

const skillsBtn = document.querySelector('.main__btn1');
const skillsSection = document.querySelector('#skills');

// console.log(Array.from(stars.children));

// Star Toggle

// document.querySelector('.staricon').addEventListener('click', function () {
//   let stars = document.querySelector('#stars');
//   let stars3 = document.querySelector('#stars3');
//   document.querySelector('#stars3');
//   // if (
//   //   stars.style.visibility === 'hidden' &&
//   //   stars3.style.visibility === 'hidden'
//   //   // For the toggle thing!
//   // ) {
//   //   stars.style.visibility = 'visible';
//   //   stars3.style.visibility = 'visible';
//   // } else {
//   //   stars.style.visibility = 'hidden';
//   //   stars3.style.visibility = 'hidden';
//   // }

// });

// Scroll

skillsBtn.addEventListener('click', function (e) {
  skillsSection.scrollIntoView({ behavior: 'smooth' });
});

// Sticky Navigation Implementation

const stickyNav = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) {
    header.classList.add('header__sticky');
  } else {
    header.classList.remove('header__sticky');
  }
};

const mainObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  // rootMargin: '-20px'//`-${navHeight}px`
});

mainObserver.observe(main);
