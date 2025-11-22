interface Array<T> {
    myFilter(callback: (value: T) => boolean):T[];
}
// @ts-ignore
Array.prototype.myFilter = function <T> (callback: (value: T) => boolean):T[] {
    const arr = [];
    for (const item of this) {
        if (callback(item)) arr.push(item);
    }
    return arr;
}

type User79 = { name: string; age: number, status: boolean };
let usersXXX: User79[] = [
    {name: 'petro', age: 20, status: true},
    {name: 'vasiliy', age: 21, status: false},
    {name: 'jeka', age: 22, status: true},
    {name: 'ivan', age: 23, status: true},
    {name: 'olya', age: 24, status: false},
    {name: 'max', age: 25, status: true},
    {name: 'anya', age: 26, status: true},
    {name: 'oleg', age: 27, status: false},
    {name: 'andrey', age: 28, status: true},
    {name: 'jora', age: 29, status: true}
];
// @ts-ignore
const result = usersXXX.myFilter((user) => user.status)
console.log(result);