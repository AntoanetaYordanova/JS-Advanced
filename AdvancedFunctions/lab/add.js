function solution(num) {
    let x = num;
    return function(add) {
        return x + add;
    }
}

let add7 = solution(7);
console.log(add7(2));
console.log(add7(3));
