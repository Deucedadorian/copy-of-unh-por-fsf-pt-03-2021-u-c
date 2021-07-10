// 1) Where is carNoise stored?
// global
const carNoise = 'Honk';
// 2) Where is goFast stored?
// 
const goFast = speed => {
  // 4) When is speed assigned a value? Where is this value stored?
  // you pass the speed in as a peram when you call the gofast function
  
  // 5) Where is makeNoise stored?
  // line 12
  const makeNoise = sound => {
    console.log(`My speed is at ${speed}, time to ${sound}`);
  }

  // 6) What happens in the following statement?
  // honk is passed in as the sound for makeNoise func
  makeNoise(carNoise);
}

// 3) What happens in the following statement?
// gofast is called with you confirm the confirm shiz
if(confirm("Do you want to go fast?")) {
  goFast(80);
}
