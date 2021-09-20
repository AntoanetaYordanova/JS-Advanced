function printTwo(array, num) {
    let printArr = [];

    for(let i = 0; i < array.length; i += num) {
        printArr.push(array[i]);
    }

    return printArr;
}

printTwo(['5', '20', '31', '4', '20'], 2);