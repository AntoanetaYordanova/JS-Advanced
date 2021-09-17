function add(num) {
    let sum = 0;

    function inner(number) {
        sum += number;
        return inner;
    }

    
}