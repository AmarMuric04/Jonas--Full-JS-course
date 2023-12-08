'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
const input = document.querySelector('input');

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
};
///////////////////////////////////////

// https://countries-api-836d.onrender.com/countries/

// input.addEventListener('keydown', function (e) {
//   const country = input.value.trim();
//   if (e.key === 'Enter') {
//     getCountryAndNeighbor(country);
//     input.value = '';
//   }
// });

const renderCountry = function (data, className) {
  const html = `
  <article class="country ${className}">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
      <h3 class="country__name">${data.name}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(1)}M people</p>
      <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
      <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
    </div>
  </article>`;
  countriesContainer.insertAdjacentHTML('beforeend', html);
};

// const getCountryAndNeighbor = function (country) {
//   //AJAX call country 1
//   const request = new XMLHttpRequest();
//   request.open(
//     'GET',
//     `https://countries-api-836d.onrender.com/countries/name/${country}`
//   );
//   request.send();

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     // console.log(data);

//     //Render country one
//     renderCountry(data);

//     //get neighbor country
//     if (data.borders.length === 0) return;
//     const neighbor = data?.borders?.[0];

//     //ajax call 2
//     const request2 = new XMLHttpRequest();
//     request2.open(
//       'GET',
//       `https://countries-api-836d.onrender.com/countries/alpha/${neighbor}`
//     );
//     request2.send();

//     request2.addEventListener('load', function () {
//       const data2 = JSON.parse(this.responseText);
//       // console.log(data2);
//       renderCountry(data2, 'neighbour');
//     });

//     document.querySelectorAll('.country').forEach(e =>
//       e.addEventListener('click', function (e) {
//         e.target.closest('.country').remove();
//       })
//     );
//   });
// };

// setTimeout(() => {
//   console.log(1);
//   setTimeout(() => {
//     console.log(2);
//     setTimeout(() => {
//       console.log(3);
//       setTimeout(() => {
//         console.log(4);
//         setTimeout(() => {
//           console.log(5);
//           setTimeout(() => {
//             console.log(6);
//           }, 1000);
//         }, 1000);
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

const request = fetch(
  'https://countries-api-836d.onrender.com/countries/name/serbia'
);
// console.log(request);

const getCountryData = function (country) {
  fetch(`https://countries-api-836d.onrender.com/countries/name/${country}`)
    .then(response => response.json())
    .then(data => {
      // console.log(data);
      renderCountry(data[0]);
      const neighbour = data[0].borders[0];
      // console.log(neighbour);
      if (!neighbour) return;

      return fetch(
        `https://countries-api-836d.onrender.com/countries/alpha/${neighbour}`
      );
    })
    .then(response => response.json())
    .then(data => renderCountry(data, 'neighbour'))
    .catch(err => {
      console.error('ERROR! No internet connection');
      renderError('Lost connection.');
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};
btn.addEventListener('click', function () {
  getCountryData('portugal');
});
