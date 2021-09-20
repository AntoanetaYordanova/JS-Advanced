function sortArray(inputArr, type) {
    let result = [];

    if(type === 'asc') {
        result = inputArr.sort((a, b) => a - b);
    } else {
        result = inputArr.sort((a, b) => b - a);
    }

    return result;
}

sortArray([14, 7, 17, 6, 8], 'asc');