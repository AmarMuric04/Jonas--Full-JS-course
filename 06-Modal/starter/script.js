'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsShowModal = document.querySelectorAll('.show-modal');
btnsShowModal.forEach(button => {
  button.addEventListener('click', () => {
    removeClassHidden();
    modal.innerHTML = `<button class="close-modal">&times;</button>
      <h1>I'm a modal window 😍</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>`;

    document
      .querySelector('.close-modal')
      .addEventListener('click', addClassHidden);
    document.body.addEventListener('keydown', event => {
      if (event.key === 'Escape') {
        addClassHidden();
      }
    });
  });
});
const addClassHidden = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
function removeClassHidden() {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}
