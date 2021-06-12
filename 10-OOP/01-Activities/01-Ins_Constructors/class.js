class Animal {
  constructor(raining, noise) {
    this.raining = raining;
    // this.noise = noise;
  }

  makeNoise() {
    if (this.raining === true) {
      console.log(this.noise);
    }
  }
}

class Dog extends Animal {
  noise = 'Woof'

  bark() {
    this.makeNoise()
  }
}

class Cat extends Animal {
  noise = 'Meow'

  meow() {
    this.makeNoise()
  }
}

// Sets the variables "dogs" and "cats" to be animal objects and initializes them with raining and noise properties
const dogs = new Animal(true, 'Woof!');
const cats = new Animal(false, 'Meow!');

const inigo = new Dog()
inigo.bark()

const java = new Cat()
java.meow()

// Calling dogs and cats makeNoise methods
dogs.makeNoise();
cats.makeNoise();

// If we want, we can change an object's properties after they're created
// cats.raining = true;
// cats.makeNoise();

const massHysteria = (dogs, cats) => {
  if (dogs.raining === true && cats.raining === true) {
    console.log('DOGS AND CATS LIVING TOGETHER! MASS HYSTERIA!');
  }
};

massHysteria(dogs, cats);
