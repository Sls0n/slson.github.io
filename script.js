'use strict';

// Selectors
const main = document.querySelector('.main');
const header = document.querySelector('.header');
const navHeight = header.getBoundingClientRect().height;

const stars = document.querySelector('.stars-box');

const skillsBtn = document.querySelector('.main__btn1');
const skillsSection = document.querySelector('#skills');

const starsChildren = Array.from(stars.children);

const allSections = document.querySelectorAll('.main-section');

const skillper = document.querySelectorAll('.skill-per');

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
    // header.classList.add('header__transform');
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

// Reveal on scroll
const revealSection = function (entries, observer) {
  const [entry] = entries;

  skillper.forEach(function (i) {
    const arrayDup = ['skill-per'];
    i.classList.remove(arrayDup);

    // Width Animation Of Skills
    if (!entry.isIntersecting) return;
    i.classList.add('skill-per');
    entry.target.classList.remove('scroll-reveal');
    observer.unobserve(entry.target);
  });

  if (!entry.isIntersecting) return;
  entry.target.classList.remove('scroll-reveal');
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.2
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add('scroll-reveal');
});
