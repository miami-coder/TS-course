class User {
    name: string;
    age: number;
    status: boolean;

    constructor(name: string, age: number, status: boolean) {
        this.name = name;
        this.age = age;
        this.status = status;
    }

    greeting() {
        console.log('qwerty')
    }
}

let user = new User('petro', 123, false)

let users: User[] = [
    new User('petro', 123, false)
];

console.log(users);