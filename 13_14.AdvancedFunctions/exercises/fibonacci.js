function fibonacci() {
    let numOne = 0;
    let numTwo = 1;
    let sum = 0;
    let count = 0;

    function increaseNum() {
        if(count === 0) {
            count++;
            return 1
        }
        sum = numOne + numTwo;
        numOne = numTwo;
        numTwo = sum;
        return sum;
    }

    return increaseNum;
}

const f = fibonacci();

console.log(f());
console.log(f());
console.log(f());
console.log(f());
console.log(f());
