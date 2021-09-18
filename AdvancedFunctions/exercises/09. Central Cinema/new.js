let myArr = [{one : 1}, {two : 2}];

let one = myArr.find(e => e.one);
console.log(one);

one.one = 3;


console.log(myArr);