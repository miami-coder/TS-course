type Primitive = string | number | boolean
let foobar = (arrayOfPrimitives: Primitive[]): void => {
    document.write(`<ul>`)
    for (let item of arrayOfPrimitives) {
        document.write(`<li>${item}</li>`);
    }
    document.write(`</ul>`)
}

foobar(['Hello, World!', 10, NaN, true]);