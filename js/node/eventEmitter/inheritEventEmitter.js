const EventEmitter  = require('events');
const util = require('util');

function Greetr() {
  this.greeting = 'Hello World';
}

// Greetr will inherit all of the methods and properties of EventEmitter
util.inherits(Greetr, EventEmitter);

// Extend the prototype with additional methods
Greetr.prototype.greet = function(data) {
  console.log(this.greeting + ', ' + data);
  // Pass data to the event, from Node EventEmitter
  this.emit('greet', data);
}

let greeter1 = new Greetr();
greeter1.on('greet', (data) => console.log("Someone greeted: " + data));

greeter1.greet('John Snow');
