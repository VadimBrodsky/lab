const fs = require('fs');

// Synchronous read file
let greet = fs.readFileSync(`${__dirname}/greet.txt`, 'utf8');
console.log(greet);

let greet2 = fs.readFile(`${__dirname}/greet.txt`, 'utf8', (err, data) => {
  // if the utf8 parameter is missing, the data will be a binary buffer
  console.log(data);
});

console.log('Done!');
