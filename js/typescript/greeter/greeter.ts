class Student {
  fullName: string;
  constructor( public firstName, public middleName, public lastName) {
    this.fullName = `${firstName} ${middleName} ${lastName}`;
  }
}


interface Person {
  firstName: string;
  lastName: string;
}


function greeter(person: Person) {
  return `Hello ${person.firstName} ${person.lastName}`;
}


// let user = 'Jane User';
// let user = [0, 1, 2];
// let user = { firstName: 'Jane', lastName: 'Doe' };
let user = new Student('Jane', 'M.', 'Doe');

// document.body.innerHTML = greeter();
document.body.innerHTML = greeter(user);

