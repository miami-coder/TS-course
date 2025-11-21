type Created = { id: number, name: string, age: number };

function foobar(users: Created[]): void {
    for (let user of users) {
        document.write(`<div>${user.id} ${user.name} ${user.age}</div>`)
    }
}

foobar([
    {id: 1, name: 'kokos', age: 123},
    {id: 2, name: 'abrikos', age: 124},
    {id: 3, name: 'pomidor', age: 125},
    {id: 4, name: 'cocumber', age: 126},
    {id: 5, name: 'kavun', age: 127}
]);