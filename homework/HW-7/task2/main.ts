class Users1 {
    constructor(private _id: number, private _name: string, private _surname: string, private _email: string, private _phone: string) {

    }


    get id(): number {
        return this._id;
    }

// id: number;
    // name: string;
    // surname: string;
    // email: string;
    // phone: string;
    // constructor(id: number, name: string, surname: string, email: string, phone: string) {
    //     this.id = id;
    //     this.name = name;
    //     this.surname = surname;
    //     this.email = email;
    //     this.phone = phone;
    // }
}

let user = new Users1(1, 'Stepan', 'qwerty','qwert@gmail.com', '+123567890');

let users: Users1[] = [
    new Users1(1, 'Stepan', 'qwerty', '@gmail1', '+123567890'),
    new Users1(2, 'Stepan', 'qwerty', '@gmail2', '+123567890'),
    new Users1(3, 'Stepan', 'qwerty', '@gmail3', '+123567890'),
    new Users1(4, 'Stepan', 'qwerty', '@gmail4', '+123567890'),
    new Users1(5, 'Stepan', 'qwerty', '@gmail5', '+123567890'),
    new Users1(6, 'Stepan', 'qwerty', '@gmail6', '+123567890'),
    new Users1(7, 'Stepan', 'qwerty', '@gmail7', '+123567890'),
    new Users1(8, 'Stepan', 'qwerty', '@gmail8', '+123567890'),
    new Users1(9, 'Stepan', 'qwerty', '@gmail9', '+123567890'),
    new Users1(10, 'Stepan', 'qwerty', '@gmail10', '+123567890'),
];

const filterFunction = users.filter((user) => user.id % 2 ===0);
console.log(filterFunction);