// extract map from the prototype, to be used on other things
const map = f => x => Array.prototype.map.call(x, f);

// now use map on other things
const items = document.querySelectorAll('div');
map(console.log)(items);

// on strings
const value = "Hello World!";
map(console.log)(value);

// use decoupling on objects
const getFullName = ({ first, last }) => `${first}, ${last}`;
getFullName({ first: 'John', last: 'Snow' });
// => 'John Show'

map(getFullName)([
    { first: 'Rob', last: 'Stark' },
    { first: 'Brandon', last: 'Stark' },
    { first: 'Rikkon', last: 'Stark' },
]);
// => ['Rob Stark', 'Brandon Stark', 'Rikkon Stark' ]

// or on plain objects
const obj = {
  0: 4,
  1: 5,
  2: 6,
  length: 3,
};

map(increase)(obj);
// => [5, 6, 7]

// compose functions
const increaseOne = x => x + 1;
const increaseMany = map(increaseOne);

increaseMany([1, 2, 3]);
// => [2, 3, 4]

// without the use of this
const cat = { sound: 'meow' };
const speak = ({ sound }) => console.log(sound);
const shout = obj => speak({ ...obj, sound: `${obj.sound.toUpperCase()}!` });

speak(cat);
// => 'meow'
shout(cat);
// => 'MEOW!'
