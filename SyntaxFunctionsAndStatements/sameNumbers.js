function sameNumbers(num) {
    let arrNum = String(num).split('') .map(Number);
    let areSameNums = true;
    let sum = 0;

    for(let i = 0; i < arrNum.length; i++) {

        if(i === arrNum.length - 1) {
            sum += arrNum[i];
            break;
        }
        sum += arrNum[i];
        if(arrNum[i] !== arrNum[i + 1]) {
            areSameNums = false;
        }
    }

    console.log(areSameNums);
    console.log(sum);
}

sameNumbers(2222222)