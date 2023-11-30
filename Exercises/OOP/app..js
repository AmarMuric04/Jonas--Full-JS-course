// // Coding Challenge #1

// /*
// 1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
// 2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
// 3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
// 4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

// DATA CAR 1: 'BMW' going at 120 km/h
// DATA CAR 2: 'Mercedes' going at 95 km/h

// GOOD LUCK 😀
// */
// console.log("123");
// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
//   console.log(this.make + " Starting speed: " + this.speed + "km/h");
// };

// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(this.make + " After accelerating: " + this.speed + "km/h");
// };

// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(this.make + " After braking: " + this.speed + "km/h");
// };

// const BMW = new Car("BMW", 120);
// const Mercedes = new Car("Mercedes", 95);

// BMW.accelerate();
// BMW.accelerate();
// BMW.accelerate();
// Mercedes.brake();
// BMW.brake();
// Mercedes.brake();
// Mercedes.accelerate();
// Mercedes.brake();
// BMW.brake();
// Mercedes.accelerate();
// BMW.accelerate();
// Mercedes.brake();
// BMW.accelerate();
// BMW.brake();
// Mercedes.accelerate();
// Mercedes.brake();
// Mercedes.accelerate();
// BMW.brake();
// BMW.brake();
// Mercedes.brake();

// Coding Challenge #2

/* 
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h

GOOD LUCK 😀
*/

class Car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate() {
    this.speed += 10;
    console.log(this.make + " After accelerating: " + this.speed + "km/h");
  }
  brake() {
    this.speed -= 5;
    console.log(this.make + " After braking: " + this.speed + "km/h");
  }

  get speedUS() {
    return console.log("Current speed in mi/h is: " + this.speed / 1.6);
  }
  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const Ford = new Car("Ford", 120);

Ford.accelerate();
Ford.brake();

Ford.speedUS;
Ford.speedUS = 100;
console.log(Ford);
