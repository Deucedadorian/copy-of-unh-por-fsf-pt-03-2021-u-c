class Animal {
  constructor(petName) {
    this.petName = petName
  
    const myFunc = () => {
      console.log(this.petName + ' wants to go outside')
    }

    this.myOtherMethod = myFunc.bind(null)
  }

  speak() {
    console.log(`${this.petName} is speaking to you… they say go get them a treat`)
  }
}

const pet = new Animal('Jumbo')

pet.speak()
pet.myOtherMethod()
