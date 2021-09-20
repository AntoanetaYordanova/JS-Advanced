function sortFunc(inputArr) {
    const sorted = inputArr.sort(funct)

    function funct(a, b) {
       if(a.length - b.length) {
           return a.length - b.length;
       } else  {
           return a.localeCompare(b);
       }
    }

    return sorted.join('\n');
}

console.log(sortFunc(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']));