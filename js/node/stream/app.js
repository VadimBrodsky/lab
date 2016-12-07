const fs = require('fs');

let readable = fs.createReadStream(`${__dirname}/bigfile.txt`, { encoding: 'utf8', highWaterMark: 32 * 1024 } );

let writeable = fs.createWriteStream(`${__dirname}/bigfile.txt`);

readable.on('data', (chunk) => {
  console.log(chunk);
  writeable.write(chunk);
});
