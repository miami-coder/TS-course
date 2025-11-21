let s1: string = 'hello world';
let s2: string = 'lorem ipsum';
let s3: string = 'javascript is cool';

let string: string[] = [s1, s2, s3];
for (let s of string) {
    console.log(s.toUpperCase());
}