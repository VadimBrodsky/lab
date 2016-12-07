var Student = (function () {
    function Student(firstName, middleName, lastName) {
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleName + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "Hello " + person.firstName + " " + person.lastName;
}
// let user = 'Jane User';
// let user = [0, 1, 2];
// let user = { firstName: 'Jane', lastName: 'Doe' };
var user = new Student('Jane', 'M.', 'Doe');
// document.body.innerHTML = greeter();
document.body.innerHTML = greeter(user);
