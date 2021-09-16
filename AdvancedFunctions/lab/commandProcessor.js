function solution () {
    let str = '';

    function append(newStr) {
        str += newStr;
    }

    function removeStart(n) {
        str = str.substring(n)
    }

    function removeEnd(n) {
        str = str.slice(0, -n);
    }

    function print () {
        console.log(str);
    }
    
    return {
        append,
        removeEnd,
        removeStart,
        print
    }
}

let secondZeroTest = solution();

secondZeroTest.append('123');
secondZeroTest.append('45');
secondZeroTest.removeStart(2);
secondZeroTest.removeEnd(1);
secondZeroTest.print();
