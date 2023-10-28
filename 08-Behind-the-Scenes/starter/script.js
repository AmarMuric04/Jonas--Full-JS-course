'use strict';

function calcAge(birthYear) {
  const age = 2037 - birthYear;
  function printAge() {
    let output = `${firstName} is ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear > 1981 && birthYear < 1996) {
      var millenial = true;

      //creating a new variable under the same name as one of the global
      //variables, because its in a different scope, there isnt a problem
      const firstName = 'Steven';

      //reassignign whatever was in output
      output = 'New output!';
      const str = `You are a millenial ${firstName}`;
      console.log(str);

      function add(a, b) {
        return console.log(a + b);
      }
      add(5, 2);
    } else {
      var millenial = false;
      const str = `You are not a millenial ${firstName}`;
      console.log(str);
    }
    console.log(output);

    console.log(millenial);
    // console.log(firstName);
  }
  // add(5, 2);
  printAge();
  return age;
}

const firstName = 'Amar';
calcAge(1991);
