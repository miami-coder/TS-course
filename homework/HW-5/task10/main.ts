let arrayMinValue = (numbers: number[]): number => {
    let min = numbers[0];
    for (let number of numbers) {
        if (number < min!) {
            min = number;
        }
    }
    return min!;
}

console.log(arrayMinValue([1, 8, 13, -10, 32, 95, -53]));