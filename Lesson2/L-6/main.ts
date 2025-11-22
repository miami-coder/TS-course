class User {
    private _name: string;
    private _age: number;
    private _status: boolean;


    constructor(name: string, age: number, status: boolean) {
        this._name = name;
        this._age = age;
        this._status = status;
    }
    greeting() {
        console.log('Hello World!');
    }


    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get age(): number {
        return this._age;
    }

    set age(value: number) {
        this._age = value;
    }

    get status(): boolean {
        return this._status;
    }

    set status(value: boolean) {
        this._status = value;
    }
}
let user = new User('weqe', 3, true);
console.log(user.name);

class User2 extends User {
    // id: number;

    constructor(name: string, age: number, status: boolean, private id: number) {
        super(name, age, status);
        this.id = id;
    }
}

let user2 = new User2('asd', 1, false, 1);
console.log(user2.name);