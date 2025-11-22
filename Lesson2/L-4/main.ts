type UserType = {
    name: string;
    age: number;
    status: boolean;
}

type UserType2 = UserType & { id: number };

let users: UserType2[] = [
    {id: 1, name: 'petro', age: 20, status: true},
    {id: 2, name: 'vasiliy', age: 21, status: false},
    {id: 3, name: 'jeka', age: 22, status: true},
    {id: 4, name: 'ivan', age: 23, status: true},
    {id: 5, name: 'olya', age: 24, status: false},
    {id: 6, name: 'max', age: 25, status: true},
    {id: 7, name: 'anya', age: 26, status: true},
    {id: 8, name: 'oleg', age: 27, status: false},
    {id: 9, name: 'andrey', age: 28, status: true},
    {id: 10, name: 'jora', age: 29, status: true}
];

type MyFn = (a: number) => void