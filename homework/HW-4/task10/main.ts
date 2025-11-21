function arrayMinValue(numbers: number[]): any {
    let min: any = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        let number: any = numbers[i];
        if (number < min) {
            min = number;
        }
    }
    return min;
}

arrayMinValue([11, 22, 33, 44, -123, 99])