// class UserGen<T> {
//     id: T;
//     name: string;
//
//
//     constructor(id: T, name: string) {
//         this.id = id;
//         this.name = name;
//     }
// }
//
// let userGen1 = new UserGen<number>(1, 'asd');
// let userGen2 = new UserGen<string>('qwe', 'asd');
// let userGen3 = new UserGen<{ x: number }>({x: 100500}, 'zxc');
//
// let arr: Array<number> = [11, 22, 33];

interface IUserLS {
    id: number;
    name: string;
}

let item = localStorage.getItem('user');

if (item) {
    let user: IUserLS = JSON.parse(item) as IUserLS;
}

interface IDog {
    aka: string;
}

function foobar<T>(key:string): T {
    let objJSON = localStorage.getItem(key);
    if (objJSON) {
        return JSON.parse(objJSON) as T;
    }
    return {} as T;
}

let iDog = foobar<IDog>('dog');

let iUserLS = foobar<IUserLS>('user');