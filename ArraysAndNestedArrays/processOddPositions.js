function processOddPositions (input) {
    return input.filter((element, i) => i % 2 !== 0)
        .map(element => element * 2)
        .reverse()
        .join(' ');
        
}

console.log(processOddPositions([10, 15, 20, 25]))