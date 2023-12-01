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

// class Car {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }
//   accelerate() {
//     this.speed += 10;
//     console.log(this.make + " After accelerating: " + this.speed + "km/h");
//   }
//   brake() {
//     this.speed -= 5;
//     console.log(this.make + " After braking: " + this.speed + "km/h");
//   }

//   get speedUS() {
//     return console.log("Current speed in mi/h is: " + this.speed / 1.6);
//   }
//   set speedUS(speed) {
//     this.speed = speed * 1.6;
//   }
// }

// const Ford = new Car("Ford", 120);

// Ford.accelerate();
// Ford.brake();

// Ford.speedUS;
// Ford.speedUS = 100;
// console.log(Ford);
// Coding Challenge #3

/* 
1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);
2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';
3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! HINT: Review the definiton of polymorphism 😉

DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   this.speed += 20;
//   this.charge--;
//   console.log(
//     `${this.make} is going at ${this.speed} km/h, with a charge of ${this.charge}%`
//   );
// };
// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(
//     `${this.make} pressed on the brakes, current speed is ${this.speed} km/h, with a charge of ${this.charge}%`
//   );
// };
// const EV = function (make, speed, charge) {
//   Car.call(this, make, speed);
//   this.charge = charge;
// };

// EV.prototype = Object.create(Car.prototype);
// EV.prototype.chargeBattery = function (chargeTo) {
//   chargeTo > this.charge
//     ? (this.charge = chargeTo)
//     : alert("Can't charge battery backwards");
//   console.log(`Battery charged to ${this.charge}%`);
// };
// const Tesla = new EV("Tesla", 120, 23);

// Tesla.accelerate();
// Tesla.accelerate();
// Tesla.accelerate();
// Tesla.accelerate();
// Tesla.brake();
// Tesla.chargeBattery(100);
// Tesla.accelerate();
// Tesla.accelerate();
// Tesla.accelerate();
// // Tesla.chargeBattery(50);

// Coding Challenge #4

/* 
1. Re-create challenge #3, but this time using ES6 classes: create an 'EVCl' child class of the 'CarCl' class
2. Make the 'charge' property private;
3. Implement the ability to chain the 'accelerate' and 'chargeBattery' methods of this class, and also update the 'brake' method in the 'CarCl' class. They experiment with chining!

DATA CAR 1: 'Rivian' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
}

class EVCl extends CarCl {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = 23;
  }
  checkBattery() {
    if (this.#charge > 100) {
      this.#charge = 100;
    } else if (this.#charge < 0) {
      this.#charge = 0;
    }
    return this;
  }

  accelerate() {
    if (this.#charge === 0) return this;
    this.speed += 100;
    this.#charge -= 15;
    this.checkBattery();
    console.log(
      `${this.make} hit the gas! Current speed is ${
        this.speed
      } km/h, battery is at ${this.#charge}%`
    );
    return this;
  }

  brake() {
    this.speed -= 120;
    console.log(
      `${this.make} just hit the brakes! Current speed dropped to ${this.speed} km/h`
    );
    return this;
  }

  chargeBattery() {
    if (this.#charge === 100) return this;
    this.#charge += 50;
    this.checkBattery();
    console.log(
      `${this.make}'s battery was successfully charged! ${this.#charge}%`
    );
    return this;
  }

  drift() {
    console.log(
      `${this.make} just did a sick drift going at the speed of ${this.speed} km/h!`
    );
    return this;
  }
  crashed() {
    console.log(`${this.make} lost control and CRASHED!!!`);
    this.speed = 0;
    this.#charge = 0;
    console.log(this);
    return this;
  }

  repaired() {
    console.log(
      `A crazy mechanic came across the ${this.make} and decided to repair it!`
    );
    return this;
  }
}

const i8 = new EVCl("i8", 120, 23);

i8.accelerate()
  .chargeBattery()
  .chargeBattery()
  .chargeBattery()
  .drift()
  .brake()
  .chargeBattery()
  .accelerate()
  .accelerate()
  .brake()
  .accelerate()
  .accelerate()
  .drift()
  .brake()
  .crashed()
  .repaired()
  .chargeBattery()
  .chargeBattery()
  .accelerate()
  .accelerate()
  .drift()
  .drift()
  .drift()
  .accelerate();
