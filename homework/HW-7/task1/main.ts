class Users {
    constructor(private id: number, private name: string, private surname: string, private email: string, private phone: string) {

    }
}


let user = new Users(1, 'Stepan', 'qwerty','qwert@gmail.com', '+123567890');

let users: Users[] = [
    new Users(1, 'Stepan', 'qwerty', '@gmail1', '+123567890'),
    new Users(2, 'Stepan', 'qwerty', '@gmail2', '+123567890'),
    new Users(3, 'Stepan', 'qwerty', '@gmail3', '+123567890'),
    new Users(4, 'Stepan', 'qwerty', '@gmail4', '+123567890'),
    new Users(5, 'Stepan', 'qwerty', '@gmail5', '+123567890'),
    new Users(6, 'Stepan', 'qwerty', '@gmail6', '+123567890'),
    new Users(7, 'Stepan', 'qwerty', '@gmail7', '+123567890'),
    new Users(8, 'Stepan', 'qwerty', '@gmail8', '+123567890'),
    new Users(9, 'Stepan', 'qwerty', '@gmail9', '+123567890'),
    new Users(10, 'Stepan', 'qwerty', '@gmail10', '+123567890'),
];
console.log(users);