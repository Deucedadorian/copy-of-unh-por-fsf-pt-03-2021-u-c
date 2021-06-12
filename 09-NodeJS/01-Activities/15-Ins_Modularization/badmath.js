// console.log(process.argv)

const pie = 'apple';
const oranges = 'are good';
let i = 0

const predictable = () => {
  return i++
};


// module.exports is an object we use to store variables or methods
module.exports = {
  i: () => i,
  pie: pie,
  predictable: predictable,
  oranges,
};

const somethingElse = 'to export'

module.exports.somethingElse = somethingElse
module.exports.anotherThing = false
