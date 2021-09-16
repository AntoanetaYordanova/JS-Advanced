function functionalSum() {
    let num = 0;

    function addNum(a) {
       return (b) => {
           return (c) => {
               return a + b + c;
           }
       }
    }

    return addNum;
}

let add = functionalSum();
console.log(add(1));
console.log(add(1)(6)(-3));