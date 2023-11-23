'use strict';

///////////////////////////////////////
// Modal window

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

console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header');
const allSection = document.querySelectorAll('.section');

console.log(allSection);

document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button');

console.log(allButtons);

console.log(document.getElementsByClassName('btn'));

//creating and inserting elements
// .insertAdjecentHTML

const message = document.createElement('div');
message.classList.add('cookie-message');
// message.textContent = 'We use cookies for improved functionality and analytics'

message.innerHTML =
  'We use cookies for improved functionality and analytics <button class="btn btn--close-cookie">Got it!</button>';

header.append(message);
// header.prepend(message);
// header.append(message.cloneNode(true));

// header.before(message);
// header.after(message);

//delete elements
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    message.remove();
    // message.parentElement.removeChild(message);
  });

//styles
message.style.backgroundColor = '#37383d';
message.style.width = '103%';

console.log(message.style.height);
console.log(message.style.width);
console.log(message.style.backgroundColor);

console.log(getComputedStyle(message).width);

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

document.documentElement.style.setProperty('--color-primary', 'orangered');

//attributes
const logo = document.querySelector('.nav__logo');
console.log(logo.src);
console.log(logo.alt);
console.log(logo.className);

logo.alt = 'Beautiful minimalist logo';

//non standard attribute
console.log(logo.designer);
console.log(logo.getAttribute('Designer'));
logo.setAttribute('company', 'Bankist');

console.log(logo.src);
console.log(logo.getAttribute('src'));

const link = document.querySelector('.nav__link--btn');
console.log(link.href);
console.log(link.getAttribute('href'));

//data attributes
console.log(logo.dataset.versionNumber);

//classes
logo.classList.add('c', 'a', 'b');
logo.classList.remove('c');
logo.classList.toggle('c');
logo.classList.contains('c');

// don't use (overrides all the other classes)
logo.className = 'jonas';

const btnScrollTo = document.querySelector('.btn--scroll-to');
const sectionOne = document.querySelector('#section--1');

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

  window.scrollTo({
    left: s1coords.left + window.pageXOffset,
    top: s1coords.top + window.pageYOffset,
    behavior: 'smooth',
  });
});
