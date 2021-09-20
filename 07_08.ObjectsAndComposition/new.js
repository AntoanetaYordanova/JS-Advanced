const arr = [10, 20, 30, 40];

let obj = arr.reduce((acc, el, i) => {
    acc[i] = el;
    return acc;
}, {})

console.log(obj);