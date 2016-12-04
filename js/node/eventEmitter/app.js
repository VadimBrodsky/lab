const CustomEmitter = require('./emitter');
const NodeEmitter = require('events');

// configuration to avoid magic strings
const eventConfig = require('./config').events;

const emtr = new CustomEmitter();
// const emtr = new NodeEmitter();

// Set the first event listener
emtr.on(eventConfig.GREET, () => {
  console.log('Somewhere, someone said Aloha.');
});

// Set the second event listener
emtr.on(eventConfig.GREET, () => {
  console.log('A greeting occured!');
});


// Event happened, fire emitter
console.log('Hello!');
emtr.emit(eventConfig.GREET);
