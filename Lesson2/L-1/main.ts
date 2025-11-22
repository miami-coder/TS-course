// let elementsByClassNameTarget: HTMLCollectionOf<Element> = document.getElementsByClassName('target');
// console.log(elementsByClassNameTarget);
//
// let elementsByTagNameDiv: HTMLCollectionOf<HTMLDivElement> = document.getElementsByTagName('div');
//
// let forms: HTMLCollectionOf<HTMLFormElement> = document.forms;
// // @ts-ignore
// let f1: HTMLFormElement = forms[0];
// let f1Element: HTMLInputElement = f1['username'];
// console.log(f1Element);

// let htmlParagraphElement: HTMLParagraphElement = document.createElement('p');

type UserType = { name: string, age: number, status: boolean }

let users: UserType[] = [
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

for (const user of users) {
    let div: HTMLDivElement = document.createElement('div');

    div.innerText = user.name;
    document.body.appendChild(div);
}

function appender(tag:keyof HTMLElementTagNameMap) {
    document.createElement(tag)
}