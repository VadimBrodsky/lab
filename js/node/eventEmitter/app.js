const Emitter = require('./emitter');
const emtr = new Emitter();

// Set the first event listener
emtr.on('greet', () => {
  console.log('Somewhere, someone said Aloha.');
});

// Set the second event listener
emtr.on('greet', () => {
  console.log('A greeting occured!');
});


// Event happened, fire emitter
console.log('Hello!');
emtr.emit('greet');
