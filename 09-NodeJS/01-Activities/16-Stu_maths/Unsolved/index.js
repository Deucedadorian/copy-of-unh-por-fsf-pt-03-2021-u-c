const maths = require("./maths")

// const user = {
//   username: 'ben',
//   password: 'this is a bad password',
// }
// const { username, password } = user

// const username = user.username
// const password = user.password

// console.log(`His username is ${username} and password is ${password}`)

// TODO: Capture the values passed from the command line into these three variables: `operation`, `numOne` and `numTwo`

const operation = process.argv[2] // sum, difference
const num1 = parseInt(process.argv[3], 10)
const num2 = parseInt(process.argv[4], 10)

function notValidOperation() {
  console.error('operation does not exist')
  console.log('available operators are:', Object.keys(maths).join((', ')))
}

switch (operation) {
  case '+':
  case 'add':
  case 'sum': console.log('sum=', sum(num1, num2)); break
  case '-':
  case 'subtract':
  case 'difference': console.log('diff=', maths.difference(num1, num2)); break
  case 'multi':
  case 'multiply':
  case 'product': console.log('product=', maths.product(num1, num2)); break
  case 'quotient': console.log('quotient=', maths.quotient(num1, num2)); break
  default: notValidOperation(); break
}

// if (maths[operation]) {
//   console.log(maths[operation](num1, num2))
// } else {
//   notValidOperation()
// }
