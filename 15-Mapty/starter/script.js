'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

let map, mapEvent;

navigator.geolocation.getCurrentPosition(
  function (position) {
    const { latitude } = position.coords;
    const { longitude } = position.coords;
    console.log(`https://www.google.pt/maps/@${latitude},${longitude}`);

    const coords = [latitude, longitude];

    map = L.map('map').setView(coords, 13);

    L.tileLayer('https://tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    //Handling clicks on map
    map.on('click', showMarker);
  },

  function () {
    alert('Could not get your position.');
  }
);
function showMarker(mapE) {
  mapEvent = mapE;
  form.classList.remove('hidden');
  inputDistance.focus();
  console.log(1);
  map.removeEventListener('click', showMarker);
}
form.addEventListener('submit', function (e) {
  e.preventDefault();

  if (
    inputCadence.value === '' ||
    inputDistance.value === '' ||
    inputDuration.value === ''
  )
    return;
  //clear input fields
  inputCadence.value =
    inputDistance.value =
    inputDuration.value =
    inputElevation.value =
      '';

  console.log(mapEvent);
  //Display marker
  const { lat, lng } = mapEvent.latlng;
  L.marker([lat, lng])
    .addTo(map)
    .bindPopup(
      L.popup({
        maxWidth: 250,
        minWidth: 100,
        autoClose: false,
        closeOnClick: false,
        className: 'running-popup',
      })
    )
    .setPopupContent(
      `Workout ${months[new Date().getMonth()]} ${String(
        new Date().getDate()
      ).padStart(2, 0)}`
    )
    .openPopup();
  map.on('click', showMarker);
});

inputType.addEventListener('change', function () {
  inputElevation.closest('div').classList.toggle('form__row--hidden');
  inputCadence.closest('div').classList.toggle('form__row--hidden');
});
