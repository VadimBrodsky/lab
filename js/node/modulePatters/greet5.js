// Reveal only the properties and function that want to be used, via an object literal
const greeting = 'Hello world';

function greet() {
  console.log(greeting);
}

module.exports = {
  greet: greet
};
