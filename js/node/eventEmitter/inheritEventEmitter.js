'use strict';

const EventEmitter  = require('events');
const util = require('util');


function Greetr() {
  // Super constructor, to inherit the properties of the parent
  EventEmitter.call(this);
  this.greeting = 'Hello World';
}

// Greetr will inherit all of the methods and properties of EventEmitter
// by linking the prototype chain from Greetr to EventEmitter
util.inherits(Greetr, EventEmitter);

// Extend the prototype with additional methods
Greetr.prototype.greet = function(data) {
  console.log(this.greeting + ', ' + data);
  // Pass data to the event, from Node EventEmitter
  this.emit('greet', data);
}


// Same as above but using ES2015 class syntax
// can also be in a separate module
// module.exports = class Greetr extends ...
class ES2015Greetr extends EventEmitter {
  constructor() {
    super();
    this.greeting = 'Hello World';
  }

  greet(data) {
    console.log(`${this.greeting}, ${data}`);
    this.emit('greet', data);
  }
}

// let greeter1 = new Greetr();
let greeter1 = new ES2015Greetr();
greeter1.on('greet', (data) => console.log("Someone greeted: " + data));

greeter1.greet('John Snow');


