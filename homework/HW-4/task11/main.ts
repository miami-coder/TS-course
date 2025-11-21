function sum(arr: number[]): number {
    let basket = 0;
    for (let item of arr) {
        basket = basket + item;
    }
    return basket;
}

console.log(sum([5, 6, 7]));