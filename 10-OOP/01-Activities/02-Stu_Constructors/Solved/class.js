// Constructor function called 'Developer' that takes in 'name' and 'tech'
// Includes a method called 'introduction()'
class Developer {
  static myMethodName() {
    console.log('you called a static method!')
  }

  constructor(name, tech) {
    this.name = name;
    this.tech = tech;
  }

  introduction() {
    console.log(`Hi, my name is ${this.name} and I love ${this.tech}!`);
  }

  intro() {
    this.introduction()
  }
}

// Creates a new object using the 'Developer' constructor
const rita = new Developer('Rita', 'JavaScript');

// Calls the 'introduction()' method on the new object
rita.introduction();

Developer.myMethodName()

// rita.myMethodName() // WILL NOT WORK