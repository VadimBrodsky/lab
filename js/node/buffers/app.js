'use strict';

// Buffer is available globally in Node
// UTF8 is the default encoding
const buf = new Buffer('Hello', 'utf8');

// buffers are kinda like an array
console.log(buf);
console.log(buf.toJSON());
console.log(buf[2]);

buf.write('wo');
console.log(buf.toString());



// ES2015, typed arrays to deal with binary data
const buffer = new ArrayBuffer(8);
const view = new Int32Array(buffer);
view[0] = 5;
view[1] = 15;
console.log(view);
