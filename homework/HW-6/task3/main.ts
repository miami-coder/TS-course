let s1: string = 'HELLO WORLD';
let s2: string = 'LOREM IPSUM';
let s3: string = 'JAVASCRIPT IS COOL';

let string: string[] = [s1, s2, s3];
for (let s of string) {
    console.log(s.toLowerCase());
}