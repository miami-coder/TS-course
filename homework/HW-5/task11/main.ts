let sum = (arr: number[]) => {
    let basket = 0;
    for (let item of arr) {
        basket += item;
    }
    return basket;
}
console.log(sum([5, 6, 7]));