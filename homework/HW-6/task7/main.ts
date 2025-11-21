function sortNums(nums: number[], direction: string): number[] {
    if (direction === 'ascending') return nums.sort((a, b) => a - b);
    if (direction === 'descending') return nums.sort((a, b) => b - a);

    return nums;
}