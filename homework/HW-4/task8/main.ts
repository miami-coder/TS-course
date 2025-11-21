// function foobar(arrayOfPrimitives: any[]): void {
type Primitive = boolean | number | string;
function foobar(arrayOfPrimitives: Primitive[]): void {
    document.write(`<ul>`)
    for (let item of arrayOfPrimitives) {
        document.write(`<li>${item}</li>`)
    }
    document.write(`</ul>`)
}
foobar(['hi world!', 123, true, NaN]);