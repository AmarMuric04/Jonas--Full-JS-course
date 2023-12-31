'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderCountry = function (data, className = '') {
  const html = `
  <article class="country ${className}">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
      <h3 class="country__name">${data.name}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(1)} people</p>
      <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
      <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
    </div>
  </article>
  `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
};

const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

    return response.json();
  });
};

const getCountryData = function (country) {
  // Country 1
  getJSON(
    `https://countries-api-836d.onrender.com/countries/name/${country}`,
    'Country not found'
  )
    .then(data => {
      renderCountry(data[0]);
      // const neighbour = data[0].borders[0];

      // if (!neighbour) throw new Error('No neighbour found!');

      // // Country 2
      // return getJSON(
      //   `https://countries-api-836d.onrender.com/countries/alpha/${neighbour}`,
      //   'Country not found'
      // );
    })

    // .then(data => renderCountry(data, 'neighbour'))
    .catch(err => {
      console.error(`${err} 💥💥💥`);
      renderError(`Something went wrong 💥💥 ${err.message}. Try again!`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener('click', function () {
  whereAmI();
});

// getCountryData('australia');
// console.log('Test start');

// setTimeout(() => {
//   console.log('0sec timeout');
// }, 0);
// Promise.resolve('Resolved promise 1#').then(res => console.log(res));

// Promise.resolve('Resolved promise 2#').then(res => {
//   for (let i = 0; i < 1000000000; i++) {}
//   console.log(res);
// });

// console.log('Test end');
//creating promises

// const lotteryPromise = new Promise(function (resolve, reject) {
//   console.log('Ticket bought.');
//   setTimeout(() => {
//     if (Math.random() >= 0.5) resolve('You win');
//     else reject(new Error('You lost your money'));
//   }, 2000);
// });

// lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

// promisifying settimeout
// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 2000);
//   });
// };

// wait(2)
//   .then(() => {
//     console.log('Waited 2 seconds');
//     return wait(1);
//   })
//   .then(() => {
//     console.log('Waited 3 seconds');
//     return wait(1);
//   })
//   .then(() => {
//     console.log('Waited 4 seconds');
//     return wait(1);
//   })
//   .then(() => {
//     console.log('Waited 5 seconds');
//     return wait(1);
//   })
//   .then(() => {
//     console.log('Waited 6 seconds');
//     return wait(1);
//   })
//   .then(() => console.log('Waited 1 seconds'));

// Promise.resolve('abc').then(res => console.log(res));
// Promise.reject(new Error('Problem!')).catch(err => console.error(err));

// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     // navigator.geolocation.getCurrentPosition(
//     //   position => resolve(position),
//     //   err => reject(err)
//     // );
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };

// getPosition()
//   .then(res => console.log(res))
//   .catch(err => console.error(err));

var requestOptions = {
  method: 'GET',
};
// const whereAmI = function (lat, lng) {
//   getPosition()
//     .then(pos => {
//       const { latitude: lat, longitude: lng } = pos.coords;
//       return fetch(
//         `https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${lng}&apiKey=5732bd3686e246b1803525c7c575d132`,
//         requestOptions
//       );
//     })
//     .then(response => response.json())
//     .then(data => {
//       console.log(data);
//       let mainData = data.features[0].properties;
//       console.log(`You are in ${mainData.city}, ${mainData.country}`);

//       getCountryData(mainData.country);
//     })
//     .catch(err => {
//       console.error('Lost internet connection');
//       console.log(`Error ${err}`);
//     });
// };

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const whereAmI = async function (country) {
  try {
    const pos = await getPosition();
    const { latitude: lat, longitude: lng } = pos.coords;
    const resGeo = await fetch(
      `https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${lng}&apiKey=5732bd3686e246b1803525c7c575d132`,
      requestOptions
    );
    if (!resGeo.ok) throw new Error(`Problem with fetching location.`);
    const dataGeo = await resGeo.json();
    const mainData = dataGeo.features[0].properties;
    const res = await fetch(
      `https://countries-api-836d.onrender.com/countries/name/${mainData.country}`
    );

    if (!res.ok) throw new Error(`Problem with fetching location.`);
    const data = await res.json();
    renderCountry(data[0]);
    return `You are in ${mainData.city}, ${mainData.country}`;
  } catch (err) {
    console.error(`${err}`);
    renderError(`Something went wrong ${err.message}`);

    throw err;
  }
};
console.log('First');

// const city = whereAmI();
// console.log(city);
// whereAmI()
//   .then(city => console.log(city))
//   .catch(err => console.error(err))
//   .finally(() => console.log('Third'));

(async function () {
  try {
    const city = await whereAmI();
    console.log(city);
  } catch (err) {
    console.log(err);
  }
  console.log('Third');
})();
// try {
//   let y = 1;
//   const x = 2;
//   x = 3;
// } catch (err) {
//   alert(err.message);
// }

const get3Countries = async function (c1, c2, c3) {
  try {
    // const [countryOne] = await getJSON(
    //   `https://countries-api-836d.onrender.com/countries/name/${c1}`
    // );
    // const [countryTwo] = await getJSON(
    //   `https://countries-api-836d.onrender.com/countries/name/${c2}`
    // );
    // const [countryThree] = await getJSON(
    //   `https://countries-api-836d.onrender.com/countries/name/${c3}`
    // );
    // console.log([countryOne.capital, countryTwo.capital, countryThree.capital]);

    const data = await Promise.all([
      getJSON(`https://countries-api-836d.onrender.com/countries/name/${c1}`),
      getJSON(`https://countries-api-836d.onrender.com/countries/name/${c2}`),
      getJSON(`https://countries-api-836d.onrender.com/countries/name/${c3}`),
    ]);
    console.log(data.map(d => d[0].capital));
  } catch (err) {
    console.log(err);
  }
};
get3Countries('serbia', 'turkey', 'india');

//promise.race
(async function () {
  const res = await Promise.race([
    getJSON(`https://countries-api-836d.onrender.com/countries/name/italy`),
    getJSON(`https://countries-api-836d.onrender.com/countries/name/germany`),
    getJSON(`https://countries-api-836d.onrender.com/countries/name/france`),
  ]);
  console.log(res[0].name);
})();

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error('Request took too long'));
    }, s * 1000);
  });
};

Promise.race([
  getJSON(`https://countries-api-836d.onrender.com/countries/name/belgium`),
  timeout(1),
])
  .then(data => console.log(data[0].name))
  .catch(err => console.log(err));

//promise.allsettled

Promise.allSettled([Promise.resolve('Idemo'), Promise.reject('jbg')]).then(
  data => console.log(data)
);

//promise.any
Promise.any([Promise.resolve('Idemo'), Promise.reject('jbg')]).then(data =>
  console.log(data)
);
