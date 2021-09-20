function sortNums(arr) {
    let sorted = arr.sort((a, b) => a - b);
    let smallHalf = sorted.splice(0, sorted.length / 2);
    let bigHalf = sorted;
    let resultArr = [];  

    for(let i = 0; i < bigHalf.length; i++) {
        if(smallHalf[i] !== undefined) {
            resultArr.push(smallHalf[i]);
        }

        resultArr.push(bigHalf[bigHalf.length - 1 - i]);
    }
     return resultArr
}

console.log(sortNums([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));