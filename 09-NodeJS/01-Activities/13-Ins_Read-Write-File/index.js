// fs is a Node standard library package for reading and writing files
const fs = require('fs');


function waitForTime(seconds, callback) {
  setTimeout(() => {
    callback(true)
  }, seconds * 1000)
}




waitForTime(5, (error) => {
  error ? console.error('there was an error') : console.log('we waited')
})





// Return the contents of 'data.csv' as a string in the variable "data"
// "utf8" encodes the raw buffer data in human-readable format
fs.readFile('data.csv', 'utf8', (bananas, data) =>
  bananas ? console.error(bananas) : console.log('i read the file', data)
);

// fs.writeFile('test.txt', 'this is some data', 'utf8', (err) => {
//   if (err) {
//     console.error('failed to write the file')
//   } else {
//     console.log('i wrote to a file')
//   }
// })

// Uncomment this next function to write to the file with anything you pass in as process.argv[2]

// fs.writeFile('log.txt', process.argv[2], (err) =>
//   err ? console.error(err) : console.log('Success!')
// );
