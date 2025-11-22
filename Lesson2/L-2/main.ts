interface IUser {
    id: number;
    name: string;
}

fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((value: IUser[]) => {
        // @ts-ignore
        console.log(value[0].name);
    });

async function foobar(): Promise<IUser[]> {
    let users: IUser[] = await fetch('https://jsonplaceholder.typicode.com/users')
    .then((response: Response) => response.json())

    return users;
}