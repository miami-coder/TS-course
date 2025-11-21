type Author = {name: string, age: number};
type Books = {
    title: string,
    pageCount: number,
    genre: string,
    authors: Author[]
}

let book1: Books = {
    title: 'qwerty',
    pageCount: 100,
    genre: 'asdfg',
    authors: [{name: 'John', age: 30}, {name: 'Pete', age: 40}]
}