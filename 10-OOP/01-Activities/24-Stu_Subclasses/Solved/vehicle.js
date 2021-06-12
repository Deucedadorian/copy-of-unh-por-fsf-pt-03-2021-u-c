class Vehicle {
  name = 'Vehicle'

  constructor(input) { //id, numberOfWheels, sound) {
    this.id = input.id;
    this.numberOfWheels = input.numberOfWheels;
    this.sound = input.sound;
  }

  useHorn() {
    throw new Error('Horn is not implemented on the base Vehicle class')
  }

  printInfo() {
    console.log(`This vehicle has ${this.numberOfWheels} wheels`);
    console.log(`This vehicle has an id of ${this.id}`);
  }
}
module.exports = Vehicle;
