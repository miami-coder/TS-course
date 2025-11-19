"use strict";
class User {
    name;
    age;
    status;
    constructor(name, age, status) {
        this.name = name;
        this.age = age;
        this.status = status;
    }
    greeting() {
        console.log('qwerty');
    }
}
let user = new User('petro', 123, false);
let users = [
    new User('petro', 123, false)
];
console.log(users);
//# sourceMappingURL=main.js.map