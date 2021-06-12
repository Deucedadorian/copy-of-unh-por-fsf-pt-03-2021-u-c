const Vehicle = require('./vehicle');

class Car extends Vehicle {
  // name = 'Car'

  constructor(input) {
    input.numberOfWheels = 0;
    input.sound = 'beep';
    super(input);
    // this.id = input.id;
    // this.numberOfWheels = input.numberOfWheels;
    // this.sound = input.sound;
    this.color = input.color;
    this.passengers = input.passengers;
  }

  printInfo() {
    // super.printInfo()
    console.log('I am a car')
  }

  useHorn() {
    console.log(this.sound);
  }

  checkPassengers() {
    if (this.passengers.length > 4) {
      console.log(
        'This car only seats 4 people. You have too many passengers!'
      );
    } else {
      console.log(`You have room for ${4 - this.passengers.length} people.`);
    }
  }
}

const carPassengers = [
  'Aristotle',
  'Confucius',
  'Socrates',
  'Lao-Tzu',
  'Plato',
];

const car = new Car({
  id: 15,
  color: 'blue',
  passangers: carPassengers,
});

console.log('---CAR---');
car.printInfo();
car.useHorn();
// car.checkPassengers();
console.log(car.name)
