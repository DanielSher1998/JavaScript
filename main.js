// This is my first JavaScript code!
console.log('Hello World');

// Cannot be a reserved keyword
// Should be meaningful
// Cannot start with a number (1name)
// Cannot contain a space or hyphen (-)
// Are case-sensitive

let lastName = 'Hamedani';

let interestRate = 0.3;
console.log(interestRate);

let name = 'Mosh';
let age = 30;
let isApproved = false;
let firstName = undefined;
let selectedColor = null;

let person = {
  name: 'Mosh',
  age: 30
};

// Dot Notation
person.name = 'John';

// Bracket Notation
let selection = 'name';
person[selection] = 'Mary';

console.log(person.name);

selectedColor = ['red', 'blue'];
selectedColor[2] = 1;
console.log(selectedColor.length);

// Performing a task
function greet(name, lastName) {
  console.log('Hello ' + name + ' ' + lastName);
}

// Calculating a value
function square(number) {
  return number * number;
}

console.log(square(2));

// let, const
const score = 10;
console.log(score);

// String, Numbers, Boolean, null, undefined
const rating = 4.5;
const isCool = true;
const x = null;
const y = undefined;
let z;

console.log(typeof x);