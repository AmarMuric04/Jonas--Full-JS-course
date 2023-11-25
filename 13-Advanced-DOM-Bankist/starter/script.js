'use strict';

///////////////////////////////////////
// Modal window
const btnScrollTo = document.querySelector('.btn--scroll-to');
const sectionOne = document.querySelector('#section--1');
const navLinks = document.querySelector('.nav__links');
const tabsContent = document.querySelectorAll('.operations__content');
const tabs = document.querySelectorAll('.operations__tab');
const nav = document.querySelector('.nav');
const tabsContainer = document.querySelector('.operations__tab-container');

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach((e, i) => {
  btnsOpenModal[i].addEventListener('click', openModal);
});
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

btnScrollTo.addEventListener('click', function (e) {
  const s1coords = sectionOne.getBoundingClientRect();
  console.log(s1coords);

  console.log(e.target.getBoundingClientRect());

  console.log('Current scroll X and Y', window.pageXOffset, window.pageYOffset);

  console.log(
    'height/width of viewport',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  //SCROLLING

  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset
  // );

  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });

  sectionOne.scrollIntoView({ behavior: 'smooth' });
});

//page navigation
// document.querySelectorAll('.nav__link').forEach(function (e) {
//   e.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     console.log(id);

//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });

//1. Add event listener to a common parent element
//2. Determine what element originated the event

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();

  //matching strategy
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');

    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

//tabbed component

tabsContainer.addEventListener('click', function (el) {
  const clicked = el.target.closest('.operations__tab');

  //guard clause
  if (!clicked) return;

  if (clicked.classList.contains('operations__tab--active')) {
    /*If button has active class, we remove the active class from every button
    and we remove all the tab contents from the page*/
    tabs.forEach(e => e.classList.remove('operations__tab--active'));

    tabsContent.forEach(el =>
      el.classList.remove('operations__content--active')
    );
  } else {
    /*if the button does not have an active class, we toggle the class, adding it with the first
    click.*/
    tabs.forEach(e => e.classList.remove('operations__tab--active'));
    clicked.classList.toggle('operations__tab--active');

    tabsContent.forEach(el =>
      el.classList.remove('operations__content--active')
    );
    document
      .querySelector(`.operations__content--${clicked.dataset.tab}`)
      .classList.toggle('operations__content--active');
  }
});

//menu fade animation
const handleHover = function (el) {
  if (el.target.classList.contains('nav__link')) {
    const link = el.target;
    //theres no child elements inside nav__links thats why we didnt use closest
    const siblings = link.closest('.nav__links').querySelectorAll('.nav__link');

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    // const logo = link.closest('.nav').querySelector('img');
  }
};

//passing an argument into handler
navLinks.addEventListener('mouseover', handleHover.bind(0.5));

navLinks.addEventListener('mouseout', handleHover.bind(1));

const initialCoords = sectionOne.getBoundingClientRect();
console.log(initialCoords);

//sticky navigation
window.addEventListener('scroll', function () {
  if (window.scrollY > initialCoords.top) {
    nav.classList.add('sticky');
  } else nav.classList.remove('sticky');
});
// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);

// const header = document.querySelector('.header');
// const allSection = document.querySelectorAll('.section');

// console.log(allSection);

// document.getElementById('section--1');
// const allButtons = document.getElementsByTagName('button');

// console.log(allButtons);

// console.log(document.getElementsByClassName('btn'));

// //creating and inserting elements
// // .insertAdjecentHTML

// const message = document.createElement('div');
// message.classList.add('cookie-message');
// // message.textContent = 'We use cookies for improved functionality and analytics'

// message.innerHTML =
//   'We use cookies for improved functionality and analytics <button class="btn btn--close-cookie">Got it!</button>';

// header.append(message);
// // header.prepend(message);
// // header.append(message.cloneNode(true));

// // header.before(message);
// // header.after(message);

// //delete elements
// document
//   .querySelector('.btn--close-cookie')
//   .addEventListener('click', function () {
//     message.remove();
//     // message.parentElement.removeChild(message);
//   });

// //styles
// message.style.backgroundColor = '#37383d';
// // message.style.width = '103%';

// console.log(message.style.height);
// console.log(message.style.width);
// console.log(message.style.backgroundColor);

