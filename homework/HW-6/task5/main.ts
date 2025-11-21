function stringToArray(str: string): string[] {
    if (str) {
        let split = str.split(' ');
        return split;
    }
    return [''];
}

console.log(stringToArray('Ревуть воли як ясла повні'));