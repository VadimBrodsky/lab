const fs = require('fs');
const zlib = require('zlib');

// readable stream
let readable = fs.createReadStream(`${__dirname}/bigfile.txt`);
// writable stream
let writeable = fs.createWriteStream(`${__dirname}/bigfile.txt`);
let compressed = fs.createWriteStream(`${__dirnamt}/bigfile.txt.gz`);

// transform stream
let gzip = zlib.createGzip();

// source --> destination
readable.pipe(writable);
readable.pipe(gzip).pipe(compressed);