// console.log(getComputedStyle(message).width);

// message.style.height =
//   Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

// // document.documentElement.style.setProperty('--color-primary', 'orangered');

// //attributes
// const logo = document.querySelector('.nav__logo');
// console.log(logo.src);
// console.log(logo.alt);
// console.log(logo.className);

// logo.alt = 'Beautiful minimalist logo';

// //non standard attribute
// console.log(logo.designer);
// console.log(logo.getAttribute('Designer'));
// logo.setAttribute('company', 'Bankist');

// console.log(logo.src);
// console.log(logo.getAttribute('src'));

// const link = document.querySelector('.nav__link--btn');
// console.log(link.href);
// console.log(link.getAttribute('href'));

// //data attributes
// console.log(logo.dataset.versionNumber);

// //classes
// logo.classList.add('c', 'a', 'b');
// logo.classList.remove('c');
// logo.classList.toggle('c');
// logo.classList.contains('c');

// // don't use (overrides all the other classes)
// logo.className = 'jonas';

// // const btnScrollTo = document.querySelector('.btn--scroll-to');
// // const sectionOne = document.querySelector('#section--1');

// btnScrollTo.addEventListener('click', function (e) {
//   const s1coords = sectionOne.getBoundingClientRect();
//   console.log(s1coords);

//   console.log(e.target.getBoundingClientRect());

//   console.log('Current scroll X and Y', window.pageXOffset, window.pageYOffset);

//   console.log(
//     'height/width of viewport',
//     document.documentElement.clientHeight,
//     document.documentElement.clientWidth
//   );

//   //SCROLLING

//   // window.scrollTo(
//   //   s1coords.left + window.pageXOffset,
//   //   s1coords.top + window.pageYOffset
//   // );

//   // window.scrollTo({
//   //   left: s1coords.left + window.pageXOffset,
//   //   top: s1coords.top + window.pageYOffset,
//   //   behavior: 'smooth',
//   // });

//   sectionOne.scrollIntoView({ behavior: 'smooth' });
// });

const h1 = document.querySelector('h1');

// const alertH1 = function () {
//   alert('addEventListener: Great! You are reading the heading :D');

//   // h1.removeEventListener('mouseenter', alertH1);
// };

// h1.addEventListener('mouseenter', alertH1);

// setTimeout(() => {
//   h1.removeEventListener('mouseenter', alertH1);
// }, 3000);

// // h1.onmouseenter = function () {
// // alert('onmouseenter: Great! You are reading the heading :D');
// // };

// //removing eventlisteners

// // rgb(255,255,255)
// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min + 1) + min);

// const randomColor = () =>
//   `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

// document.querySelector('.nav__link').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('LINK', e.target, e.currentTarget);
//   console.log(this === e.target);

//   //stop propagation
//   // e.stopPropagation();
// });

// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('LINKS', e.target, e.currentTarget);
// });

// document.querySelector('.nav').addEventListener(
//   'click',
//   function (e) {
//     this.style.backgroundColor = randomColor();
//     console.log('NAV', e.target, e.currentTarget);
//   },
//   true
// );

// const h1 = document.querySelector('h1');
// const h4 = document.querySelector('h4');

// //goingdonwards: child

// console.log(h1.querySelectorAll('.highlight'));
// console.log(h1.childNodes);
// console.log(h1.children); //only direct children

h1.firstElementChild.style.color = 'white';
h1.lastElementChild.style.color = 'white';

// console.log(h1.firstElementChild);
// console.log(h1.lastElementChild);
// console.log(h1.firstChild);
// console.log(document.querySelector('.nav').firstChild);

// //going upwards
// console.log(h1.parentElement);
// console.log(h1.parentNode);

// h1.closest('.header').style.background = 'var(--gradient-secondary)';
// h1.closest('h1').style.background = 'var(--gradient-primary)';

// //going sideways / siblings
// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);

// console.log(h1.nextSibling);
// console.log(h1.previousSibling);

// console.log(h1.parentElement.children);

// [...h1.parentElement.children].forEach(function (el) {
//   if (el !== h1) el.style.transform = 'scale(0.5)';
// });

// h1.closest('h1').style.transform = 'rotate(-05deg)';

// h1.lastElementChild.style.color = 'green';

//tabbed component
