function extract(input) {
    let arr = [];

    for(let i = 0; i < input.length; i++) {
        if(i === 0) {
            arr.push(input[0]);
            continue
        }
        let lastNum = arr[arr.length - 1];
        let currentNum = input[i];
        if(lastNum < currentNum) {
            arr.push(currentNum)
        }
    }

    return arr;
}

console.log(extract([1, 3, 8, 4, 10, 12, 3, 2, 24]));
console.log('--------');
extract([1, 2, 3,4]);
console.log('--------');
extract([20, 3, 2, 15, 6, 1]);
