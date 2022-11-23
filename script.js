'use strict';

// Selectors
const main = document.querySelector('.main');
const header = document.querySelector('.header');
const navHeight = header.getBoundingClientRect().height;

const stars = document.querySelector('.stars-box');

const skillsBtn = document.querySelector('.main__btn1');
const skillsSection = document.querySelector('#skills');

const starsChildren = Array.from(stars.children);

// Star Toggle
document.querySelector('.header__icon').addEventListener('click', function (e) {
  if (e.target.classList.contains('header--icon')) {
    stars.classList.toggle('none');
  }
});

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
  threshold: 0
  // rootMargin: '-20px'//`-${navHeight}px`
});

mainObserver.observe(main);
